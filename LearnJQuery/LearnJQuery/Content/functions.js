/**
 * Created with JetBrains WebStorm.
 * User: Ped
 * Date: 28/01/2013
 * Time: 20:37
 * To change this template use File | Settings | File Templates.
 */
(function($){

    $(function(){

        $("#logToConsole").click(function(e){
            e.preventDefault();
            $("li").logToConsole();

        });

        $("input").select(function(){
            console.log(this);
        });

        var people = [{Name: "Pedro"}, {Name:"Jono"}, {Name:"Steve"}];

        for(var i=0; i<people.length;i++){
            $("body").append("<h1>" + people[i].Name + "</h1>");
        }

    });

    jQuery.fn.logToConsole = function(){
        $(this).each(function(){
           console.log($(this).text());
        });
    };

})(jQuery)