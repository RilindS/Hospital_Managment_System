using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    public class Services
    {
        [Key]
        public int ServiceID { get; set; }

        public string Name { get; set;}

        public int Price { get; set;}

        //Lidhja mes services trats shum me shum

        public List<Treats_Services> Treats_Services { get; set; }


    }
}
