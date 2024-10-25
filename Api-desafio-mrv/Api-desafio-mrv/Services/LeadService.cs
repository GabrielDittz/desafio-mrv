using Api_desafio_mrv.Models;
using Api_desafio_mrv.Repositories;

namespace Api_desafio_mrv.Services
{
    public class LeadService : ILeadService
    {
        private readonly ILeadRepository _leadRepository;

        public LeadService(ILeadRepository leadRepository)
        {
            _leadRepository = leadRepository;
        }

        public async Task<IEnumerable<Lead>> GetLeadsByStatusAsync(LeadStatus status)
        {
            return await _leadRepository.GetLeadsByStatusAsync(status);
        }

        public async Task AcceptLeadAsync(int id)
        {
            var lead = await _leadRepository.GetLeadByIdAsync(id);
            if (lead == null || lead.Status != LeadStatus.New)
                throw new InvalidOperationException("Lead não encontrado ou já processado.");

            lead.Status = LeadStatus.Accepted;

            if (lead.Price > 500)
                lead.Price *= 0.9m;

            await _leadRepository.UpdateLeadAsync(lead);

            System.IO.File.WriteAllText("fake_email_notification.txt", $"Lead accepted with ID: {id}");
        }

        public async Task DeclineLeadAsync(int id)
        {
            var lead = await _leadRepository.GetLeadByIdAsync(id);
            if (lead == null || lead.Status != LeadStatus.New)
                throw new InvalidOperationException("Lead não encontrado ou já processado.");

            lead.Status = LeadStatus.Declined;

            await _leadRepository.UpdateLeadAsync(lead);
        }
    }
}
