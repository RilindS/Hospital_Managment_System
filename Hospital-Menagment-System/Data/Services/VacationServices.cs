using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services;


    public class VacationServices
    {
        private readonly AppDbContext _context;
       


        public VacationServices(AppDbContext context)
        {
            _context = context;
           
        }
        public List<Vacation> GetVacationByDoctorNameAndVertetimi(string doctorName, bool vertetimi)
        {
            return _context.Vacations.Where(n => n.DoctorName == doctorName && n.Vertetimi == vertetimi).ToList();
        }

        public List<Vacation> GetVacationByaprovimiStatus(bool status)
        {
            return _context.Vacations.Where(n => n.Vertetimi == status).ToList();
        }

     

        public void AddVacation(VacationVM vacation)
        {
          
            var newVacation = new Vacation()
            {
                Arsyja = vacation.Arsyja,   
                DoctorName = vacation.DoctorName,
                Vertetimi = vacation.Vertetimi,
                Prej = vacation.Prej,
                Deri = vacation.Deri
            };

            _context.Vacations.Add(newVacation);
            _context.SaveChanges();
        }

        public List<Vacation> GetAllVacation()
        {
            return _context.Vacations.ToList();
        }
        

        public Vacation GetVacationById(int inventoryId)
        {
            return _context.Vacations.FirstOrDefault(n => n.VacationId == inventoryId);
        }
    
        public Vacation UpdateVacationById(int inventoryId, VacationVM inventory)
        {
            var _appoitment = _context.Vacations.FirstOrDefault(n => n.VacationId == inventoryId);

            if (_appoitment != null)
            {
                _appoitment.Arsyja = inventory.Arsyja;
                _appoitment.DoctorName = inventory.DoctorName;
                _appoitment.Vertetimi=inventory.Vertetimi;
                _appoitment.Prej=inventory.Prej;
                _appoitment.Deri=inventory.Deri;
                

                

                _context.SaveChanges();
            }
            return _appoitment;
        }

        public void DeleteVacationById(int inventoryId)
        {
            var _appointment = _context.Vacations.FirstOrDefault(n => n.VacationId==inventoryId);
            if (_appointment != null)
            {
                _context.Vacations.Remove(_appointment);
                _context.SaveChanges();
            }
        }
    }


