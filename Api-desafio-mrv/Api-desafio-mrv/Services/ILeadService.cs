using Api_desafio_mrv.Models;

namespace Api_desafio_mrv.Services
{
    public interface ILeadService
    {
        Task<IEnumerable<Lead>> GetLeadsByStatusAsync(LeadStatus status);
        Task AcceptLeadAsync(int id);
        Task DeclineLeadAsync(int id);
    }
}
