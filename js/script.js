var motivation
var need
var want1
var want2
var want3

// スタートとスタートボタンの仕様
function start(){
    $("#wrap_input").hide();
    $("#wrap_result").hide();
    $("#start").on("click",function(){
        $("#wrap_start h1").fadeOut();
        $("#wrap_start button").fadeOut();
        $("#wrap_input").fadeIn();
    })
};

// モチベーションバーの表示
function motivationDisplay(){
    $("#motivationValue").on("input",function(){
        var currentMotivation = $(this).val();
        $("#motivationDisplay").text(currentMotivation+"%");
    })
    
};

// 結果の表示

function result(){
    $('#send').on("click",function(){
        motivation=$("#motivationValue").val()
        need=$("#need").val()
        want1=$("#want1").val()
        want2=$("#want2").val()
        want3=$("#want3").val()
        
        randomNum = Math.floor(Math.random()*(99+1))
        let threshold = 100 - motivation;
        

        a=100-motivation
        console.log("a="+a)
        b1=a-1
        console.log("b1="+b1)
        b2=b1-(Math.floor(b1/3-1))
        console.log("b2="+b2)
        c1=b2-1
        console.log("c1="+c1)
        c2=c1-(Math.floor(b1/3-1))
        console.log("c2="+c2)
        d1=c2-1
        console.log("d1="+d1)

        
        if(randomNum <= 99 && randomNum >= (100-motivation)){
            $("#resultImg").attr("src","img/need.png")
            $("#resultText").text(need)
            // $("#resultText").attr("class","text-white")
        } else if (randomNum<=b1 && randomNum>= b2){
            $("#resultImg").attr("src","img/want.png")
            $("#resultText").text(want1)
            // $("#resultText").attr("class","text-black")
        }else if (randomNum<=c1 && randomNum>= c2){
            $("#resultImg").attr("src","img/want.png")
            $("#resultText").text(want2)
            // $("#resultText").attr("class","text-black")
        }else if (randomNum<=d1 && randomNum>= 0){
            $("#resultImg").attr("src","img/want.png")
            $("#resultText").text(want3)
            // $("#resultText").attr("class","text-black")
        }
        console.log(result)
        $("#wrap_start").fadeOut();
        $("#wrap_input").fadeOut();
        $("#wrap_result").fadeIn(5000);
        $("#result").append(result)
    })
};

// 最初に読み込むドキュメント
$(document).ready(function() {
    start();
    motivationDisplay();
    result();
});



// 追加していきたい機能一覧
// それぞれをUI分ける
// やる気入力の数字を表示する
// やりたいことの数を変える
// やりたいことのデフォルト設定
// やるべきことを選択する
// 結果のアニメーション