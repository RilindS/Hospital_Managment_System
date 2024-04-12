namespace Hospital_Menagment_System.Data.Models
{
    public class Nurse
    {
        public int NurseId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }

        //lidhja me staff
        public int StaffId { get; set; }

        public Staff Staff { get; set; }

        //Lidhja me AdmissionRoom

        public int AdmissionRoomId { get; set; }

        public AdmissionRoom AdmissionRoom { get; set; }





    }
}
