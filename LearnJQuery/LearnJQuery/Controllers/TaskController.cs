using System.Collections.Generic;
using System.Web.Mvc;

namespace LearnJQuery.Controllers
{
    public class TaskController : Controller
    {
        
        public ActionResult Index()
        {
            if (Session["Tasks"] == null)
                Session["Tasks"] = new TaskRepository();
            var repo = Session["Tasks"] as TaskRepository;
            return View(repo);
        }

        public ActionResult AddTask(string task)
        {

            var repo = Session["Tasks"] as TaskRepository;
            repo.AddTask(task);
            Session["Tasks"] = repo;
            return RedirectToAction("Index");
        }

    }

    public class TaskRepository
    {
        public List<jTask> Tasks { get; set; }

        public TaskRepository()
        {
            Tasks = new List<jTask>();
        }

        public void AddTask(string task)
        {
            Tasks.Add(new jTask { Name = task });
        }
    }

    public class jTask
    {
        public string Name { get; set; }
    }
}
