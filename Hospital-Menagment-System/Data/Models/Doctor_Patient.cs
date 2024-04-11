using Hospital_Management_System.Data.Models;
using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    //klasa qe krijohet nga lidhja shum me shum mes pacientit dhe doktorit
    public class Doctor_Patient
    {
        [Key]
        public int BookId { get; set; }

        public int PatientId { get; set; }

        public Patient Patient { get; set; }

        public int DoctorId { get; set;}

        public Doctor Doctor { get; set; }



    }
}
