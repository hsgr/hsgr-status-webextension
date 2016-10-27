// SpaceAPI
var doorURL = 'https://www.hackerspace.gr/spaceapi';

// This function checks spaceapi to see if hsgr is open
function checker() {
    $.ajax({
         type: 'GET',
         url: doorURL,
         dataType: 'json',

         success: function(data) {
             console.log('hsgr open? ' + data.state.open);
             if (data.state.open) {
                 chrome.browserAction.setTitle({title: 'HSGR is open with ' + (data.state.message).replace(/\D/g, '') + ' hackers'});
                 chrome.browserAction.setIcon({path: 'icons/openhsgr-32.png'});
                 chrome.browserAction.setBadgeText({text: (data.state.message).replace(/\D/g, '')});
                 chrome.browserAction.setBadgeBackgroundColor({color: '#808080'});
             } else {
                 chrome.browserAction.setTitle({title: 'HSGR is closed'});
                 chrome.browserAction.setIcon({path: 'icons/hsgr-32.png'});
                 chrome.browserAction.setBadgeText({text: ''});
             }
         }
     });
}

// This calls checker at start and every 15 minutes
checker();
setInterval(checker, 15 * 60 * 1000);
