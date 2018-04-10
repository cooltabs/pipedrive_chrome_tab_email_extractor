chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type == "new_email"){  
    var li = $('<li></li>').html(request.options.email)
    $(".result").append(li); 
  }
});