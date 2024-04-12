using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    public class Treats_Medication
    {
        [Key]
        public int Treats_MedicationId { get; set; }
        

        public int MedicationID { get; set; }

        public Medication Medication { get; set; }

        public int TreatsId { get; set; }

        public Doctor_Treats_Patient Doctor_Treats_Patient { get; set; }


    }
}
