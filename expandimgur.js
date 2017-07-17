document.head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="${chrome.runtime.getURL("expandimgur.css")}">`);

var timeUploadedButton=document.querySelector("#sort").querySelector(".options").children[1];
var descendingButton=document.querySelector("#order").querySelector(".options").children[1];
document.addEventListener("keydown",(e)=>{
    if (e.key=="S" && e.ctrlKey==1 && e.shiftKey==1)
    {

        timeUploadedButton.click();

        setTimeout(()=>{
            descendingButton.click();
        },100);
    }
});