using CourseAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CourseAPI.Controllers // Update this with your actual namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static List<User> _users = new List<User>() { 
            new User { UserId = 1, Email = "mc421@gmail.com", Address = "sdddddd" ,Password="123",Name="malki"},
            new User { UserId = 2 ,Name="bbb",Password="222"},
            new User { UserId = 1, Email = "mc421@gmail.com", Address = "sdddddd" ,Password="1222",Name="malkib"},
            new User { UserId = 2 ,Name="aaa",Password="111"}};
        
        // GET: api/User
        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            return Ok(_users);
        }

        // GET: api/User/5
        [HttpGet("{name}")]
        public ActionResult<User> Get(string name)
        {
            var user = _users.FirstOrDefault(u => u.Name == name);
            if (user == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if user with the specified ID is not found
            }
            return Ok(user); // Return HTTP 200 OK along with the user object
        }

        // POST: api/User
        [HttpPost]
        public ActionResult<User> Post([FromBody] User user)
        {
            user.UserId = _users.Count + 1; // Assign a unique ID
            _users.Add(user);
            return CreatedAtAction(nameof(Get), new { id = user.UserId }, user); // Return HTTP 201 Created along with the user object
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] User user)
        {
            var existingUser = _users.FirstOrDefault(u => u.UserId == id);
            if (existingUser == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if user with the specified ID is not found
            }

            existingUser.Name = user.Name;
            existingUser.Address = user.Address;
            existingUser.Email = user.Email;
            // Update other properties as needed

            return NoContent(); // Return HTTP 204 No Content
        }

        // DELETE: api/User/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = _users.FirstOrDefault(u => u.UserId == id);
            if (user == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if user with the specified ID is not found
            }

            _users.Remove(user);
            return NoContent(); // Return HTTP 204 No Content
        }
    }
}
