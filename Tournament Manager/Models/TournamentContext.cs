using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tournament_Manager.Models
{
    public class TournamentContext : DbContext 
    {
        public DbSet<Tournament> Tournaments { get; set; }
        public TournamentContext(DbContextOptions<TournamentContext> options)
            : base(options)
        {
        }
    }
}
