using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    public class Person
    {
        [Key]
        public int UserId { get; set; }
       
        public string Name { get; set; }
        
        public string Surname { get; set; }
            
        public string Email { get; set; }
        public string Role   { get; set; }
        public string PhoneNumber { get; set; }
        public string  DateOfBirth{ get; set; }
        public string City { get; set; }
        public string Street { get; set; }

        public DateTime? DateRegistred { get; set; }


        //Navigation Properties 
        public List<Patient> Patients { get; set;}


    }
}
