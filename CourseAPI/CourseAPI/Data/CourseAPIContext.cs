using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CourseAPI.Entities;

namespace CourseAPI.Data
{
    public class CourseAPIContext : DbContext
    {
        public CourseAPIContext (DbContextOptions<CourseAPIContext> options)
            : base(options)
        {
        }

        public DbSet<Lecturer> Lecturer { get; set; } = default!;
    }
}
