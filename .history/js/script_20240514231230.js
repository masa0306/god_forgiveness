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
        motivation=$("#motivationValue").val()
        console.log(motivation);
    })
};

// 最初に読み込むドキュメント
$(document).ready(function() {
    motivation();
});

