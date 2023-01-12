// async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome.tabs.query(queryOptions);
//     console.log(tab);
//     return tab;
//   }

//   function swapText () {
//     const toFind = document.querySelector('#toFind')
//     const toReplace = document.querySelector('#toReplace')

//     for(let i = 0; i < text.length; i++) {
//         // const regex = new RegExp('(the)', 'i');
//         if (text[i].innerText.includes(toFind.value)) {
//             let copyText = text[i].innerText.split(" ");
//             for(let i = 0; i < copyText.length; i++) {
//                 if(copyText[i].toLowerCase() === toFind.value) {
//                     copyText[i] = toReplace.value;
//                 }
//             }
//             text[i].innerText = copyText.join(' ');
//             // text[i].innerText = text[i].innerText.replace(regex, 'THISISATEST');
//         }
//     }
// }

// document.getElementById("change-text").addEventListener("click", () => {
//     swapText() 
//     console.log("Button was clicked!");
// });