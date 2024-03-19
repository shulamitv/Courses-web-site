using CourseAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CourseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private static List<Category> _categories = new List<Category>() {
            new Category { CategoryId = 1, CategoryName ="AI",RouteToIcon= "https://www.mylist.co.il/wp-content/uploads/2023/10/%D7%A7%D7%95%D7%A8%D7%A1-%D7%94%D7%99%D7%99%D7%98%D7%A7.jpg" },
            new Category{CategoryId=2 ,CategoryName="Full Stack",RouteToIcon="https://www.kernelios.com/wp-content/uploads/2023/07/%D7%A7%D7%95%D7%A8%D7%A1-%D7%94%D7%99%D7%99%D7%98%D7%A7-%D7%90%D7%95%D7%A0%D7%9C%D7%99%D7%99%D7%9F-VS-%D7%9C%D7%99%D7%9E%D7%95%D7%93-%D7%A4%D7%A8%D7%95%D7%A0%D7%98%D7%9C%D7%99.jpg"}};

        // GET: api/Category
        [HttpGet]
        public ActionResult<IEnumerable<Category>> Get()
        {
            return Ok(_categories);
        }

        // GET: api/Category/5
        [HttpGet("{id}")]
        public ActionResult<Category> Get(int id)
        {
            var category = _categories.FirstOrDefault(c => c.CategoryId == id);
            if (category == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if category with the specified ID is not found
            }
            return Ok(category); // Return HTTP 200 OK along with the category object
        }

        // POST: api/Category
        [HttpPost]
        public ActionResult<Category> Post([FromBody] Category category)
        {
            category.CategoryId = _categories.Count + 1; // Assign a unique ID
            _categories.Add(category);
            return CreatedAtAction(nameof(Get), new { id = category.CategoryId }, category); // Return HTTP 201 Created along with the category object
        }

        // PUT: api/Category/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Category category)
        {
            var existingCategory = _categories.FirstOrDefault(c => c.CategoryId == id);
            if (existingCategory == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if category with the specified ID is not found
            }

            existingCategory.CategoryName = category.CategoryName;
            existingCategory.RouteToIcon = category.RouteToIcon;
            // Update other properties as needed

            return NoContent(); // Return HTTP 204 No Content
        }

        // DELETE: api/Category/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var category = _categories.FirstOrDefault(c => c.CategoryId == id);
            if (category == null)
            {
                return NotFound(); // Return HTTP 404 Not Found if category with the specified ID is not found
            }

            _categories.Remove(category);
            return NoContent(); // Return HTTP 204 No Content
        }
    }
}
