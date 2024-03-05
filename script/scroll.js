$(function(){
    var $menu = $('.menu>li')


        // menu를 클릭하면 해당 요소에만 클래스명 on이 추가되도록

        $menu.click(function(){
            $menu.removeClass('on');
            $(this).addClass('on');
            // 모든 내용을 뺴고 내가 클릭한 것만 추가

         
           
            // 내용의 인덱스 번호 알기


            // 클릭하면 섹션 움직이게
        })
})