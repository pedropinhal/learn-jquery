using System.Collections.Generic;
using System.Linq;
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

        [HttpPost]
        public ActionResult AddTask(jTask task)
        {
            var repo = Session["Tasks"] as TaskRepository;
            repo.AddTask(task);
            Session["Tasks"] = repo;
            if (Request.IsAjaxRequest())
            {
                return Json(task);
            }
            return RedirectToAction("Index");
        }
        [HttpPost]
        public ActionResult CompleteTask(int taskId)
        {
            if (Request.IsAjaxRequest())
            {
                var repo = Session["Tasks"] as TaskRepository;
                repo.CompleteTask(taskId);
                Session["Tasks"] = repo;
            }
            return Json(taskId);
        }


        [HttpPost]
        public ActionResult RemoveTask(int taskId)
        {
            if (Request.IsAjaxRequest())
            {
                var repo = Session["Tasks"] as TaskRepository;
                repo.RemoveTask(taskId);
                Session["Tasks"] = repo;
            }
            return Json(taskId);
        }
    }

    public class TaskRepository
    {
        public List<jTask> Tasks { get; set; }
        private static int _id;
        public TaskRepository()
        {
            Tasks = new List<jTask>();
        }

        public void AddTask(jTask task)
        {
            task.Id = _id;
            _id++;
            Tasks.Add(task);
        }

        public void RemoveTask(int taskId)
        {
            var task = Tasks.First(t => t.Id == taskId);
            Tasks.Remove(task);
        }

        public void CompleteTask(int taskId)
        {
            var task = Tasks.First(t => t.Id == taskId);
            task.State = jTask.TaskState.Completed;
        }
    }

    public class jTask
    {
        public enum TaskState
        {
            Started, Completed
        }
        public string Name { get; set; }
        public int Id { get; set; }
        public TaskState State { get; set; }
    }
}
