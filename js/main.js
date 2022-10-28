$(function () {

    let winHeight = $(window).height();
    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    $('#wrap>div').on('mousewheel', function (e, d) {
        if (d > 0) {//스크롤을 올렸을 때
            let prv = $(this).prev().offset().top;
            $('html, body').stop().animate({
                scrollTop: prv
            });

        } else if (d < 0) {//스크롤을 내렸을 때
            let nxt = $(this).next().offset().top;
            $('html, body').stop().animate({
                scrollTop: nxt
            })
        }
    })

    $('.gnb li a').on('click', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        });
    });

    let main = $('#wrap .main').offset().top;
    let about = $('#wrap .about').offset().top;
    let skill = $('#wrap .skill').offset().top;
    let work1 = $('#wrap .work1').offset().top;
    // let work2 = $('#wrap .work2').offset().top;
    // let work3 = $('#wrap .work3').offset().top;
    let contact = $('#wrap .contact').offset().top;

    $(window).on('scroll', function () {
        let scr = $(this).scrollTop();
        if (scr >= main && scr < about) {
            $('#header').css({ opacity: 1 });
            $('.gnb li').removeClass('on');
        }
        if (scr >= about && scr < skill) {
            $('#header').css({ opacity: 1 });
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(0).addClass('on');
        }
        if (scr >= skill && scr < work1) {
            $('#header').css({ opacity: 1 });
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(1).addClass('on');
        }
        if (scr >= work1 && scr < contact) {
            $('#header').css({ opacity: 1 });
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(2).addClass('on');
        }
        if (scr >= contact) {
            $('#header').css({ opacity: 1 });
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(3).addClass('on');
        }

    }); // scroll event

    $('.design>div').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.wide>div').eq(i).fadeIn().siblings().hide();
    });
    $('.wide>div .close').on('click', function () {
        $(this).parents('.wide_view').fadeOut();
    })





























































































































































































});