namespace Hospital_Menagment_System.Data.Models
{
    public class OperatingRoom
    {
        public int OperatingRoomId { get; set; }

        public string OperatingRoomName { get; set; }

        public string OperatingRoomDescription { get; set; }


        //Lidhja me Room
        public int RoomId { get; set; }

        public Room Room { get; set; }
    }
}
