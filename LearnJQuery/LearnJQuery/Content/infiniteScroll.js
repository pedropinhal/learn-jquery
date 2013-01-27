/**
 * Created with JetBrains WebStorm.
 * User: Ped
 * Date: 27/01/2013
 * Time: 14:43
 * To change this template use File | Settings | File Templates.
 */
(function($){

    $(function(){
        getTweets(1);

        $("#loadMore").click(function(e){
            e.preventDefault();
            nextPage();
        });

        $(window).scroll(function(){
            if($(window).scrollTop() >= $(document).height() - $(window).height()){
                nextPage();
            }
        });
    });

    function getTweets(pageNumber){
        $.getJSON("http://api.twitter.com/1/statuses/user_timeline.json?id=PedMeister&skip_user=true&page=" + pageNumber + "&callback=?", function(response){
            for(i=0;i<response.length;i++){
                $("#tweets").append("<li>" + response[i].text + "</li>");
            }
        });
    }

    function nextPage(){
        var nextPage = $("#loadMore").data("nextpage");
        getTweets(nextPage);
        $("#loadMore").data("nextpage", nextPage+1);
    }

})(jQuery)