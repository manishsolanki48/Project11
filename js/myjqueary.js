if (screen.width < 960) {
  $(".top-header").hide();

  $(".show-btn").click(function(){
    $(".top-header").fadeToggle();
  });
}
$(".top-btn").click(function(){
  $(".form").show();
});
$(".close-btn").click(function(){
  $(".form").hide();
});