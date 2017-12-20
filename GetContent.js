// ==UserScript==
// @name         GetContent
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Analyze the content of the webpage.
// @author       You
// @match        http://lib.hku.hk/general/e-form/book-a-space.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var hrefs = new Array();
    var elements = $('.postTitle > a');
    elements.each(function() {
        hrefs.push($(this).attr('href'));
    });
    $('body').append('<input type="button" value="Open Links" id="CP">');
    $("#CP").css("position", "fixed").css("top", 0).css("left", 0);
    $('#CP').click(function(){
        $.each(hrefs, function(index, value) {
            setTimeout(function(){
                window.open(value, '_blank');
            },1000);
        });
    });

   // var status3 = $("#MAI03STA").text();
    $('.menu').after('<input type="button" id="google" value="Google一下" class="btn self-btn bg s_btn" style="background-color:grey;" />');
    $("#google").click(function() {
		//This code is used to detect  the "Single study table is full (0), empty(>5) or still have some seats(1~5)"
        if($("#MAI03STA").text()>5){
            $("#MAI03STA").css("background-color","green");
        }
        if($("#MAI03STA").text()>0){
            $("#MAI03STA").css("background-color","yellow");
        }
        else{
            $("#MAI03STA").css("background-color","red");
        }
        //alert(status3);
        //googleIt();

    });
    //ctl00_main_btnGetResult
})();