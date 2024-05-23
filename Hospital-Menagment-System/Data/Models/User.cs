using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models;

public class User
{
    
    [Key]
    public int Id { get; set; }
    public string Username { get; set; }
    public string PasswordHash { get; set; }
    public string Role { get; set; } //admin ose user(pacient)
}