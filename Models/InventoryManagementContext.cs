using Microsoft.EntityFrameworkCore;

namespace inventorymanagementbackend.Models
{
    public class InventoryManagementContext : DbContext{
         public InventoryManagementContext(DbContextOptions<InventoryManagementContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Inventory>().HasData(
        new Inventory
        {
            Id = 1,
            Name = "Mobile",
            Description = "Iphone 6 Mobile Description",
            Price = 60000,
            Vendor = "Apple"
        }
    );
}

        public DbSet<Inventory> Inventories { get; set; }
    }
}