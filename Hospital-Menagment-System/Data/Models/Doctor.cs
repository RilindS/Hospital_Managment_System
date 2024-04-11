using Microsoft.EntityFrameworkCore.Migrations;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hospital_Menagment_System.Data.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }

        public string Qualification { get; set; }
        

        //lidhja me entitetin Pacienti

        public List <Doctor_Patient> Doctor_Patient { get; set; }

        //lidhja me Departamentin   nje(Doktori)--shum(Departamenti)

        public int DepartamentId { get; set; }

        public Departament Departament { get; set; }

        //Lidhja me staff ....
        
    }
}
