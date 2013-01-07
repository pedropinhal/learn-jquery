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

        $("#taskText").keydown(function(e){
            if(e.keyCode == 13){
                addTask($(this), e);
            }
        });

        $("#submit").click(function(e){
            addTask($("#taskText").val(), e);
            
        });

        $(document).on("click","#tasks li" , function(){
            var task = $(this);
            if(task.hasClass("done")){
                task.fadeOut("slow", function(){
                    task.remove();
                });
            }else
                task.addClass("done");
        } );

        $("#AddTaskSubmit").click(function (e) {
            $.ajax({
                type: "POST",
                url: "/Task/AddTask",
                data: $("#AddTaskForm").serialize(),
                success: function(data) {
                    addTask(data);
                }
            });
            e.preventDefault();
        });


    });

    function addTask(task, e){
        $("#tasks").append($("<li>").text(task));
        e.preventDefault();
        
    }

} (jQuery));
