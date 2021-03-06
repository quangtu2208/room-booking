$(function() {
  $("#start_date").datepicker({
    dateFormat: 'dd-mm-yy',
    minDate: 0,
    maxDate: '3m',
    onSelect: function(selected) {
      $('#end_date').datepicker("option", "minDate", selected);
      $('#end_date').attr('disabled', false);
    }
  });

  $("#end_date").datepicker({
    dateFormat: 'dd-mm-yy',
    minDate: 0,
    maxDate: '3m',
    onSelect: function(selected) {
      $('#start_date').datepicker("option", "maxDate", selected);
    }
  });
})
