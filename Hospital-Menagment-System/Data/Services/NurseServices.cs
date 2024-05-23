using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services;

public class NurseServices
{
    private AppDbContext _context;
      
        public NurseServices(AppDbContext context)
        {

            _context = context;

        }
        public IEnumerable<string> GetNurseByName()
        {
            return _context.Nurses.Select(c => c.Name).ToList();
        }
       
    
        public void AddNurse(NurseVM nurse)
        {
            var _nurse = new Nurse()
            {
                Name = nurse.Name,
                Description = nurse.Description,
                Category=nurse.Category,
                

            };

            _context.Nurses.Add(_nurse);
            _context.SaveChanges();
        }

        public List<Nurse> GetAllNurse()
        {
            var allNurse = _context.Nurses.ToList();
            return allNurse;
        }
        public Nurse GetNurseById(int nuserId)
        {
            var allNurse = _context.Nurses.FirstOrDefault(n => n.NurseId == nuserId);
            return allNurse;
        }

        public Nurse UpdateNurseById(int nurseId, NurseVM nurse)
        {
            var _nurse = _context.Nurses.FirstOrDefault(n => n.NurseId == nurseId);

            if (_nurse != null)
            {
                _nurse.Name = nurse.Name;
                _nurse.Description = nurse.Description;
                _nurse.Category = nurse.Category;

                _context.SaveChanges();
            }
            return _nurse;
        }
        public void DeleteNurseById(int nurseId)
        {
            var _nurse = _context.Nurses.FirstOrDefault(n => n.NurseId == nurseId);
            if (_nurse != null)
            {
                _context.Nurses.Remove(_nurse);
                _context.SaveChanges();
            }
        }

}