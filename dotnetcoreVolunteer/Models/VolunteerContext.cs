using Microsoft.EntityFrameworkCore;
using System;

/// <summary>
/// Summary description for Class1
/// </summary>
public class VolunteerContext : DbContext
{
	public DbSet<User> Users { get; set; }

    public VolunteerContext(DbContextOptions options) : base(options)
    {
    }

}
