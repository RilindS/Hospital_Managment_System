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
        }
        public DbSet<Person> Persons { get; set; }

        public DbSet<Doctor> Doctors { get; set; }

        public DbSet<Patient> Patients { get; set; }




        public DbSet<Doctor_Patient> Doctors_Patients { get; set; }

       // public DbSet<Patient> Patients { get; set; }



    }
}
