// やる気の取得
function motivation() {
    $('#sendMotivation').on("click",function(){
        motivation=$("#motivationValue").val()
        console.log(motivation);
    })
};

// やるべきことの取得
function toDo() {
    $('#sendToDo').on("click",function(){
        toDo=$("#toDo").val()
        console.log(toDo);
    })
};

// やりたいことのテキストエリアの追加（pend）
function addWant() {
    $('#add-input').on("click",function(){
        toDo=$("#toDo").val()
        console.log(toDo);
    })
};

//やりたいことの取得
function toDo() {
    $('#sendWant').on("click",function(){
        want1=$("#want1").val()
        console.log(want1);
        want2=$("#want2").val()
        console.log(want2);
    })
};


// 最初に読み込むドキュメント
$(document).ready(function() {
    motivation();
    toDo();
});

