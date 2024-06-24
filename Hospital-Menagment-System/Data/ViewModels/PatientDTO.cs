namespace Hospital_Menagment_System.Data.Models;

public class PatientDTO
{
    public int PatientId { get; set; }
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Email { get; set; }
    public string Rooma { get; set; }

    public string PhoneNumber { get; set; }
    public string DateOfBirth { get; set; }
    public string Street { get; set; }
    public string Qyteti { get; set; }
    public DateTime DateRegistered { get; set; }

}