$(document).ready(function() {
  $('.slider', $(this)).slick({
    arrows:true,
    dots:false,
    adaptiveHeight:false,
    slidesToShow:3,
    draggable:true,
    focusOnSelect: false,
    accessibility: false,
    variableWidth: true,
    autoplay:true,
    appendArrows:$('.arrow__buttons')
  })
});
