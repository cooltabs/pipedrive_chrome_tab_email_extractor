chrome.commands.onCommand.addListener(function(command) {
  if (command == 'save_emails') { saveEmails(); }
});


function saveEmails() {
  chrome.tabs.create({'url': chrome.extension.getURL('html/result.html'), 'selected': true});

  chrome.tabs.query({"url": ["https://*.pipedrive.com/deal/*", "https://*.pipedrive.com/organization/*"]}, function(tabs) { 
    for (var i = 0; i < tabs.length; i++) { 
      chrome.tabs.sendMessage(tabs[i].id, { action: "check_email" }); 
    }
  });

}
