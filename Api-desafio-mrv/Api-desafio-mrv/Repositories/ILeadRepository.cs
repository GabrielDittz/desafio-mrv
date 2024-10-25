namespace Api_desafio_mrv.Repositories
{
    using Api_desafio_mrv.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ILeadRepository
    {
        Task<IEnumerable<Lead>> GetLeadsByStatusAsync(LeadStatus status);
        Task<Lead> GetLeadByIdAsync(int id);
        Task UpdateLeadAsync(Lead lead);
    }
}
