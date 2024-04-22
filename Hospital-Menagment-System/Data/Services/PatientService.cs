using Hospital_Management_System.Data.Models;
using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services
{
    public class PatientService
    {
        private AppDbContext _context;
        public PatientService(AppDbContext context)
        {

            _context = context;

        }
        public void AddPatient(PatientVM patient)
        {
            var _patient = new Patient()
            {
                Name = patient.Name,
                Surname = patient.Surname,
                Email = patient.Email,
                PhoneNumber = patient.PhoneNumber,
                DateOfBirth = patient.DateOfBirth,
                City = patient.City,
                Street = patient.Street,
                DateRegistered = DateTime.Now,

            };

            _context.Patients.Add(_patient);
            _context.SaveChanges();
        }

        public List<Patient> GetAllPatient()
        {
            var allPatient = _context.Patients.ToList();
            return allPatient;
        }
        public Patient GetPatientById(int patientId)
        {
            var allPatient = _context.Patients.FirstOrDefault(n => n.PatientId == patientId);
            return allPatient;
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
                _patient.City = patient.City;
                _patient.Street = patient.Street;
                _patient.DateRegistered = DateTime.Now;

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

