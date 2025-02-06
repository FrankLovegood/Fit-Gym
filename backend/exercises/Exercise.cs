// Models/Exercise.cs
public class Exercise
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public List<ExerciseMuscleIntensity> MuscleIntensities { get; set; }
}

// Models/Muscle.cs
public class Muscle
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Slug { get; set; }
}