using Hospital_Menagment_System.Data.Models;
using System.Collections.Generic;
using System.Linq;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services
{
    public class CityServices
    {
        private AppDbContext _context;
      
        public CityServices(AppDbContext context)
        {
            _context = context;
        }
        public void DeleteCityById(int patientId)
        {
            var _patient = _context.Cities.FirstOrDefault(n => n.CityId
                                                                == patientId);
            if (_patient != null)
            {
                _context.Cities.Remove(_patient);
                _context.SaveChanges();
            }
        }

        public List<City> GetAllCity()
        {
            return _context.Cities.ToList();
        }


        /*
         *
         *   public IEnumerable<string> GetDepartment()
        {
            return _context.Departaments.Select(c => c.Name).ToList();
        }
         */
       

        public IEnumerable<string> GetCityName()
        {
            return _context.Cities.Select(c => c.CityName).ToList();
        }
        public IEnumerable<string> GetCities()
        {
            return _context.Cities.Select(c => c.CityName).ToList();
        }

        public void AddCity(CityVM city)
        {
            var _city = new City()
            {
                CityName = city.CityName
            };
            _context.Cities.Add(_city);
            _context.SaveChanges();
        }

       

        public int GetCityIdByName(string cityName)
        {
            var city = _context.Cities.FirstOrDefault(c => c.CityName == cityName);
            if (city != null)
            {
                return city.CityId;
            }
            else
            {
                throw new ArgumentException("City not found", nameof(cityName));
            }
        }
    }
}