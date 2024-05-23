using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    public class Medication
    {
        [Key]
        public int MedicationID { get; set; }
        public string Name { get; set; }
        
        public string Category { get; set;}


    }
}
