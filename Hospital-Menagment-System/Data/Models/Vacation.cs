namespace Hospital_Menagment_System.Data.Models;

public class Vacation
{
    public int VacationId { get; set; }

    public string DoctorName { get; set; }
    public string Arsyja { get; set; }

    public Boolean Vertetimi { get; set; }

    public DateTime Prej { get; set; }
    
    public DateTime Deri { get; set; }
    
    
}