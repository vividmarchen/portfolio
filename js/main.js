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

    $('.list li:nth-child(1)').on('click', function (e) {
        e.preventDefault();
        $('#vd1').show().siblings().hide();
    })
    $('.list li:nth-child(2)').on('click', function (e) {
        e.preventDefault();
        $('#vd2').show().siblings().hide();
    })
    $('.list li:nth-child(3)').on('click', function (e) {
        e.preventDefault();
        $('#vd3').show().siblings().hide();
    })
    $('.list li:nth-child(4)').on('click', function (e) {
        e.preventDefault();
        $('#vd4').show().siblings().hide();
    })
    $('.list li:nth-child(5)').on('click', function (e) {
        e.preventDefault();
        $('#vd5').show().siblings().hide();
    })
    $('.list li:nth-child(6)').on('click', function (e) {
        e.preventDefault();
        $('#vd6').show().siblings().hide();
    })
    $('.list li:nth-child(7)').on('click', function (e) {
        e.preventDefault();
        $('#vd7').show().siblings().hide();
    })

    // $(".list li").click(function (e) {
    //     e.preventDefault();
    //     $("#vd1").show();
    //     $("#vd2").hide();
    //     $("#vd3").hide();
    //     $("#vd4").hide();
    //     $("#vd5").hide();
    //     $("#vd6").hide();
    //     $("#vd7").hide();
    // })
    // $(".list li #vd2").click(function () {
    //     $("#vd1").hide();
    //     $("#vd2").show();
    //     $("#vd3").hide();
    //     $("#vd4").hide();
    //     $("#vd5").hide();
    //     $("#vd6").hide();
    //     $("#vd7").hide();
    // })
    // $(".list li #vd3").click(function () {
    //     $("#vd1").hide();
    //     $("#vd2").hide();
    //     $("#vd3").show();
    //     $("#vd4").hide();
    //     $("#vd5").hide();
    //     $("#vd6").hide();
    //     $("#vd7").hide();
    // })
    // $(".list li #vd4").click(function () {
    //     $("#vd1").hide();
    //     $("#vd2").hide();
    //     $("#vd3").hide();
    //     $("#vd4").show();
    //     $("#vd5").hide();
    //     $("#vd6").hide();
    //     $("#vd7").hide();
    // })
    // $(".list li #vd5").click(function () {
    //     $("#vd1").hide();
    //     $("#vd2").hide();
    //     $("#vd3").hide();
    //     $("#vd4").hide();
    //     $("#vd5").show();
    //     $("#vd6").hide();
    //     $("#vd7").hide();
    // })
    // $(".list li #vd6").click(function () {
    //     $("#vd1").hide();
    //     $("#vd2").hide();
    //     $("#vd3").hide();
    //     $("#vd4").hide();
    //     $("#vd5").hide();
    //     $("#vd6").show();
    //     $("#vd7").hide();
    // })
    // $(".list li #vd7").click(function () {
    //     $("#vd1").hide();
    //     $("#vd2").hide();
    //     $("#vd3").hide();
    //     $("#vd4").hide();
    //     $("#vd5").hide();
    //     $("#vd6").hide();
    //     $("#vd7").show();
    // })

    $('.list li').on('click', function () {
        // $(this).css({
        // });
        let i = $(this).index();
        $('.title div').eq(i).show().siblings().hide();
        $('.title img').show();
    })

    $('.design>div').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.wide>div').eq(i).fadeIn().siblings().hide();
    });
    $('.wide>div .close').on('click', function () {
        $(this).parents('.wide_view').fadeOut();
    })

    $('.design2>div').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.wide2>div').eq(i).fadeIn().siblings().hide();
    });
    $('.wide2>div .close').on('click', function () {
        $(this).parents('.wide_view2').fadeOut();
    })


























































































































































































});