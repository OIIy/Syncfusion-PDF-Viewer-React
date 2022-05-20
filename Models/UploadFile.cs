using Microsoft.AspNetCore.Http;

namespace SyncfusionReactApp.Models
{
    public class UploadFile
    {
        public string FileName { get; set; }
        public IFormFile FormFile { get; set; }
    }
}
