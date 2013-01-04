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
        $("#showLink").click(function(){
            $("#text").show();
        });
        $("#hideLink").click(function(){
            $("#text").hide();
        });
    });
} (jQuery));
