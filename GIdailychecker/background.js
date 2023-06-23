'use strict';
chrome.runtime.onStartup.addListener(function () {
    setTimeout(onload, 5000);
});
async function onload() {
    try {
        let res = await fetch(
            "https://sg-hk4e-api.hoyolab.com/event/sol/sign?",
            { mode: 'no-cors',
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ act_id: "e202102251931481" }),
              credentials: "include"
            });
        let text = await res.text();
        console.log(text);
    }
    catch (e) {
        console.log(e);
        setTimeout(onload, 5000);
    }
}