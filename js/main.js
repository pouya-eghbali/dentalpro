function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1); // remove #
    color = parseInt(color, 16); // convert to integer
    color = 0xFFFFFF ^ color; // invert three bytes
    color = color.toString(16); // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color; // prepend #
    return color;
}
$(document).ready(function () {
  $('#main-page-slides .item').each(function () {
    var color = $(this).data('color');
    var invert = invertColor(color);
    $(this).css('background', color);
    $(this).find('.buttons a').css('background', invert);
  })
  $('#main-page-slides').owlCarousel({
      loop:true,
      margin:0,
      responsiveClass:true,
      rtl: true,
      nav:false,
      items:1,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true
  })
  $('#featured-products-slides').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      rtl: true,
      nav:false,
      dots: false,
      autoWidth: true
  })
  $('#featured-products-slides .item .description').dotdotdot();
})
