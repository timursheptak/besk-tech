/*---------------------------------------------MENU_AND_CARDS_POSITION_OPEN--------------------------------------------*/

const windowInnerWidth = window.innerWidth;
let menu = 1;

$(document).ready(function() {
  $('.icon').click(function() {
    if ( menu <= 1 ) {
      $('.icon__top-stick').toggleClass('icon__top-stick_menu_open');
      $('.icon__bottom-stick').toggleClass('icon__bottom-stick_menu_open');
      $('.menu').toggleClass('menu_open');

      if ( windowInnerWidth <= 1024 ) {
        $('body').toggleClass('page_fixed');
        }} 
        
    else { 
      $('.icon__top-stick').removeClass('icon__top-stick_menu_open');
      $('.icon__bottom-stick').removeClass('icon__bottom-stick_menu_open');
      $('.open-card').removeClass('open-card_pos_click');
      $('body').removeClass('page_fixed');
      $('.icon').removeClass('icon_mobile');
      $('.open-card__background').removeClass('card__background_color_brown card__background_color_black card__background_color_yellow card__background_color_blue card__background_color_salad card__background_color_tomato card__background_color_green'); /*-----------*/
          menu = 1;
    }
  });

  $('.card').click(function() {
    menu = 2;
    $('.icon').addClass('icon_mobile');
    $('.icon__top-stick').addClass('icon__top-stick_menu_open');
    $('.icon__bottom-stick').addClass('icon__bottom-stick_menu_open');
    $('.open-card').addClass('open-card_pos_click');
    $('body').addClass('page_fixed');
    $('.menu').removeClass('menu_open');
  });
});

$(document).ready(function() {
  $('.menu__item').click(function() {
      $('.icon__top-stick').removeClass('icon__top-stick_menu_open');
      $('.icon__bottom-stick').removeClass('icon__bottom-stick_menu_open');
      $('.menu').removeClass('menu_open');
      $('body').removeClass('page_fixed');
    });
  });

/*----------------------------------------------------CARDS_ANIMATION-----------------------------------------------*/

$(document).ready(function() {
  $('.card_zum_pos').hover(function() {
    $('.card_zum_pos .card__arrow').toggleClass('card__arrow_hover');
    $('.card_zum_pos .card__button').toggleClass('card__button_hover');
    $('.card_zum_pos .card__background').toggleClass('card__background_hover');
    $('.open-card__image').attr('src', 'images/card__zum.PNG');
    $('.open-card__title').text('Zum Rittermahl');
  });

  $('.card_zum_pos').click(function() {
    $('.open-card__background').addClass('card__background_color_brown');
    });

  $('.card_mercedes_pos').hover(function() {
    $('.card_mercedes_pos .card__arrow').toggleClass('card__arrow_hover');
    $('.card_mercedes_pos .card__button').toggleClass('card__button_hover');
    $('.card_mercedes_pos .card__background').toggleClass('card__background_hover');
    $('.open-card__image').attr('src', 'images/card__mercedes.PNG');
    $('.open-card__title').text('Mercedes-Benz');
  });

  $('.card_mercedes_pos').click(function() {
    $('.open-card__background').addClass('card__background_color_black');
    });

  $('.card_planka_pos').hover(function() { 
    $('.card_planka_pos .card__arrow').toggleClass('card__arrow_hover');
    $('.card_planka_pos .card__button').toggleClass('card__button_hover');
    $('.card_planka_pos .card__background').toggleClass('card__background_hover');
    $('.open-card__image').attr('src', 'images/card__planka.PNG');
    $('.open-card__title').text('Planka');
  });

  $('.card_planka_pos').click(function() {
    $('.open-card__background').addClass('card__background_color_yellow');
    });

  $('.card_rfbus_pos').hover(function() {
    $('.card_rfbus_pos .card__arrow').toggleClass('card__arrow_hover');
    $('.card_rfbus_pos .card__button').toggleClass('card__button_hover');
    $('.card_rfbus_pos .card__background').toggleClass('card__background_hover');
    $('.open-card__image').attr('src', 'images/card__rfbus.PNG');
    $('.open-card__title').text('RFBUS');
  });

  $('.card_rfbus_pos').click(function() {
    $('.open-card__background').addClass('card__background_color_blue');
    });

  $('.card_smartins_pos').hover(function() {
    $('.card_smartins_pos .card__arrow').toggleClass('card__arrow_hover');
    $('.card_smartins_pos .card__button').toggleClass('card__button_hover');
    $('.card_smartins_pos .card__background').toggleClass('card__background_hover');
    $('.open-card__image').attr('src', 'images/card__smartins.PNG');
    $('.open-card__title').text('Smartins');

    $('.card_smartins_pos').click(function() {
      $('.open-card__background').addClass('card__background_color_salad');
      });
  });

  $('.card_max_pos').hover(function() {
    $('.card_max_pos .card__arrow').toggleClass('card__arrow_hover');
    $('.card_max_pos .card__button').toggleClass('card__button_hover');
    $('.card_max_pos .card__background').toggleClass('card__background_hover');
    $('.open-card__image').attr('src', 'images/card__max.PNG');
    $('.open-card__title').text('Печи MAX');

    $('.card_max_pos').click(function() {
      $('.open-card__background').addClass('card__background_color_tomato');
      });
  });

  $('.card_farm_pos').hover(function() {
    $('.card_farm_pos .card__arrow').toggleClass('card__arrow_hover');
    $('.card_farm_pos .card__button').toggleClass('card__button_hover');
    $('.card_farm_pos .card__background').toggleClass('card__background_hover');
    $('.open-card__image').attr('src', 'images/card__farm.PNG');
    $('.open-card__title').text('ФармАкта');

    $('.card_farm_pos').click(function() {
      $('.open-card__background').addClass('card__background_color_green');
      });
  });
});

/*--------------------------------------------------HEADER_BUTTONS----------------------------------------------------*/

$(document).ready(function() {
  $('.showreel').hover(function() {
    $('.showreel__button').toggleClass('showreel__button_hover');
  });
});

