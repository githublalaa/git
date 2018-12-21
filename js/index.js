$(document).ready(function(){
        $("#click2").click(function(){
            $("#click2").hide('slow');
            $("#click2re").animate({width:'toggle'})
        })
        
    $("#click1").click(function(){
        $("#click2").show(800);
        $("#click2re").animate({width:'toggle'})
    })
    $("#tlk").click(function(){
        $(".add1").animate({height:'toggle'});
    })
    $("#span1").click(function(){
        $("#nav").animate({height:'toggle'});
    })
    $(".rsec231").mouseover(function(){
        $(".u").css("color","#ff6e61");
    })
    $(".rsec231").mouseout(function(){
    $(".u").css("color","#ccc");
    })
    $(".rsec232").mouseover(function(){
        $(".v").css("color","#ff6e61");
    })
    $(".rsec232").mouseout(function(){
        $(".v").css("color","#ccc");
    })

    $(".ac1").mouseover(function(){
        $(".achange1").css("color","#62c9f3");
    })
    $(".ac1").mouseout(function(){
        $(".achange1").css("color","#ccc");
    })
    $(".ac2").mouseover(function(){
        $(".achange2").css("color","#62c9f3");
    })
    $(".ac2").mouseout(function(){
        $(".achange2").css("color","#ccc");
    })
    $(".ac3").mouseover(function(){
        $(".achange3").css("color","#62c9f3");
    })
    $(".ac3").mouseout(function(){
        $(".achange3").css("color","#ccc");
    })
    $(".ac4").mouseover(function(){
        $(".achange4").css("color","#62c9f3");
    })
    $(".ac4").mouseout(function(){
        $(".achange4").css("color","#ccc");
    })
})
window.onload=function(){
    var arrText=['I am looking forward','You are beautiful','I am hungry','Hello I am'];
    var oSpn1=document.getElementById('spn1');
    var oSpn2=document.getElementById('spn2');
    var oText1=document.getElementById('text1');
    var num=0;

    oText1.innerHTML=arrText[0];
    oSpn2.onclick=function(){
        num++;
        if(num==4){
            num=0;
        }
        oText1.innerHTML=arrText[num];      
    }
    oSpn1.onclick=function(){
        num--;
        if(num==-1){
            num=3;
        }
        oText1.innerHTML=arrText[num];
    }

}