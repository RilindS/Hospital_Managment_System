namespace Hospital_Menagment_System.Data.Models;

public class Appointment
{
    public int AppointmentId { get; set; }
    
    public string PatientName { get; set; }
    public string PatientEmail { get; set; }
   
    public string Date { get; set; }
    public string Time { get; set; }
    public string Reason { get; set; }
    
    
}