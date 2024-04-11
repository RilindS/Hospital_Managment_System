using Hospital_Menagment_System.Data.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hospital_Management_System.Data.Models
{
    public class Patient
    {
        [Key]
        public int PatientId { get; set; }

        // Foreign key for Person table
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public Person Person { get; set; }

        // Relationship between Doctor and Patient
        public List<Doctor_Patient> Doctor_Patient { get; set; }

        // Other patient details
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string DateOfBirth { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public DateTime DateRegistered { get; set; }
    }
}
