using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SyncfusionReactApp.Models;
using System;
using System.IO;

namespace SyncfusionReactApp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        [HttpPost]
        public ActionResult Post([FromForm] UploadFile file)
        {
            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.FileName);

                using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    file.FormFile.CopyTo(stream);
                }

                return StatusCode(StatusCodes.Status201Created);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet]
        public ActionResult Get()
        {
            Console.Write("OK");

            return StatusCode(StatusCodes.Status200OK);
        }
    }
}
