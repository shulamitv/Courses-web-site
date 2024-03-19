using CourseAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CourseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {
        private static List<Lecturer> _lecturers = new List<Lecturer>();

        // GET: api/Lecturer
        [HttpGet]
        public ActionResult<IEnumerable<Lecturer>> Get()
        {
            return Ok(_lecturers);
        }

        // GET: api/Lecturer/5
        [HttpGet("{id}")]
        public ActionResult<Lecturer> Get(int id)
        {
            var lecturer = _lecturers.FirstOrDefault(l => l.LecturerId == id);
            if (lecturer == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if lecturer with the specified ID is not found
            }
            return Ok(lecturer); // Return HTTP 200 OK along with the lecturer object
        }

        // POST: api/Lecturer
        [HttpPost]
        public ActionResult<Lecturer> Post([FromBody] Lecturer lecturer)
        {
            lecturer.LecturerId = _lecturers.Count + 1; // Assign a unique ID
            _lecturers.Add(lecturer);
            return CreatedAtAction(nameof(Get), new { id = lecturer.LecturerId }, lecturer); // Return HTTP 201 Created along with the lecturer object
        }

        // PUT: api/Lecturer/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Lecturer lecturer)
        {
            var existingLecturer = _lecturers.FirstOrDefault(l => l.LecturerId == id);
            if (existingLecturer == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if lecturer with the specified ID is not found
            }

            existingLecturer.Name = lecturer.Name;
            existingLecturer.Address = lecturer.Address;
            existingLecturer.Email = lecturer.Email;
            // Update other properties as needed

            return NoContent(); // Return HTTP 204 No Content
        }

        // DELETE: api/Lecturer/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var lecturer = _lecturers.FirstOrDefault(l => l.LecturerId == id);
            if (lecturer == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if lecturer with the specified ID is not found
            }

            _lecturers.Remove(lecturer);
            return NoContent(); // Return HTTP 204 No Content
        }
    }
}
