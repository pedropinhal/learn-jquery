/**
 * Created with JetBrains WebStorm.
 * User: ppinhal
 * Date: 04/01/13
 * Time: 14:43
 * To change this template use File | Settings | File Templates.
 */
// scoping variables inside this closure
(function ($) {

    // document ready
    $(function () {

        $("#taskText").keydown(function (e) {
            if (e.keyCode == 13) {
                addTask($(this));
                e.preventDefault();
            }
        });

        $("#submit").click(function (e) {
            addTask($("#taskText").val());
            e.preventDefault();

        });

        $(document).on("click", "#tasks li", function () {
            var task = $(this);
            var taskId = task.attr("id").substring(7);
            if (task.hasClass("done")) {
                task.fadeOut("slow", function () {
                    console.log(taskId);
                    $.ajax({
                        type: "POST",
                        url: "/Task/RemoveTask",
                        data: { "taskId": taskId },
                        success: function () {
                            task.remove();
                        }

                    }, "json");
                });
            } else {
                console.log(taskId);
                $.ajax({
                    type: "POST",
                    url: "/Task/CompleteTask",
                    data: { "taskId": taskId },
                    success: function () {
                        task.addClass("done");
                    }

                }, "json");

            }

        });

        $("#AddTaskSubmit").click(function (e) {
            $.ajax({
                type: "POST",
                url: "/Task/AddTask",
                data: $("#AddTaskForm").serialize(),
                success: function (data) {
                    addTask(data);
                }
            }, "json");
            e.preventDefault();
        });

        $("#dialog").dialog({
            title: "Add task",
            autoOpen: false,
            modal: true
        });

        $("#openTask").click(function (e) {
            e.preventDefault();
            $("#dialog").dialog("open");
            
        });

        $("#tasks").sortable();

        $("#validateForm").validate({
            rules: {
                username: {
                    remote: "http://localhost:49345/Validation/ValidateUsername"
                },
                password: {
                    minlength: 8
                }
            },
            messages: {
                username: {
                    remote: "Unique usernames!"
                }
            }
        });

    });

    function addTask(task) {
        $("#tasks")
            .append($("<li>")
            .attr("id", "taskId-" + task.Id)
            .text(task.Name));
    }

}(jQuery));
