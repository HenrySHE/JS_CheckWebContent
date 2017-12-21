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

    $(document).ready(function(){
        if($("#MAI03STA").text()>5){
            $("#MAI03STA").css("background-color","green");
        }
        if($("#MAI03STA").text()>0){
            $("#MAI03STA").css("background-color","yellow");
        }
        else{
            $("#MAI03STA").css("background-color","red");
        }
        //MAI04STA
        if($("#MAI04SRA").text()>5){
            $("#MAI04SRA").css("background-color","green");
        }
        if($("#MAI04SRA").text()>0){
            $("#MAI04SRA").css("background-color","yellow");
        }
        else{
            $("#MAI04SRA").css("background-color","red");
        }
    });

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
    $('.menu').after('<input type="button" id="google" value="ReFormat" class="btn self-btn bg s_btn" style="background-color:grey;" />');

    $("#google").click(function() {
        //var result = $("#Table .trLibItem").toArray();


        /*
        for (i=0;i<resul.length;i++){
            alert(result[i].val);
        }
        */
        //$("#Table .trLibItem").css({"color":"red","border":"2px solid red"});
        //alert(test);
        //googleIt();

    });
    //ctl00_main_btnGetResult
})();