namespace Hospital_Menagment_System.Data.Models
{
    public class Patient
    {
          public int PatientId { get; set; }

        //navigation properties
        // tek tabela patient eshte shtuar kolon UserId si foreignkey i tabeles Person
        public int UserId { get; set; }

        public Person Person { get; set; }
    }
}
