const sendChangeBtn = document.getElementById('change-text');

sendChangeBtn.onclick = async function (e) {
    let queryOptions = { active: true, currentWindow: true };
    let tab = await chrome.tabs.query(queryOptions);
  
    chrome.tabs.sendMessage(
      tabs[0].id,
      { color: "#00FF00" },
      function (response) {
        console.log(response.status);
      }
    );
  };

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});