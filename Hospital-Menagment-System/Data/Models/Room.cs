namespace Hospital_Menagment_System.Data.Models
{
    public class Room
    {
        public int RoomId { get; set; }
        public string RoomName { get; set; }
        public string Description { get; set; }

        //Lidhja me departmamentin 
        public int DepartamentId { get; set; }

        public Departament Departament { get; set; }

        //Lidhja me OperatingRooms
        public List<OperatingRoom> OperatingRoom { get; set; }

        //Lidhja me AdmissionRoom

        public List<AdmissionRoom> AdmissionRoom { get; set; }
    }
}
