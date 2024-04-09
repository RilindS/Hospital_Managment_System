// File: AppDbContext.cs
using Microsoft.EntityFrameworkCore;
using Hospital_Menagment_System.Data.Models;

namespace Hospital_Menagment_System.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Person> Persons { get; set; }
    }
}
