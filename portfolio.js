$(function(){
  // フェードイン自己紹介
  $(window).scroll(function (){
    $('.about').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + windowHeight/2){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  // フェードインポートフォリオ一段目
  $(window).scroll(function (){
    $('.my-project').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + windowHeight/6){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  // フェードインポートフォリオ二段目
  $(window).scroll(function (){
    $('.team-project').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + windowHeight/6){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
  // SKILLのフェードイン
  $(window).scroll(function (){
    $('.skills').each(function(){
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + windowHeight/2){
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });

  // ページトップアニメーション
  $('#PageTop').hide();
	$(window).scroll(function(){
    // 200px動かすと出現
		if ($(this).scrollTop() > 600) {
			$('#PageTop').fadeIn();
		}
		else {
			$('#PageTop').fadeOut();
		}
	});
	$('#PageTop').on('click',function(){
		$('html,body').animate({
			scrollTop: 0 }, 200);
      return false;
      // return false;は、aタグのリンクである「#」を消すために必要なので、必ず記入
    });
});