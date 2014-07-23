$(document).ready(function(){
  $.ajax({
    dataType: 'json',
    url: Routes.articles_path()
  })
  .done(function(data){
    // need to do something with 'data'
    $('#container').html(HandlebarsTemplates.articles(data));
  });
});
