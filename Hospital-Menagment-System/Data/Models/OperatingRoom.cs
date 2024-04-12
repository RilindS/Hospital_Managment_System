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

        //Lidhja shum me shum me OperatingRoom_Doctor

        public List<OperatingRoom_Doctor> OperatingRoom_Doctor { get; set; }

        //lidhja shum me shum mes OperatingRoom dhe Patient  OperatingRoom_Patient

        public List<OperatingRoom_Patient> OperatingRoom_Patient { get; set; }
    }
}
