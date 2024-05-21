using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services;

public class DepartmentServices
{
      private AppDbContext _context;
      
        public DepartmentServices(AppDbContext context)
        {

            _context = context;

        }
        public IEnumerable<string> GetDepartment()
        {
            return _context.Departaments.Select(c => c.Name).ToList();
        }
        public int GetDepartmentIdByName(string deptName)
        {
            var department = _context.Departaments.FirstOrDefault(c => c.Name == deptName);
            if (department != null)
            {
                return department.DepartamentId;
            }
            else
            {
                throw new ArgumentException("City not found", nameof(deptName));
            }
        }
    
        public void AddDepartment(DepartmentVM department)
        {
            var _departament = new Departament()
            {
                Name = department.Name,
                Description = department.Description,
                DepartamentSize=department.DepartamentSize,
                DepartamentStatus = department.DepartamentStatus,

            };

            _context.Departaments.Add(_departament);
            _context.SaveChanges();
        }

        public List<Departament> GetAllDepartment()
        {
            var allDepartment = _context.Departaments.ToList();
            return allDepartment;
        }
        public Departament GetDepartmentById(int departmentId)
        {
            var allDepartment = _context.Departaments.FirstOrDefault(n => n.DepartamentId == departmentId);
            return allDepartment;
        }

        public Departament UpdateDepartmentById(int departmentId, DepartmentVM department)
        {
            var _departament = _context.Departaments.FirstOrDefault(n => n.DepartamentId == departmentId);

            if (_departament != null)
            {
                _departament.Name = department.Name;
                _departament.Description = department.Description;
                _departament.DepartamentSize = department.DepartamentSize;
                _departament.DepartamentStatus = department.DepartamentStatus;

                _context.SaveChanges();
            }
            return _departament;
        }
        public void DeleteDepartmentById(int departmentId)
        {
            var _departament = _context.Departaments.FirstOrDefault(n => n.DepartamentId == departmentId);
            if (_departament != null)
            {
                _context.Departaments.Remove(_departament);
                _context.SaveChanges();
            }
        }

    }
    
