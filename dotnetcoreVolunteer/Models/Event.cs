using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

/// <summary>
/// Summary description for Class1
/// </summary>
public class Event
{
    [Key]
    public Guid EventId { get; set; }
    public string EventName { get; set; }
    public DateTime EventDate { get; set; }
    public DateTime EventTime { get; set; }
    public string EventLocation { get; set; }
    public string EventDescription { get; set; }
    [ForeignKey("Category")]
    public Guid CategoryID { get; set; }
}
