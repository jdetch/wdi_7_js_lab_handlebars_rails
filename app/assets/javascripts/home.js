$(document).ready(function(){
  $.ajax({
    dataType: 'json',
    url: Routes.profile_path()
  })
  .done(function(data){
    // need to do something with 'data'
    $('#container').html(HandlebarsTemplates.profile(data));
  });
});
