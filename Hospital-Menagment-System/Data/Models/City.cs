using System.ComponentModel.DataAnnotations;
using Hospital_Management_System.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Hospital_Menagment_System.Data.Models;

public class City
{
   [Key]
    public int CityId { get; set; }
    
    public string CityName { get; set; }
    
    public List<Patient> Patients { get; set; }

}