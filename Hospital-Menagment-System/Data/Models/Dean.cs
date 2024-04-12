using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    public class Dean 
    {
        [Key]
        public int DeanId { get; set; }
        public int StaffId { get; set; }

        public Staff Staff { get; set; }

    }
}
