function popUp () {
  const sendChangeBtn = document.getElementById('changeText');

  console.log('testing the popup.js');
  
  sendChangeBtn.onclick = popUpClick()
  
  
  // async function (e) {
    //   let queryOptions = { active: true, currentWindow: true };
    //   let tabs = await chrome.tabs.query(queryOptions);
    
    //   chrome.tabs.sendMessage(
    //     tabs[0].id,
    //     { color: "#00FF00" },
    //     function (response) {
    //       console.log(response.status);
    //     }
    //   );
    // };

    function popUpClick() {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
          var activeTab = tabs[0];
          chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
      });
  }
  
//   chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  popUp();

});