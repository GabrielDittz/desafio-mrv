using Api_desafio_mrv.Data;
using Api_desafio_mrv.Models;
using Microsoft.EntityFrameworkCore;

namespace Api_desafio_mrv.Repositories
{
    public class LeadRepository : ILeadRepository
    {
        private readonly LeadManagementDbContext _context;

        public LeadRepository(LeadManagementDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Lead>> GetLeadsByStatusAsync(LeadStatus status)
        {
            return await _context.Leads.Where(l => l.Status == status).ToListAsync();
        }

        public async Task<Lead> GetLeadByIdAsync(int id)
        {
            return await _context.Leads.FindAsync(id);
        }

        public async Task UpdateLeadAsync(Lead lead)
        {
            _context.Leads.Update(lead);
            await _context.SaveChangesAsync();
        }
    }
}
