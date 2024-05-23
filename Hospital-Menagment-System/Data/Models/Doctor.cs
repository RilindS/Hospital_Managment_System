using Microsoft.EntityFrameworkCore.Migrations;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hospital_Menagment_System.Data.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }
        

        public string DoctorName { get; set; }

        public string DepartamentName { get; set; }

        public string Surname { get; set; }
        
        public string PhoneNumber { get; set; }

        public string Specialization  { get; set; }

        public string Qytet { get; set; }

        public Boolean IsActive { get; set; }
        
        public string Qualification { get; set; }

        

        public int CityId { get; set; }

        public City City;
        
        

        public int DepartamentId { get; set; }

        public Departament Departament { get; set; }

        
        
        
        
        
        
        
    }
}
