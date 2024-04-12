using Hospital_Management_System.Data.Models;
using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    public class OperatingRoom_Patient
    {
        [Key]
        public int OperatingRoom_PatientId { get; set; }

        public string AdmissionDate { get; set;}

        public string ReleaseDate { get; set;}

        //kaloj 2 foreignkey nga lidhja shum me shum

        public int PatientId { get; set; }

        public Patient Patient { get; set; }

        public int OperatingRoomId { get; set; }

        public OperatingRoom OperatingRoom { get; set; }



    }
}
