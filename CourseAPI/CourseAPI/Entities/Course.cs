namespace CourseAPI.Entities
{
    public enum LearningMode
    {
        Frontal = 1,
        Zoom = 2
    }
    public class Course
    {
        public int Id { get; set; }
        public string courseName { get; set; }
        public Category Category { get; set; }
        public int NumLessons { get; set; }
        public DateTime StartDate { get; set; }
        public List<string>? syllabus { get; set; }
        public LearningMode LearningMode { get; set; }
        public int LecturerId { get; set; }
        public string Picture { get; set; }
       }
}
