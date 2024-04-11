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
                UserId = patient.UserId
            };

            _context.Patients.Add(_patient);
            _context.SaveChanges();
        }

    }
}
