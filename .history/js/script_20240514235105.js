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
    random_titan = Math.floor(Math.random()*6+1)

}


// 最初に読み込むドキュメント
$(document).ready(function() {
    motivation();
    toDo();
    want();
});

