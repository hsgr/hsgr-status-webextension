// SpaceAPI
var doorURL = 'https://www.hackerspace.gr/spaceapi';

// This function checks spaceapi to see if hsgr is open
function checker() {
    $.ajax({
         type: 'GET',
         url: doorURL,
         dataType: 'json',

         success: function(data) {
             console.log(data.state.open);
             if (data.state.open) {
                 chrome.browserAction.setTitle({title: 'HSGR is open!'});
                 chrome.browserAction.setIcon({path: 'icons/openhsgr-32.png'})
             } else {
                 chrome.browserAction.setTitle({title: 'HSGR is closed'});
                 chrome.browserAction.setIcon({path: 'icons/hsgr-32.png'})
                 
             }
         }
     });
}

//This calls checker at start and every 15 minutes
checker();
setTimeout(checker, 15 * 60 * 1000);




