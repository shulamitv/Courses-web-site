using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using CourseAPI.Data;
using CourseAPI.Controllers;
using Microsoft.AspNetCore.Mvc;
using CourseAPI.Entities;
using Microsoft.AspNetCore.Builder;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<CourseAPIContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CourseAPIContext") ??
    throw new InvalidOperationException("Connection string 'CourseAPIContext' not found.")));

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddSingleton<UserController>();
builder.Services.AddSingleton<LecturerController>();
builder.Services.AddSingleton<CategoryController>();
builder.Services.AddSingleton<CourseController>();
var policy = "policy";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policy, policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseAuthorization();
app.UseCors(policy);

app.MapControllers();

app.Run();
