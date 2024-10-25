namespace Api_desafio_mrv.Models
{
    public class Lead
    {
        public int Id { get; set; }
        public string? ContactFirstName { get; set; }
        public string? ContactLastName { get; set; }  
        public string? ContactPhoneNumber { get; set; } 
        public string? ContactEmail { get; set; }
        public DateTime DateCreated { get; set; }
        public string? Suburb { get; set; }
        public string? Category { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public LeadStatus Status { get; set; }

        public string GetContactFullName()
        {
            return $"{ContactFirstName} {ContactLastName}";
        }
    }

    public enum LeadStatus
    {
        New,
        Accepted,
        Declined
    }
}
