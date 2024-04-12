using Hospital_Management_System.Data.Models;
using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    public class OperatingRoom_Doctor
    {
        [Key]
        public int OperatingRoom_DoctorId { get; set; }
        public string Date { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }




        //Lidhja shum me shum mes doktorit dhe operation Room
        
        public int OperatingRoomId { get; set; }

        public OperatingRoom OperatingRoom { get; set; }

        public int DoctorId { get; set; }

        public Doctor Doctor { get; set; }
    }
}
