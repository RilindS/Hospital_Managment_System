using System.ComponentModel.DataAnnotations;

namespace Hospital_Menagment_System.Data.Models
{
    public class Departament
    {

        [Key]
        public int DepartamentId { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public int DepartamentSize { get; set; }
        public Boolean DepartamentStatus { get; set; }


        //lidhja me Departamentin   nje(Doktori)--shum(Departamenti)

        public List<Doctor> Doctor { get; set; }

        //lidhja me Room  Room(shum)-Department(any)
        public List<Room> Room { get; set; }
    }
}
