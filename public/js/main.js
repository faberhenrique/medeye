$('.nav a').click(function (e) {
    $(this).tab('show');

  var tabContent = '#tabContent' + this.id;

  $('#tabContent1').hide();
  $('#tabContent2').hide();
  $('#tabContent3').hide();
  $(tabContent).show();
});
