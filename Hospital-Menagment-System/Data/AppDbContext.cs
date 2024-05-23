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
            
              // Configure the foreign key property
              /*
           
            modelBuilder.Entity<Patient>()
                .HasOne(p => p.City) // Patient has one City
                .WithMany(c => c.Patients) // City can have multiple Patients
                .HasForeignKey(p => p.CityId) // Foreign key property in Patient
                .IsRequired(false) // Make the relationship optional if City is nullable
                .OnDelete(DeleteBehavior.Restrict); // Optional: Configure delete behavior
            */
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Doctor> Doctors { get; set; }

        public DbSet<Patient> Patients { get; set; }

        public DbSet<Room>Rooms { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Nurse> Nurses { get; set; }
        public DbSet<Departament> Departaments { get; set; }

        // public DbSet<Patient> Patients { get; set; }



    }
}
