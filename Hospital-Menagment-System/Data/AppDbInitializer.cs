using Hospital_Menagment_System.Data.Models;
using Microsoft.AspNetCore.Builder;

/*
namespace Hospital_Menagment_System.Data
{
    public class AppDbInitializer
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<AppDbContext>();

                if (!context.Persons.Any())
                {
                    context.Persons.AddRange(new Person()
                    {
                        Name = "Rilind",
                        Surname="Simnica",
                        Email="rilindsimnica09@gmail.com",
                        Role="admin",
                        PhoneNumber="1231231",
                        DateOfBirth="09/07/2004",
                        City="Prishtina",
                        Street="arberia",
                        DateRegistered=DateTime.Now,


                    }, new Person()
                    {
                        Name = "Rron",
                        Surname = "Simnica",
                        Email = "rronsimnica09@gmail.com",
                        Role = "user",
                        PhoneNumber = "1231231",
                        DateOfBirth = "09/07/2008",
                        City = "Prishtina",
                        Street = "arberia",
                        DateRegistered = DateTime.Now
                    });
                    context.SaveChanges();
                }
            }
        }
    }
}*/
