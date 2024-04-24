using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services;

public class CityServices
{
    private AppDbContext _context;
      
    public CityServices(AppDbContext context)
    {
        _context = context;
    }
    public IEnumerable<string> GetCities()
    {
        return _context.Qytetet.Select(c => c.CityName).ToList();
    }
    public void AddCity(CityVM city)
    {
        var _city = new Qyteti()
        {
            CityName = city.CityName
        };
        _context.Qytetet.Add(_city);
        _context.SaveChanges();
    }
        
}