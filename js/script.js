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

// Needの表示
function displayNeeds(){
    $("#displayNeeds").empty(); 
    for (let i =0; i<localStorage.length; i++){
        const key = localStorage.key(i)
        if (key.startsWith("need")) {
            const value = localStorage.getItem(key)
            const html=`
            <option value="${value}">${value}</option>
            `;
            $("#displayNeeds").append(html);
        }
    }
};

// Needの生成
function createNeed(){
    $("#createNeed").on("click", function(){
        $("#dialogOverlay").removeClass("hidden");
        $("#dialogNeed").removeClass("hidden");
    });

    $("#dialogNeedOk").on("click", function(){
        const newNeed = $("#inputNeed").val();
        localStorage.setItem("need" + (localStorage.length + 1), newNeed);
        displayNeeds();
        $("#dialogNeed").addClass("hidden");
        $("#dialogOverlay").addClass("hidden");
    });

    $("#dialogNeedCancel").on("click", function(){
        $("#dialogNeed").addClass("hidden");
        $("#dialogOverlay").addClass("hidden");
    });
};

// Wantの生成
function createWant(){
    $("#createWant").on("click", function(){
        $("#dialogOverlay").removeClass("hidden");
        $("#dialogWant").removeClass("hidden");
    });

    $("#dialogWantOk").on("click", function(){
        const newWant = $("#inputWant").val();
        localStorage.setItem("want" + (localStorage.length + 1), newWant);
        displayWants();
        $("#dialogWant").addClass("hidden");
        $("#dialogOverlay").addClass("hidden");
    });

    $("#dialogWantCancel").on("click", function(){
        $("#dialogWant").addClass("hidden");
        $("#dialogOverlay").addClass("hidden");
    });
};

// Wantの表示
function displayWants(){
    $("#displayWants").empty(); 
    for (let i =0; i<localStorage.length; i++){
        const key = localStorage.key(i)
        if (key.startsWith("want")) {
            const value = localStorage.getItem(key)
            const html=`
                <div class="want-wrap flex items-center space-x-4 w-1/4">
                    <input type="checkbox" name="want${i}" id="want${i}" class="hidden peer">
                    <label for="want${i}" class="w-full h-12 flex items-center justify-center cursor-pointer p-2 bg-gray-700 text-white rounded-md hover:bg-blue-700 peer-checked:bg-blue-600 peer-checked:text-white transition-colors duration-300">
                        <svg class="hidden w-6 h-6 text-white peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        <span class="ml-2">${value}</span>
                    </label>
                </div>
            `;
            $("#displayWants").append(html);
        }
    }
};

// Wantの生成
function createWant(){
    $("#createWant").on("click",function(){
        $("#dialogWant").dialog({
            title:"What do you WANT to do?",
            modal:true,
            draggable:false,
            buttons:{
                "OK":function(){
                    NewWant = $("#inputWant").val();
                    localStorage.setItem("want"+(localStorage.length+1),NewWant)
                    displayWants();
                    $(this).dialog("close");
                    displayWants();
                },
                "Cancel":function(){
                    $(this).dialog("close")
                }      
            }
        })
        $("#dialogWants").dialog("open");
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
        need=$("#displayNeeds").val()//選択されたneedを取得
        console.log(need,"needの中身確認")
        //選択されたwantを取得
        let selectedWants=[];
        $("#displayWants input:checked").each(function(){
            selectedWants.push($(this).next("label").text());
            console.log(selectedWants)
        });
        selectedWantsNum = selectedWants.length
        let threshold = 100 - motivation;
        // needをrangesに格納
        let ranges = [
            {min :threshold, max : 99, text : need, img : "img/need.png"},
        ]

        // wantをselectedWantsから取り出して、rangesに格納
        for(let i = 1; i <= selectedWants.length; i++){
            let min = Math.floor(threshold - (threshold / (selectedWants.length + 1)) * i);
            let max = i === 1 ? threshold - 1 : Math.floor(threshold - (threshold / (selectedWants.length + 1)) * (i - 1)) - 1;
            ranges.push({min:min, max:max, text:selectedWants[i-1],img:"img/want.png"});
            console.log(ranges)
        }
        
        randomNum = Math.floor(Math.random()*(99+1))
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
        setTimeout(function(){
        location.reload()},7000)
    })
};

// 最初に読み込むドキュメント
$(document).ready(function() {
    start();
    createNeed();
    displayNeeds();
    createWant();
    displayWants();
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