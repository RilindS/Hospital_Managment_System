using Hospital_Menagment_System.Data.Models;
using Hospital_Menagment_System.Data.ViewModels;

namespace Hospital_Menagment_System.Data.Services;


    public class InventoryServices
    {
        private readonly AppDbContext _context;
       


        public InventoryServices(AppDbContext context)
        {
            _context = context;
           
        }
     

        public void AddInventory(InventoryVM inventory)
        {
          
            var newInventory = new Inventory()
            {
                Artikulli = inventory.Artikulli,
                Pershkrimi = inventory.Pershkrimi,
                Sasia = inventory.Sasia,
                Pagesa = false
            };

            _context.Inventorys.Add(newInventory);
            _context.SaveChanges();
        }

        public List<Inventory> GetAllInventory()
        {
            return _context.Inventorys.ToList();
        }

        public Inventory GetInventoryById(int inventoryId)
        {
            return _context.Inventorys.FirstOrDefault(n => n.InventoryId == inventoryId);
        }

        public Inventory UpdateInventoryById(int inventoryId, InventoryUpdateVM inventory)
        {
            var _appoitment = _context.Inventorys.FirstOrDefault(n => n.InventoryId == inventoryId);

            if (_appoitment != null)
            {
                _appoitment.Artikulli = inventory.Artikulli;
                _appoitment.Pershkrimi=inventory.Pershkrimi;
                _appoitment.Sasia=inventory.Sasia;
                _appoitment.Pagesa=inventory.Pagesa;

                

                _context.SaveChanges();
            }
            return _appoitment;
        }

        public void DeleteInventoryById(int inventoryId)
        {
            var _appointment = _context.Inventorys.FirstOrDefault(n => n.InventoryId==inventoryId);
            if (_appointment != null)
            {
                _context.Inventorys.Remove(_appointment);
                _context.SaveChanges();
            }
        }
    }


