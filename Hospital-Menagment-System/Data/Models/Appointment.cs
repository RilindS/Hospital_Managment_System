using System.ComponentModel.DataAnnotations.Schema;
using Hospital_Management_System.Data.Models;

namespace Hospital_Menagment_System.Data.Models;

public class Appointment
{
    public int AppointmentId { get; set; }
    
    public string PatientName { get; set; }
    public string PatientEmail { get; set; }
   
    public DateTime Date { get; set; }
    public string Time { get; set; }
    public string Reason { get; set; }
    
    public int? PatientId { get; set; }
    [ForeignKey("PatientId")]
    public Patient Patient { get; set; }
    
    public int? DoctorId { get; set; }
    public Doctor Doctor { get; set; }
    
    public string DoctorName { get; set; }

    
    
}