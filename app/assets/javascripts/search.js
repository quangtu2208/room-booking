$(function(){
  $("#q_rooms_price_gteq").val('50');
  $("#q_rooms_price_lteq").val('200');

  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 400,
    values: [50, 200],
    slide: function(event,ui){
      $("#q_rooms_price_gteq").val(ui.values[0]);
      $("#q_rooms_price_lteq").val(ui.values[1]);
    }
  });

  $(".ui-widget-header").css('background', '#00A699');
  $(".ui-state-default, .ui-widget-content").css('background', 'white');
  $(".ui-state-default, .ui-widget-content").css('border-color', '#00A699');
})
