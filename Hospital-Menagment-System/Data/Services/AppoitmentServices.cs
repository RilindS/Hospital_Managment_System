using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services;

public class AppoitmentServices
{
    private AppDbContext _context;
          private  DoctorServices _doctorServices;
          private DepartmentServices _departmentServices;
          
        
        public AppoitmentServices(AppDbContext context, DoctorServices doctorServices,DepartmentServices departmentServices)
        {
            _doctorServices = doctorServices;
            _context = context;
            _departmentServices = departmentServices;

        }
        public bool CheckAppointmentAvailability(AppointmentVM appointment)
        {
            var doctorId = _doctorServices.GetDoctorIdByName(appointment.DoctorName);
            if (doctorId == null)
            {
                throw new ArgumentException("Doctor name not found.");
            }

            bool isSlotTaken = _context.Appointments.Any(a => 
                a.DoctorId == doctorId && 
                a.Date == appointment.Date && 
                a.Time == appointment.Time
            );

            return !isSlotTaken;
        }

        
        
        public void AddAppoitment(AppointmentVM appointment)
        {
            var doctorId = _doctorServices.GetDoctorIdByName(appointment.DoctorName);
            if (doctorId == null)
            {
                throw new ArgumentException("doctor name not found.");
            }
            bool isSlotTaken = _context.Appointments.Any(a => 
                a.DoctorId == doctorId && 
                a.Date == appointment.Date && 
                a.Time == appointment.Time
            );

            if (isSlotTaken)
            {
                throw new InvalidOperationException("This time slot is already booked for the selected doctor.");
            }
            

            var newAppoitment = new Appointment()
            {
                PatientName = appointment.PatientName,
                PatientEmail = appointment.PatientEmail,
                Date = appointment.Date,
                Time = appointment.Time,
                Reason = appointment.Reason,
                
                DoctorName  = appointment.DoctorName,

                DoctorId = _doctorServices.GetDoctorIdByName(appointment.DoctorName),
                
                //metoda GetCityIdByName e merr qytetin qe eshte zgedh ja merr Id
                //,Id na duhet tani me e shtu si foreigkey kur shtohet Pacienti ne DB
                
            };

            _context.Appointments.Add(newAppoitment);
            _context.SaveChanges();
        }


        public List<Appointment> GetAllAppoitment()
        {
            var allDoctor = _context.Appointments.ToList();
            return allDoctor;
        }
        public Appointment GetAppoitmentById(int doctorId)
        {
            var allAppoitment = _context.Appointments.FirstOrDefault(n => n.AppointmentId == doctorId);
            return allAppoitment;
        }
        public Appointment UpdateAppoitmentById(int doctorId, AppointmentVM appointment)
        {
            var _appoitment = _context.Appointments.FirstOrDefault(n => n.AppointmentId == doctorId);

            if (_appoitment != null)
            {
               // _appoitment.DoctorName = doctor.DoctorName;
               //_appoitment.PatientName = appointment.PatientName;
               _appoitment.PatientEmail = appointment.PatientEmail;
                _appoitment.Date = appointment.Date;
                _appoitment.Time = appointment.Time;
                _appoitment.Reason = appointment.Reason;

                _appoitment.DoctorName = appointment.DoctorName;



                

                // nese esht ndrru qyteti me ja gjet prap ati qytetit te ri ID
                if (_appoitment.DoctorName != appointment.DoctorName)
                {
                    var cityId = _doctorServices.GetDoctorIdByName(_appoitment.DoctorName);
                    if (cityId == null)
                    {
                        throw new ArgumentException("Appoitment name not found.");
                    }
                    _appoitment.DoctorId = cityId; 
                }
              

                _context.SaveChanges();
            }
            return _appoitment;
        }


        public void DeleteAppoitmentById(int deptId)
        {
            var _doctor = _context.Appointments.FirstOrDefault(n => n.AppointmentId == deptId);
            if (_doctor != null)
            {
                _context.Appointments.Remove(_doctor);
                _context.SaveChanges();
            }
        }

}