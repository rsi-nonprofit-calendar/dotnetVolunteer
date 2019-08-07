﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

public class Achievement
{
    [Key]
    public Guid AchievementId { get; set; }
    [Column(TypeName = "varchar(25)")]
    public string Name { get; set; }
    [ForeignKey("User")]
    public Guid UserId { get; set; }
}