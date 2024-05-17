// やる気の取得
function motivation() {
    $('#sendMotivation').on("click",function(){
        motivation=$("#motivation").val()
        console.log(motivation);
    })
};


$(document).ready(function() {
    // じゃんけんのボタンのイベントハンドラを一度だけ設定する
    // 初期表示非表示
    $('#wrap').hide();
    $('#result').hide();
    janken();
    $('#start').on("click", function() {
        console.log('start');
        $('#start').fadeOut(1000);
        opponent();
        mission();
        countdown();
    });
    console.log("回数"+roundCounter);
    if (roundCounter > 5) {
        endGame();
        };
});
