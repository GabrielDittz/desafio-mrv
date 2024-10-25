using Api_desafio_mrv.Models;
using Microsoft.EntityFrameworkCore;

namespace Api_desafio_mrv.Data
{
    public class LeadManagementDbContext : DbContext
    {
        public LeadManagementDbContext(DbContextOptions<LeadManagementDbContext> options) : base(options) { }
        public DbSet<Lead> Leads { get; set; }
    }
}
