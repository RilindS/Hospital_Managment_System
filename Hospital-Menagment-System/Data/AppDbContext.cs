// File: AppDbContext.cs
using Microsoft.EntityFrameworkCore;
using Hospital_Menagment_System.Data.Models;
using Hospital_Management_System.Data.Models;

namespace Hospital_Menagment_System.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Doctor_Patient>()
                .HasOne(x => x.Patient)
                .WithMany(xa => xa.Doctor_Patient)
                .HasForeignKey(xb => xb.PatientId);

            modelBuilder.Entity<Doctor_Patient>()
             .HasOne(x => x.Doctor)
             .WithMany(xa => xa.Doctor_Patient)
             .HasForeignKey(xb => xb.DoctorId);

            //Lidhja shum me shum mes OPeration Romm dhe Doktorit

            modelBuilder.Entity<OperatingRoom_Doctor>()
                .HasOne(a => a.Doctor)
                .WithMany(ab => ab.OperatingRoom_Doctor)
                .HasForeignKey(ab => ab.DoctorId)
                .OnDelete(DeleteBehavior.Restrict); 

            modelBuilder.Entity<OperatingRoom_Doctor>()
               .HasOne(a => a.OperatingRoom)
               .WithMany(ab => ab.OperatingRoom_Doctor)
               .HasForeignKey(ab => ab.OperatingRoomId)
               .OnDelete(DeleteBehavior.Restrict);

            //lidhja shum me shum mes OperationRoom dhe Pacientit

            modelBuilder.Entity<OperatingRoom_Patient>()
                .HasOne(a => a.Patient)
                .WithMany(ab => ab.OperatingRoom_Patient)
                .HasForeignKey(ab => ab.PatientId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<OperatingRoom_Patient>()
               .HasOne(a => a.OperatingRoom)
               .WithMany(ab => ab.OperatingRoom_Patient)
               .HasForeignKey(ab => ab.OperatingRoomId)
               .OnDelete(DeleteBehavior.Restrict);

            //lidhja shum me shum mes Doktorit dhe PAcientit me trets

            modelBuilder.Entity<Doctor_Treats_Patient>()
                .HasOne(x => x.Patient)
                .WithMany(xa => xa.Doctor_Treats_Patient)
                .HasForeignKey(xb => xb.PatientId);

            modelBuilder.Entity<Doctor_Treats_Patient>()
             .HasOne(x => x.Doctor)
             .WithMany(xa => xa.Doctor_Treats_Patient)
             .HasForeignKey(xb => xb.DoctorId);

            //Treats_Medication
            //     //lidhja mes Medication dhe treats shum me shum
            modelBuilder.Entity<Treats_Medication>()
                .HasOne(x => x.Doctor_Treats_Patient)
                .WithMany(xa => xa.Treats_Medication)
                .HasForeignKey(xb => xb.TreatsId);

            modelBuilder.Entity<Treats_Medication>()
             .HasOne(x => x.Medication)
             .WithMany(xa => xa.Treats_Medication)
             .HasForeignKey(xb => xb.MedicationID);

            //Treats_Services
            //        //lidhja mes Medication dhe treats shum me shum

            modelBuilder.Entity<Treats_Services>()
            .HasOne(x => x.Services)
            .WithMany(xa => xa.Treats_Services)
            .HasForeignKey(xb => xb.ServiceID)
                           .OnDelete(DeleteBehavior.Restrict);


            modelBuilder.Entity<Treats_Services>()
             .HasOne(x => x.Doctor_Treats_Patient)
             .WithMany(xa => xa.Treats_Services)
             .HasForeignKey(xb => xb.TreatsId)
                            .OnDelete(DeleteBehavior.Restrict);


            modelBuilder.Entity<Treats_Services>()
             .HasOne(x => x.Patient)
             .WithMany(xa => xa.Treats_Services)
             .HasForeignKey(xb => xb.PatientID)
              .OnDelete(DeleteBehavior.Restrict);



        }

        public DbSet<Doctor> Doctors { get; set; }

        public DbSet<Patient> Patients { get; set; }

        //public DbSet<Room>Rooms { get; set; }

       

        public DbSet<Doctor_Patient> Doctors_Patients { get; set; }

        public DbSet<Departament> Departaments { get; set; }

        // public DbSet<Patient> Patients { get; set; }



    }
}
