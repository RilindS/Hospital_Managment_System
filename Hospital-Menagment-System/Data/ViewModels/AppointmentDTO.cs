namespace Hospital_Menagment_System.Data.ViewModels;

public class AppointmentDTO
{
    public int AppointmentId { get; set; }
    public string PatientName { get; set; }
    public string PatientEmail { get; set; }
    public DateTime Date { get; set; }
    public string Time { get; set; }
    public string Reason { get; set; }
    public int? PatientId { get; set; }
    public int? DoctorId { get; set; }
    public string DoctorName { get; set; }
}