$(function(){            
    $("#popAddWrap div:last-child").click(function(){
        $("#popAdd").css("display","none")
    });
});

$(function(){   
    $("#btn div:nth-child(2)").click(function(){                
        $("#movebox1").stop(true,true).animate({
            left:"-640px"
        },500,"swing",function(){
            var c1 = $("#movebox1 img:first-child").detach();
            $("#movebox1").css("left","0");
            $("#movebox1").append(c1);
        });

        $("#leftMovebox").stop().animate({
        },500,function(){
            var c2 = $("#leftMovebox img:first-child").detach();
            $("#leftMovebox").append(c2);
            left:"-600px";
            $("#leftMovebox").css("left","0");
            
        });

        $("#movebox2").stop(true,true).animate({
            left:"-490px"
        },500, "swing", function(){
            var c4 = $("#movebox2 div:first-child").detach();
            $("#movebox2").css("left","0");
            $("#movebox2").append(c4);
        });

        $("#numMovebox").stop().animate({
        },500,function(){
            var c5 = $("#numMovebox div:first-child").detach();
            $("#numMovebox").append(c5);
            left:"-20px";
            $("#numMovebox").css("left","0");
            
        });

        $(".moveLine").css("width","0");
        $(".moveLine").stop(true,false).animate({
            width:"345px"
        },5000, "swing");
    });
});


/*$(function(){   
    setInterval(function(){
        $("#movebox1").stop(true,true).animate({
            left:"-640px"
        },500,"swing",function(){
            var c1 = $("#movebox1 img:first-child").detach();
            $("#movebox1").css("left","0");
            $("#movebox1").append(c1);
        },5000);

        $("#leftMovebox").stop().animate({
        },500,function(){
            var c2 = $("#leftMovebox img:first-child").detach();
            $("#leftMovebox").append(c2);
            left:"-600px";
            $("#leftMovebox").css("left","0");
            
        },5000);

        $("#movebox2").stop(true,true).animate({
            left:"-490px"
        },500, "swing", function(){
            var c4 = $("#movebox2 div:first-child").detach();
            $("#movebox2").css("left","0");
            $("#movebox2").append(c4);
        },5000);

        $("#numMovebox").stop().animate({
        },500,function(){
            var c5 = $("#numMovebox div:first-child").detach();
            $("#numMovebox").append(c5);
            left:"-20px";
            $("#numMovebox").css("left","0");
        });

        $(".moveLine").css("width","0");
        $(".moveLine").stop(true,false).animate({
            width:"345px"
        },5000, "swing");
    });
});*/


$(function(){   
    $("#btn div:nth-child(1)").click(function(){                
        $("#movebox1").stop(true,true).animate({
            left:"640px"
        },500,"swing",function(){
            var c1 = $("#movebox1 img:first-child").detach();
            $("#movebox1").css("left","0");
            $("#movebox1").append(c1);
        });
        
        $("#leftMovebox").stop().animate({
        },500,function(){
            var c2 = $("#leftMovebox img:first-child").detach();
            $("#leftMovebox").append(c2);
            left:"600px";
            $("#leftMovebox").css("left","0");
            
        });

        $("#movebox2").stop(true,true).animate({
            left:"490px"
        },500, "swing", function(){
            var c4 = $("#movebox2 div:first-child").detach();
            $("#movebox2").css("left","0");
            $("#movebox2").append(c4);
        });

        $("#numMovebox").stop().animate({
        },500,function(){
            var c5 = $("#numMovebox div:first-child").detach();
            $("#numMovebox").append(c5);
            left:"20px";
            $("#numMovebox").css("left","0");
        });

        $(".moveLine").css("width","0");
        $(".moveLine").stop(true,false).animate({
            width:"345px"
        },5000, "swing");
    });
});




/*모달*/
$(function(){
    $(window).load(function(){
        $("#firstPopup").css("display","block");
    });
    $("#fpBtn").click(function(){
        $("#firstPopup").css("display","none");
    });
});
    

/*search*/
    

$(function(){
    $("#searchDiv").click(function(){
        $("#sdHidden").css("visibility","visible");
        $("#searchDiv input[type=text]").css("width","630px");
        $("#searchDiv").css("left","100px");
        $("#cancel").css("visibility","visible");
    });
    $("#cancel").click(function(){
        $("#sdHidden").css("visibility","hidden");
        $("#search").css("width","410px");
        $("#searchDiv").css("left","0px");
        $("#cancel").css("visibility","hidden");
    });
});

$(function() {
    $("#login").click(function(){
        location.href = "class101login1.html";
    });
});    

