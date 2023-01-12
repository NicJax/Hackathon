const text = document.querySelectorAll('h1, h2, h3, h4, h5, h6, h7, p, li, td, caption, span, a')

// console.log(toFind.innerText); 
// console.log(toReplace.innerText); 

function swapText () {
    const toFind = document.querySelector('#toFind')
    const toReplace = document.querySelector('#toReplace')

    for(let i = 0; i < text.length; i++) {
        // const regex = new RegExp('(the)', 'i');
        if (text[i].innerText.includes(toFind.value)) {
            let copyText = text[i].innerText.split(" ");
            for(let i = 0; i < copyText.length; i++) {
                if(copyText[i].toLowerCase() === toFind.value) {
                    copyText[i] = 'toReplace.value';
                }
            }
            text[i].innerText = copyText.join(' ');
            //text[i].innerText = text[i].innerText.replace(regex, 'THISISATEST');
        }
    }
}


for(let i = 0; i < text.length; i++) {
     //const regex = new RegExp('(the)', 'i');
    if (text[i].innerText.includes('the')) {
        let copyText = text[i].innerText.split(" ");
        for(let i = 0; i < copyText.length; i++) {
            if(copyText[i].toLowerCase() === 'the') {
                copyText[i] = 'toReplace.value';
            }
        }
        text[i].innerText = copyText.join(' ');
        // text[i].innerText = text[i].innerText.replace(regex, 'THISISATEST');
    }
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "start" ) {
            start();
        }
    }
);

function start(){
    alert("started");
}

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if (request.greeting == "hello")
//       console.log('message received!')
//         sendResponse({farewell: "goodbye"});
//     });



// document.getElementById("change-text").addEventListener("click", () => {
//     swapText() 
//     console.log("Button was clicked!");
// });
