using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

public class Achievement
{
    [Key]
    public Guid AchievementId { get; set; }
    public string Name { get; set; }
    public List<User> Users { get; set; }
}
