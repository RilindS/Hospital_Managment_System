namespace Hospital_Menagment_System.Data.Models
{
    public class AdmissionRoom
    {
        public int AdmissionRoomId { get; set; }

        public int NrOfBeds { get; set; }

        //lidhja me Room
        public int RoomId { get; set; }

        public Room Room { get; set; }


        //Lidhja me Nurse
        public List<Nurse> Nurse { get; set; }
    }
}
