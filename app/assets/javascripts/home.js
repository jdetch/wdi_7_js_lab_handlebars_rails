$(document).ready(function(){
  $.ajax({
    url: Routes.profile_path(),
    dataType: 'json'
  }).done(function(data){
    $('body').html(HandlebarsTemplates.profile(data));
  });
});

Handlebars.registerHelper('fullName', function() {
  return this.firstName + ' ' + this.lastName;
});

Handlebars.registerHelper('simpleFormat', function(text) {
  return new Handlebars.SafeString(
    Handlebars.Utils.escapeExpression(text).replace(/\n/g, '<br>')
  );
});

Handlebars.registerHelper('formatDate', function(date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if(Handlebars.Utils.isEmpty(date)) {
    return 'Present';
  } else {
    return months[date.month - 1] + ' ' + date.year;
  }
});
