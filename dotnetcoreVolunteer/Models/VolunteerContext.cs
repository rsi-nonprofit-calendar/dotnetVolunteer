using Microsoft.EntityFrameworkCore;
using System;

/// <summary>
/// Summary description for Class1
/// </summary>
public class VolunteerAppContext : DbContext
{
	public DbSet<User> Users { get; set; }
    public DbSet<Achievement> Achievements { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Event> Events { get; set; }
    public DbSet<Organization> Organizations { get; set; }
    public DbSet<Picture> Pictures { get; set; }




    public VolunteerAppContext(DbContextOptions options) : base(options)
    {
    }

}
