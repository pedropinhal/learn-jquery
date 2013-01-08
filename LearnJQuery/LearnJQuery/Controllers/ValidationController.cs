using System.Web.Mvc;

namespace LearnJQuery.Controllers
{
    public class ValidationController : Controller
    {
        //
        // GET: /Validation/
        
        public ActionResult ValidateUsername(string username)
        {
            return Json(username != "pedro", JsonRequestBehavior.AllowGet);
        }

    }
}
