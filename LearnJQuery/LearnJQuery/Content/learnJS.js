/**
 * Created with JetBrains WebStorm.
 * User: Ped
 * Date: 25/01/2013
 * Time: 15:12
 * To change this template use File | Settings | File Templates.
 */

var notifier = function() {
    info = function(message){
        $("#message").text(message);
    };

    error = function(message){
        $("#message").text(message).attr("class", "alert");
    }
    return{
        info : info,
        error: error
    }
}();

var ListCycler = function(parentContainer){
    var firstPost = $(parentContainer + " li:first");

    cycle = function(){
        firstPost.fadeOut(appendToEnd);
    };

    appendToEnd = function(){
        firstPost.remove();
        $(parentContainer).append(firstPost);
        firstPost.fadeIn();
    };

    return {
        cycle: cycle
    }
};

$(function(){

    notifier.info("Welcome");

    $("#messageSetter").click(function(){
        notifier.error("You clicked on me!");

    });


    $("#cycler").click(function(){
        var cycler = new ListCycler("#posts");
        cycler.cycle();
    });
});



/*
 var psychic = function() {

 answer = "Will I strike it rich?";
 say = function(answered){
 console.log("Perhaps, " + this.answer)
 answered(this.answer);
 }

 return {
 say: say
 };


 }();

 var debunker = function(){
 answer = "Fraud!";
 debunk = function(){
 console.log("NO way " + this.answer);
 }

 return{
 debunk: debunk
 };
 }();

 psychic.say(debunker.debunk);

 */