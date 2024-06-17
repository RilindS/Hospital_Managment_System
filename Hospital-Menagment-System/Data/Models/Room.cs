namespace Hospital_Menagment_System.Data.Models
{
    public class Room
    {
        public int RoomId { get; set; }

        public String DepartamentName { get; set; }
        public string RoomName { get; set; }
        public string Description { get; set; }

        public int Floor { get; set; }

        public int NrOfBeds { get; set; }
        //Lidhja me departmamentin 
        
        public int DepartamentId { get; set; }

        
        public Departament Departament { get; set; }

        //Lidhja me OperatingRooms

        //Lidhja me AdmissionRoom

        
    }
}
