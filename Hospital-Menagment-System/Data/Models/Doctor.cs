namespace Hospital_Menagment_System.Data.Models
{
    public class Doctor
    {
        public int DoctorId { get; set; }

        public string Qualification { get; set; }
        public string Departament { get; set; }

        //lidhja me entitetin Pacienti

        public List <Doctor_Patient> Doctor_Patient { get; set; }
    }
}
