using Hospital_Management_System.Data.Models;
using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services
{
    public class PatientService
    {
        private AppDbContext _context;
        private readonly CityServices _cityServices;
        private readonly RoomServices _roomServices;


        public PatientService(AppDbContext context, CityServices cityServices,RoomServices rommService )
        {
            _cityServices = cityServices;
            _roomServices = rommService;
            _context = context;
        }
        public int GetPatientIdByName(string cityName)
        {
            var doctor = _context.Patients.FirstOrDefault(c => c.Name == cityName);
            if (doctor != null)
            {
                return doctor.PatientId;
            }
            else
            {
                throw new ArgumentException("patient not found", nameof(cityName));
            }
        }
        
        public List<PatientDTO> GetPatientsByCity(string cityName)
        {
            var cityId = _cityServices.GetCityIdByName(cityName);
            if (cityId == null)
            {
                throw new ArgumentException("City name not found.");
            }

            return _context.Patients
                .Where(p => p.CityId == cityId)
                .Select(p => new PatientDTO
                {
                    PatientId = p.PatientId,
                    Name = p.Name,
                    Surname = p.Surname,
                    Email = p.Email,
                    PhoneNumber = p.PhoneNumber,
                    DateOfBirth = p.DateOfBirth,
                    Street = p.Street,
                    Qyteti = p.Qyteti,
                    DateRegistered = p.DateRegistered
                })
                .ToList();
        }
        public List<PatientDTO> GetPatientsByName(string patientName)
        {
            return _context.Patients
                .Where(p => p.Name == patientName)
                .Select(p => new PatientDTO
                {
                    PatientId = p.PatientId,
                    Name = p.Name,
                    Surname = p.Surname,
                    Email = p.Email,
                    PhoneNumber = p.PhoneNumber,
                    DateOfBirth = p.DateOfBirth,
                    Street = p.Street,
                    Qyteti = p.Qyteti,
                    DateRegistered = p.DateRegistered
                })
                .ToList();
        }
        public List<PatientDTO> GetPatientsByRoom(string patientRoom)
        {
            return _context.Patients
                .Where(p => p.Rooma == patientRoom)
                .Select(p => new PatientDTO
                {
                    PatientId = p.PatientId,
                    Name = p.Name,
                    Surname = p.Surname,
                    Email = p.Email,
                    PhoneNumber = p.PhoneNumber,
                    DateOfBirth = p.DateOfBirth,
                    Street = p.Street,
                    Qyteti = p.Qyteti,
                    DateRegistered = p.DateRegistered
                })
                .ToList();
        }

        public void AddPatient(PatientVM patient)
        {
            var cityId = _cityServices.GetCityIdByName(patient.Qyteti);
            if (cityId == null)
            {
                throw new ArgumentException("City name not found.");
            }
           var RoomId = _roomServices.GetRoomIdByName(patient.Room);
            if (cityId == null)
            {
                throw new ArgumentException("room name not found.");
            }

            var newPatient = new Patient
            {
                Name = patient.Name,
                Surname = patient.Surname,
                Email = patient.Email,
                PhoneNumber = patient.PhoneNumber,
                DateOfBirth = patient.DateOfBirth,
                Qyteti = patient.Qyteti,
                CityId = cityId,
                Rooma = patient.Room,
                RoomId = RoomId,
                    
                Street = patient.Street,
                DateRegistered = DateTime.Now
            };

            _context.Patients.Add(newPatient);
            _context.SaveChanges();
        }

        public List<Patient> GetAllPatient()
        {
            return _context.Patients.ToList();
        }

        public Patient GetPatientById(int patientId)
        {
            return _context.Patients.FirstOrDefault(n => n.PatientId == patientId);
        }

        public Patient UpdatePatientById(int patientId, PatientVM patient)
        {
            var _patient = _context.Patients.FirstOrDefault(n => n.PatientId == patientId);

            if (_patient != null)
            {
                _patient.Name = patient.Name;
                _patient.Surname = patient.Surname;
                _patient.Email = patient.Email;
                _patient.PhoneNumber = patient.PhoneNumber;
                _patient.DateOfBirth = patient.DateOfBirth;
                _patient.Street = patient.Street;
                _patient.DateRegistered = DateTime.Now;
                _patient.Qyteti = patient.Qyteti;
                _patient.Rooma = patient.Room;

                if (_patient.Qyteti != patient.Qyteti)
                {
                    var cityId = _cityServices.GetCityIdByName(patient.Qyteti);
                    if (cityId == null)
                    {
                        throw new ArgumentException("City name not found.");
                    }
                    _patient.CityId = cityId;
                }
                if (_patient.Rooma != patient.Room)
                {
                    var cityId = _roomServices.GetRoomIdByName(patient.Room);
                    if (cityId == null)
                    {
                        throw new ArgumentException("Room name not found.");
                    }
                    _patient.RoomId = cityId;
                }

                _context.SaveChanges();
            }
            return _patient;
        }

        public void DeletePatientById(int patientId)
        {
            var _patient = _context.Patients.FirstOrDefault(n => n.PatientId == patientId);
            if (_patient != null)
            {
                _context.Patients.Remove(_patient);
                _context.SaveChanges();
            }
        }
    }
    
}
