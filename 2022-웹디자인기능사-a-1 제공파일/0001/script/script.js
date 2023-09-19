//서브메뉴, 갤러리 숨기기
$('.sub').hide()
$('.c2').hide()

/* 메인 메뉴를 마우스로 올리면(mouse over) 서브 메뉴 영역이 부드럽게 나타나면서, 서브 메뉴가 보이도록 한다. */
$('nav').on('mouseover',function(){
    $('.sub').stop().slideDown();
})
/* 메인 메뉴에서 마우스커서가 벗어나면(mouse out) 서브 메뉴 영역은 부드럽게 사라져야 한다. */
$('nav').on('mouseout',function(){
    $('.sub').stop().slideUp();
})
/* 공지사항의 첫 번째 콘텐츠를 클릭(Click)할 경우 레이어 팝업창(Layer Pop_up)이 나타나며, */
$('.c1 a:nth-child(1)').on('click',function(){
    $('.popup').show();
})
/* 레이어 팝업창 내에 닫기 버튼을 두어서 클릭하면 해당 팝업창이 닫혀야 한다 */
$('.popup a').on('click',function(){
    $('.popup').hide()
})

