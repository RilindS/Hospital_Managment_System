using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    public class Medication
    {
        [Key]
        public int MedicationID { get; set; }
        public string Name { get; set; }
        
        public string Category { get; set;}

        //lidhja mes Medication dhe treats shum me shum
        public List<Treats_Medication> Treats_Medication { get; set; }

    }
}
