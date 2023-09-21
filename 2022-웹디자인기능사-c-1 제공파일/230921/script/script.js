/* menu */
$('.sub').hide()
$('nav > ul > li').on('mouseover',function(){
    $(this).find('.sub').stop().slideDown()
})
$('nav > ul > li').on('mouseout',function(){
    $(this).find('.sub').stop().slideUp()
})
/* 공지사항 첫 글 클릭 시 팝업 보이기 */
$('#popup').hide()
$('.c1 a:first-child').on('click',function(){
    $('#popup').show()
})
/* 팝업 닫기 클릭 시 팝업 숨기기 */
$('#popup a').on('click',function(){
    $('#popup').hide()
})
/* 공지, 갤러리 탭 구조 */
$('.c2').hide()
/* 공지 클릭 시 갤러리(숨기기) 공지(보이기) */
$('.c12 .title a:first-child').on('click',function(){
    /* active Class 활용 */
    /* 모든 제목 active 클래스 해제 */
    /* 클릭한 제목 대상이 active 적용 */
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').show()
    $('.c2').hide()
})
/* 공지 클릭 시 갤러리(보이기) 공지(숨기기) */
$('.c12 .title a:last-child').on('click',function(){
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').hide()
    $('.c2').show()
})
/* 슬라이드 */
/* 이미지 슬라이드는「Fade-in, Fade-out」효과를 이용하여 제작한다. */
/* 슬라이드는 매 3초 이내로 하나의 이미지에서 다른 이미지로 전환되어야 한다. */
/* 웹사이트를 열었을 때 자동으로 시작되어 반복적으로(마지막 이미지가 사라지면 다시 첫 번째 이미지가 나타나는 방식) 전환 되어야한다.  */
/* 초기 세팅 -> 보두 숨기고 첫번째 이미지 보이기 */
/* 첫번째 이미지부터 보이게 하기 position:absolute;적용으로 마지막 이미지가 맨 위로 올라옴 */
$('.slide').hide()
$('.slide').eq(0).show() /* eq() -> 앞의 대상이 여러개일때 순서 선택자 = nth */

let count = 0
/* 무한반복 setInterval */
setInterval(function(){
    count++
    if(count>2){count=0}
    console.log(count)
    $('.slide').fadeOut() /* 제자리 모든 슬라이드 숨기기 */
    $('.slide').eq(count).fadeIn() /* count 번호 해당하는 슬라이드 보이기 */
},3000)