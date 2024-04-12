using Hospital_Management_System.Data.Models;
using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    public class Doctor_Treats_Patient
    {
        [Key]
        public int TreatsId { get; set; }
        public string Date { get; set;}
        public string Diagnosis { get; set;}

        //lidhja mes Doktorit dhe Pacientit
        public int PatientId { get; set; }

        public Patient Patient { get; set; }

        public int DoctorId { get; set; }

        public Doctor Doctor { get; set; }

        //lidhja mes Medication dhe treats shum me shum
        public List<Treats_Medication> Treats_Medication { get; set; }

        //Lidhja mes services trats shum me shum

        public List<Treats_Services> Treats_Services { get; set; }
    }
}
