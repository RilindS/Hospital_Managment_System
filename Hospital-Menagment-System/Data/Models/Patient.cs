    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using Hospital_Management_System.Data.Models;
    using Hospital_Menagment_System.Data.Models;
    using Microsoft.EntityFrameworkCore;

    namespace Hospital_Management_System.Data.Models
    {
        public class Patient
        {
            [Key]
            public int PatientId { get; set; }
            
            
         
            
            
            public int CityId { get; set; } 
            public City City { get; set; } 
            
            
            
            
            
            
            

       

            // Other patient details
            public string Name { get; set; }
            public string Surname { get; set; }
            public string Email { get; set; }
            public string PhoneNumber { get; set; }
            public string DateOfBirth { get; set; }
            public string Street { get; set; }
            public string Qyteti { get; set; }
            public DateTime DateRegistered { get; set; }
        }
    }