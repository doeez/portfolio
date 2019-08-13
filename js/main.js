$(function() {
    // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
    $('a:not([href^="#"]):not([target])').on('click', function(e){
      e.preventDefault(); // ナビゲートをキャンセル
      url = $(this).attr('href'); // 遷移先のURLを取得
      if (url !== '') {
        $('body').addClass('loadmotion');  // bodyに class="fadeout"を挿入
        setTimeout(function(){
          window.location = url;  // 0.8秒後に取得したURLに遷移
        }, 800);
      }
      return false;
    });
  });

  $(window).on('load', function(){
    $('body').removeClass('loadmotion');
  });

$(function(){
    $(window).scroll(function (){
      $(".unloaded").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
            $(this).addClass("loaded").removeClass("unloaded");
        }
      });
    });
  });