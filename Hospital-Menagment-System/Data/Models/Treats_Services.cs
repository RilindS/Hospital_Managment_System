using Hospital_Management_System.Data.Models;
using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    public class Treats_Services
    {
        [Key]
        public int Treats_ServicesId { get; set; }
       


        public int TreatsId { get; set; }

        public Doctor_Treats_Patient Doctor_Treats_Patient { get; set; }

        public int ServiceID { get; set; }

        public Services Services { get; set; }

        

        public int PatientID { get; set; }

        public Patient Patient { get; set; }

    }
}
