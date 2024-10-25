using Api_desafio_mrv.Data;
using Api_desafio_mrv.Models;
using Api_desafio_mrv.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api_desafio_mrv.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeadsController : ControllerBase
    {
        private readonly ILeadService _leadService;

        public LeadsController(ILeadService leadService)
        {
            _leadService = leadService;
        }

        [HttpGet("invited")]
        public async Task<ActionResult<IEnumerable<Lead>>> GetNewLeads()
        {
            var leads = await _leadService.GetLeadsByStatusAsync(LeadStatus.New);
            return Ok(leads);
        }

        [HttpGet("accepted")]
        public async Task<ActionResult<IEnumerable<Lead>>> GetAcceptedLeads()
        {
            var leads = await _leadService.GetLeadsByStatusAsync(LeadStatus.Accepted);
            return Ok(leads);
        }

        [HttpPost("{id}/accept")]
        public async Task<IActionResult> AcceptLead(int id)
        {
            try
            {
                await _leadService.AcceptLeadAsync(id);
                return NoContent();
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("{id}/decline")]
        public async Task<IActionResult> DeclineLead(int id)
        {
            try
            {
                await _leadService.DeclineLeadAsync(id);
                return NoContent();
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
