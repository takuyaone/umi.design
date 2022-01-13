$(".openbtn1").click(function () {
    $("body").toggleClass('nav-open');

    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');
    $(".fade").toggleClass('fade-right');
});

$(".fade").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".fade").removeClass('fade-right');

    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});







