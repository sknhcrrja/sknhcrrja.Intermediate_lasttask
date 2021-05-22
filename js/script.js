let speed = 300;


// wow
new WOW().init();

// smooth scroll
$('a[href^="#"]').on('click', function(){
  let header = $('header').innerHeight();
  let id = $(this).attr('href');
  let target = $('#' == id ? 'html' : id); 
  let position = $(target).offset().top - header; 
  $("html, body").animate({
    scrollTop: position
  },
    speed
  );
  return false;
});

// drawer
$('.js_drawer_icon').on('click', function(e){
  e.preventDefault();
  $('#drawer_icon_hamburger').toggleClass('is_active');
  $('#drawer_icon_batu').toggleClass('is_active');
  $('#drawer_contents').toggleClass('is_active');
  $('#drawer_bg').toggleClass('is_active');

});

// slick
$(document).ready(function(){
  $('#js-slick').slick({
    // setting-name: setting-value
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    // centerMode: true,
    variableWidth: true
  });
});

// qa accordion
$('.js-accordion').on('click', function() {
  $(this).next().slideToggle();
  $(this).children('.js-accordion_icon').toggleClass( 'is-open' );
});

// google form
let $form = $('#js_form');
$form.submit(function (event) {
  $.ajax({
    url: $form.attr('action'), 
    data: $form.serialize(), 
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        //送信に成功したときの処理 
        $form.slideUp();
        $('#js_success').slideDown();
      },
      200: function () {
        //送信に失敗したときの処理 
        $form.slideUp();
        $('#js_error').slideDown();
      }
    }
  });
  return false; 
  // event.preventDefault();
});

// formの入力確認
let $submit = $('#js_submit');
$('#js_form select, #js_form input , #js_form textarea').on('change' , function(){
  if(
    $('#js_form select').val() !== "初期" &&
    $('#js_form input[type="text"]').val() !== "" &&
    $('#js_form input[type="email"]').val() !== "" &&
    $('#js_form textarea[name="entry.1977729757"').val() !== "" &&
    $('#js_form input[name="entry.294155462"]').prop('checked') === true
  ){
    $submit.prop('disabled', false);
    $submit.addClass('-active');
  } else {
    $submit.prop('disabled', true);
    $submit.removeClass('-active');

  }
  return false; 
});

// to-top
$(window).on('scroll', function() {
  if (500 < jQuery(this).scrollTop()) {
    $('.to_top').show();
  } else {
    $('.to_top').hide();
  }
});

$('.to_top').on('click', function() {
  $('body, html').animate({
    scrollTop: 0
  },
    speed
  );
  return false;
});