using Hospital_Management_System.Data.Models;
using System.ComponentModel.DataAnnotations;

public class Person
{
    [Key]
    public int UserId { get; set; }

    // Person details
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Email { get; set; }
    public string Role { get; set; }
    public string PhoneNumber { get; set; }
    public string DateOfBirth { get; set; }
    public string City { get; set; }
    public string Street { get; set; }
    public DateTime? DateRegistered { get; set; }

    // Navigation property to relate to Patient class
    public List<Patient> Patients { get; set; }
}
