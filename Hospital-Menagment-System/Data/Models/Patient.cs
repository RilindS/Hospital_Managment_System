﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Hospital_Management_System.Data.Models;
using Hospital_Menagment_System.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Hospital_Management_System.Data.Models
{
    public class Patient
    {
        [Key]
        public int PatientId { get; set; }
        
        
        public int QytetiId { get; set; } // Kolona që do të lidhet me CityId në tabelën e qytetit

        public Qyteti Qyteti { get; set; }

        // Relationship between Doctor and Patient
        public List<Doctor_Patient> Doctor_Patient { get; set; }

        //lidhja shum me shum mes OperatingRoom dhe Patient  OperatingRoom_Patient
        public List<OperatingRoom_Patient> OperatingRoom_Patient { get; set; }

        //lidhja shum me shum mes Doktorit dhe Pacientit
        public List<Doctor_Treats_Patient> Doctor_Treats_Patient { get; set; }

        //Lidhja mes services trats shum me shum
        public List<Treats_Services> Treats_Services { get; set; }

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