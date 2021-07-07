using Microsoft.AspNetCore.Identity;

namespace ProAgil.Domain.Identity
{
    public class UserRole : IdentityUserRole<int>
    {
        public User Usuario { get; set; }
        public Role Role { get; set; }
    }
}