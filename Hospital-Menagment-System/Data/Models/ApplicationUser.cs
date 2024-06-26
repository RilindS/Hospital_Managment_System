using Microsoft.AspNetCore.Identity;
using System;

namespace Hospital_Menagment_System.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; } 

        public string RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
    }
}