$(document).ready(function () {

  AOS.init();

  $(".click").on({
    mouseover: function () {
      $(".bottom .hover .c2").stop(true).show();
      $(".btnOn").stop(true).show();
      $(".bottom .hover .c1").stop(true).css({ opacity: '0' });
    },
    mouseout: function () {
      $(".bottom .hover .c2").stop(true).hide();
      $(".btnOn").stop(true).hide();
      $(".bottom .hover .c1").stop(true).css({ opacity: '1' });
    }
  })


  // 네비
  $('.nav').click(function () {
    $(this).toggleClass('active');
  });

  let menu = $(".menu");
  let btn = $(".nav");

  btn.click(function () {
    menu.toggleClass("open");

    if (menu.hasClass("open")) {
      menu.slideDown()
    } else {
      menu.slideUp()
    }
  });

  // on 버튼
  $('.btnOn').click(function () {
    $(this).toggleClass('on');
  });

  let on = $(".on");
  let btnO = $(".click");
  let title = $(".bounce");

  btnO.click(function () {
    on.toggleClass("o");

    if (on.hasClass("o")) {
      on.css({ opacity: '1' })
      title.css({ opacity: '1' })
    } else {
      on.css({ opacity: '0' })
    }
  });

  //  uiux pdf btn
  $('.uiux .uiux_inner .con1 .btn .b1').click(function () {
    $('.pop ').fadeIn()
  });
  $('.imgBox .btn').click(function () {
    $('.pop ').fadeOut()
  });

  //  branding pdf btn1
  $('.branding .branding_inner .all .btn .b1').click(function () {
    $('.pop1 ').fadeIn()
  });
  $('.branding_pop .b1 .btn').click(function () {
    $('.pop1 ').fadeOut()
  });

  //  branding pdf btn2
  $('.branding .branding_inner .all .btn .b2').click(function () {
    $('.pop2').fadeIn()
  });
  $('.branding_pop .b2 .btn').click(function () {
    $('.pop2').fadeOut()
  });

  // 예시 !!!!!!!!!!!!!!!!
  // let banner = $(".openbox");
  // let btn = $("#nav-icon4");

  // btn.click(function(){
  //     banner.toggleClass("open");

  //     if(banner.hasClass("open")){
  //         banner.fadeIn()
  //         btn.find("span").css({backgroundColor:'#fff'});
  //         $(".h_inner h1 img").attr('src','./img/flogo.svg')
  //         // $(".h_inner h1 img").css({width:'182px'})
  //     }else{
  //         banner.fadeOut()
  //         btn.find("span").css({backgroundColor:'#000'});
  //         $(".h_inner h1 img").attr('src','./img/h1Logo_b.png')
  //     }
  // });      


  // scan me hover
  $(".code1").on({
    mouseover: function () {
      $(".scan1").stop(true).fadeIn();
    },
    mouseout: function () {
      $(".scan1").stop(true).fadeOut();
    }
  })
  $(".code2").on({
    mouseover: function () {
      $(".scan2").stop(true).fadeIn();
    },
    mouseout: function () {
      $(".scan2").stop(true).fadeOut();
    }
  })

  //슬라이드
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });




  // scroll menu

  var $menu = $('.menu>li')
  $contents = $('section')


  // menu를 클릭하면 해당 요소에만 클래스명 on이 추가되도록

  $menu.click(function () {
    $(this).addClass('on').siblings().removeClass('on')
    // 모든 내용을 뺴고 내가 클릭한 것만 추가
    var idx = $(this).index();
    var section = $contents.eq(idx)
    var sectionDistance = section.offset().top;

    //A.scrollTop()스크롤양을 확인 

    // 높이값만큼 이동함***
    $('html,body').stop().animate({ scrollTop: sectionDistance })
  })


  //scoll top

  let Tbtn = $(".top"); //Tbtn = top button의미

  $(window).scroll(() => {
    if ($(this).scrollTop() > 6100) {
      Tbtn.stop(true).fadeIn();
    } else {
      Tbtn.stop(true).fadeOut();
    }
  }); //스크롤을 100을 내렸을때 버튼이 사라졌다가 원래대로하면 보이게

  Tbtn.click(() => {
    $(window).scrollTop(0);
    //수직상의 (위치값) 으로 이동
    //버튼을 클릭했을 때 창이 0값으로 올라감
  });


  $(window).scroll(function () {
    let a = $(this).scrollTop();
    console.log(a)

    if (a < 3500 && a > 800) {
      $(".circle--1").addClass('cstart1')
      $(".circle--2").addClass('cstart2')
      $(".circle--3").addClass('cstart3')
      $(".circle--4").addClass('cstart4')
    } else {
      $(".circle--1").removeClass('cstart1')
      $(".circle--2").removeClass('cstart2')
      $(".circle--3").removeClass('cstart3')
      $(".circle--4").removeClass('cstart4')
    }
  })

})