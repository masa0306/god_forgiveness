var motivation
var need
var want1
var want2
var want3

// スタートとスタートボタンの仕様
function start(){
    // $("#wrap_input").hide();
    $("#wrap_result").hide();
    $("#start").on("click",function(){
        $("#wrap_start h1").fadeOut();
        $("#wrap_start button").fadeOut();
        $("#wrap_input").fadeIn();
    })
};

// Needの生成
function displayNeed(){
    for (let i =0; i<localStorage.length; i++){
        const key = localStorage.key(i)
        if (key =="need") {
            const value = localStorage.getItem(key)
            const html=`
            <option value="${i}">${value}</option>
            `;
            $("#displayNeeds").append(html);
        }
    }
};

// Needの生成
function createNeed(){
    $("#createNeed").on("click",function(){
        $("#dialogNeed").dialog({
            title:"What do you want to do?",
            modal:true,
            draggable:false,

            buttons:{
                "OK":function(){
                    NewNeed = $("#inputNeed").val();
                    localStorage.setItem("need",NewNeed)
                    displayNeed();
                    $(this).dialog("close")
                },
                "Cancel":function(){
                    $(this).dialog("close")
                }      
            }
        })
        $("#dialogNeed").dialog("open");
    });
};


// モチベーションバーの表示
function motivationDisplay(){
    $("#motivationValue").on("input",function(){
        var currentMotivation = $(this).val();
        $("#motivationDisplay").text(currentMotivation+"%");
    })
};

// 既存のwant needを選択肢に表示する機能
    // select option で表示
    // wantカラムを抽出してforをwant候補に入れて表示
    // （絵文字を入れる）
// 新規のみの場合、want needの入力内容をlocal strageに保存する機能
    // 新規追加ボタンで、ダイアログで入力


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

        let ranges = [
            {min :threshold, max : 99, text : need, img : "img/need.png"},
            {min :Math.floor(threshold-(threshold/3)), max : threshold-1, text :want1, img : "img/want1.png"},
            {min :Math.floor(therehold-(therehold/3)*2), max :Math.floor(therehold-(therehold/3))-1, text :want2, img : "img/want2.png"},
            {min :0, max :Math.floor(therehold-(therehold/3*2))-1, text :want3, img : "img/want3.png"}
        ]

        for (range of ranges){
            if (randomNum<=range.max && randomNum>=range.min){
                $("#resultImg").attr("src",range.img);
                $("#resultText").text(range.text);
                break;
            }
        }
        $("#wrap_start").fadeOut();
        $("#wrap_input").fadeOut();
        $("#wrap_result").fadeIn(5000);
    })
};

// 最初に読み込むドキュメント
$(document).ready(function() {
    start();
    displayNeed();
    motivationDisplay();
    result();
    createNeed();
});



// 追加していきたい機能一覧
// それぞれをUI分ける
// やる気入力の数字を表示する
// やりたいことの数を変える
// やりたいことのデフォルト設定
// やるべきことを選択する
// 結果のアニメーション