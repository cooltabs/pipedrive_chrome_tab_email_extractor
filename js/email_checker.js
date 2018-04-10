chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if(message.action === "check_email") { checkEmail(); }
});

function checkEmail() {
  var emails = $('a[href^="mailto:"]');

  if (emails.length > 0) {
    setTimeout(function() {
      chrome.runtime.sendMessage({type: "new_email", options: { email: emails[0].text }});
    }, 500);
  }
}