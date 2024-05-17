// やる気の取得
function motivation() {
    $('#sendMotivation').on("click",function(){
        motivation=$("#motivationValue").val()
        console.log(motivation);
    })
};

// やるべきことの取得
const todo = ""
function toDo() {
    $('#sendToDo').on("click",function(){
        toDo=$("#toDo").val()
        console.log(toDo);
    })
};

// やりたいことのテキストエリアの追加（pend）
// function addWant() {
//     $('#add-input').on("click",function(){
//     })
// };

//やりたいことの取得
const want1 = ""
const want2 = ""
const want3 = ""

function want() {
    $('#sendWant').on("click",function(){
        want1=$("#want1").val()
        console.log(want1);
        want2=$("#want2").val()
        console.log(want2);
        want3=$("#want3").val()
        console.log(want3);
    })
};


// 結果の表示
function result(){
    $('#resultShow').on("click",function(){
        randomNum = Math.floor(Math.random()*(99+1))
        console.log(randomNum)

        a=100-motivation
        console.log(a)
        b1=a-1
        console.log(b1)
        b2=b1-(Math.floor(b1/3-1))
        console.log(b2)
        c1=b2-1
        console.log(c1)
        c2=c1-(Math.floor(b1/3-1))
        console.log(c2)
        d1=c2-1
        console.log(d1)

        
        if(randomNum <= 99 && randomNum >= (100-motivation)){
            result = todo;
        } else if (randomNum<=b1 && randomNum>= b2){
            result=want1
        }else if (randomNum<=c1 && randomNum>= c2){
            result=want2
        }else if (randomNum<=d1 && randomNum>= 0){
            result=want2
        }
        $("#result").append(result)
    })
};

// motivationが60のとき
// 99~40 (99>=random num>=100-motivation) = toDo
// 39~27 (a=100-motivation-1 >=random num >=a-(((99-motivation)/3)-1) )
// 26~14
// 13~0

// 最初に読み込むドキュメント
$(document).ready(function() {
    motivation();
    toDo();
    want();
    result();
});

