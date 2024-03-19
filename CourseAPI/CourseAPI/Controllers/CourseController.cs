using CourseAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CourseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {

      private static List<Course> _courses = new List<Course>() {

            new Course
            {
                Id = 1,
                courseName = "AI from GPT",
                Category = new Category{CategoryId=1,CategoryName="AI",RouteToIcon="https://www.kernelios.com/wp-content/uploads/2023/07/%D7%A7%D7%95%D7%A8%D7%A1-%D7%94%D7%99%D7%99%D7%98%D7%A7-%D7%90%D7%95%D7%A0%D7%9C%D7%99%D7%99%D7%9F-VS-%D7%9C%D7%99%D7%9E%D7%95%D7%93-%D7%A4%D7%A8%D7%95%D7%A0%D7%98%D7%9C%D7%99.jpg"},
                NumLessons = 10,
                StartDate =  new DateTime(2024,2,1),
                syllabus = new List<string> { "Lesson 1", "Lesson 2" },
                LearningMode = LearningMode.Zoom,
                LecturerId = 1,
                Picture = "https://www.johnbryce.co.il/wp-content/uploads/2023/08/%D7%A7%D7%95%D7%A8%D7%A1-AI.jpg"
            },
             new Course
            {
                Id = 1,
                courseName = "Systems Analysis",
                Category = new Category{CategoryId=2,CategoryName="AI",RouteToIcon="https://www.kernelios.com/wp-content/uploads/2023/07/%D7%A7%D7%95%D7%A8%D7%A1-%D7%94%D7%99%D7%99%D7%98%D7%A7-%D7%90%D7%95%D7%A0%D7%9C%D7%99%D7%99%D7%9F-VS-%D7%9C%D7%99%D7%9E%D7%95%D7%93-%D7%A4%D7%A8%D7%95%D7%A0%D7%98%D7%9C%D7%99.jpg"}
         ,
                NumLessons = 10,
                StartDate =  new DateTime(2024,2,1),
                syllabus = new List<string> { "Lesson 1", "Lesson 2" },
                LearningMode = LearningMode.Zoom,
                LecturerId = 1,
                Picture = "https://www.ecomschool.co.il/wp-content/uploads/2022/05/%D7%A7%D7%95%D7%A8%D7%A1-%D7%AA%D7%9B%D7%A0%D7%95%D7%AA-%D7%9C%D7%9E%D7%AA%D7%97%D7%99%D7%9C%D7%99%D7%9D-.jpeg"
            },
            //https://www.code4kids.d-world.co.il/wp-content/uploads/2023/07/81b0f1cc-a33c-44fa-9459-6ad90aa8b81a-1-1.jpg
            new Course
            {
                Id = 2,
                courseName = "Full Stack developer",
                Category = new Category{CategoryId=3,CategoryName="Full Stack",
                    RouteToIcon="https://www.kernelios.com/wp-content/uploads/2023/07/%D7%A7%D7%95%D7%A8%D7%A1-%D7%94%D7%99%D7%99%D7%98%D7%A7-%D7%90%D7%95%D7%A0%D7%9C%D7%99%D7%99%D7%9F-VS-%D7%9C%D7%99%D7%9E%D7%95%D7%93-%D7%A4%D7%A8%D7%95%D7%A0%D7%98%D7%9C%D7%99.jpg"}

        ,
                NumLessons = 8,
                StartDate =new DateTime(2024,2,1),
                syllabus = new List<string> { "Lesson 1", "Lesson 2", "Lesson 3" },
                LearningMode = LearningMode.Frontal,
                LecturerId = 2,
                Picture = "https://www.ecomschool.co.il/wp-content/uploads/2023/11/%D7%A7%D7%95%D7%A8%D7%A1-AI-%D7%9C%D7%A0%D7%95%D7%A2%D7%A8.jpg"
            } };


        // GET: api/Course
        [HttpGet]
        public ActionResult<IEnumerable<Course>> Get()
        {
            return Ok(_courses);
        }

        // GET: api/Course/5
        [HttpGet("{id}")]
        public ActionResult<Course> Get(int id)
        {
            var course = _courses.FirstOrDefault(c => c.Id == id);
            if (course == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if course with the specified ID is not found
            }
            return Ok(course); // Return HTTP 200 OK along with the course object
        }

        // POST: api/Course
        [HttpPost]
        public ActionResult<Course> Post([FromBody] Course course)
        {
            course.Id = _courses.Count + 1; // Assign a unique ID
            _courses.Add(course);
            return CreatedAtAction(nameof(Get), new { id = course.Id }, course); // Return HTTP 201 Created along with the course object
        }

        // PUT: api/Course/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Course course)
        {
            var existingCourse = _courses.FirstOrDefault(c => c.Id == id);
            if (existingCourse == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if course with the specified ID is not found
            }

            existingCourse.courseName = course.courseName;
            existingCourse.Category = course.Category;
            existingCourse.NumLessons = course.NumLessons;
            existingCourse.StartDate = course.StartDate;
            existingCourse.syllabus = course.syllabus;
            existingCourse.LearningMode = course.LearningMode;
            existingCourse.LecturerId = course.LecturerId;
            existingCourse.Picture = course.Picture;

            return NoContent(); // Return HTTP 204 No Content
        }

        // DELETE: api/Course/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var course = _courses.FirstOrDefault(c => c.Id == id);
            if (course == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if course with the specified ID is not found
            }

            _courses.Remove(course);
            return NoContent(); // Return HTTP 204 No Content
        }
    }
}
