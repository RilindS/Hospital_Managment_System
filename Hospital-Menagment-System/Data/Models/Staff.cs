namespace Hospital_Menagment_System.Data.Models
{
    public class Staff
    {
        public int StaffId { get; set; }
        public Double Salary { get; set; }
        public string StartShift { get; set; }
        public string EndShift { get; set; }

        public string AvilableDays { get; set; }


        //Lidhja me Person
       // public int UserId { get; set; }

      //  public Person Person { get; set; }

        //Lidhja me Doctor...

        //Lidhja me Dean
        public List<Dean> Dean { get; set; }

        //Lidhja me Nurse
        public List<Nurse> Nurse { get; set; }





    }
}
