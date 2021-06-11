$('#emailForm').on('submit', function(event) {
  event.preventDefault(); // prevent reload
  
  var formData = new FormData(this);
  formData.append('service_id', 'service_osvhifd');
  formData.append('template_id', 'template_819k8xq');
  formData.append('user_id', 'user_Hqjg6CGWG7bozRdUpnZDd');
  formData.append('to_name', 'Arthur Borges');
  formData.append('from_name', $("#emailForm :input[name='name']"));
  formData.append('from_email', $("#emailForm :input[name='email']"));
  formData.append('message', $("#emailForm :input[name='message']"));

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
  }).done(function() {
      alert('Your mail is sent!');
  }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
  });
});