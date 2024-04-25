using Hospital_Management_System.Data.Models;
using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services;

public class DoctorServices
{
         private AppDbContext _context;
          private  CityServices _cityServices;
          private DepartmentServices _departmentServices;
          
        
        public DoctorServices(AppDbContext context, CityServices cityServices,DepartmentServices departmentServices)
        {
            _cityServices = cityServices;
            _context = context;
            _departmentServices = departmentServices;

        }
        
        public void AddDoctor(DoctorVM doctor)
        {
            var cityId = _cityServices.GetCityIdByName(doctor.Qytet);
            if (cityId == null)
            {
                throw new ArgumentException("City name not found.");
            }
            var departmentId = _departmentServices.GetDepartmentIdByName(doctor.DepartamentName);
            if (departmentId == null)
            {
                throw new ArgumentException("department name not found.");
            }
            

            var newDoctor = new Doctor()
            {
                DoctorName  = doctor.DoctorName,
                Surname = doctor.Surname,
                PhoneNumber = doctor.PhoneNumber,
                Specialization = doctor.Specialization,
                IsActive=doctor.IsActive,
                Qualification = doctor.Qualification,

                Qytet = doctor.Qytet,
                DepartamentName= doctor.DepartamentName,
                
                CityId = _cityServices.GetCityIdByName(doctor.Qytet),
                DepartamentId = _departmentServices.GetDepartmentIdByName(doctor.DepartamentName)
                
                //metoda GetCityIdByName e merr qytetin qe eshte zgedh ja merr Id
                //,Id na duhet tani me e shtu si foreigkey kur shtohet Pacienti ne DB
                
            };

            _context.Doctors.Add(newDoctor);
            _context.SaveChanges();
        }


        public List<Doctor> GetAllDoctor()
        {
            var allDoctor = _context.Doctors.ToList();
            return allDoctor;
        }
        public Doctor GetDoctorById(int doctorId)
        {
            var allDoctor = _context.Doctors.FirstOrDefault(n => n.DoctorId == doctorId);
            return allDoctor;
        }
        public Doctor UpdateDoctorById(int doctorId, DoctorVM doctor)
        {
            var _doctor = _context.Doctors.FirstOrDefault(n => n.DoctorId == doctorId);

            if (_doctor != null)
            {
                _doctor.DoctorName = doctor.DoctorName;
                _doctor. Surname = doctor.Surname;
                _doctor. PhoneNumber = doctor.PhoneNumber;
                _doctor.Specialization = doctor.Specialization;
                _doctor.IsActive = doctor.IsActive;
                _doctor. Qualification = doctor.Qualification;



                _doctor.Qytet = doctor.Qytet;
                _doctor.DepartamentName = doctor.DepartamentName;

                // nese esht ndrru qyteti me ja gjet prap ati qytetit te ri ID
                if (_doctor.Qytet != doctor.Qytet)
                {
                    var cityId = _cityServices.GetCityIdByName(_doctor.Qytet);
                    if (cityId == null)
                    {
                        throw new ArgumentException("City name not found.");
                    }
                    _doctor.CityId = cityId; 
                }
                if (_doctor.DepartamentName != doctor.DepartamentName)
                {
                    var deptid = _departmentServices.GetDepartmentIdByName(_doctor.DepartamentName);
                    if (deptid == null)
                    {
                        throw new ArgumentException("DepartamentName  not found.");
                    }
                    _doctor.DepartamentId = deptid; 
                }

                _context.SaveChanges();
            }
            return _doctor;
        }


        public void DeleteDoctorById(int deptId)
        {
            var _doctor = _context.Doctors.FirstOrDefault(n => n.DoctorId == deptId);
            if (_doctor != null)
            {
                _context.Doctors.Remove(_doctor);
                _context.SaveChanges();
            }
        }

    }
