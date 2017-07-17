document.head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="${chrome.runtime.getURL("expandimgur.css")}">`);

//click on time uploaded then descending
var timeUploadedButton=document.querySelector("#sort .options").children[1];
var descendingButton=document.querySelector("#order .options").children[1];
document.addEventListener("keydown",(e)=>{
    if (e.key=="S" && e.ctrlKey==1 && e.shiftKey==1)
    {
        timeUploadedButton.click();

        setTimeout(()=>{
            descendingButton.click();
        },150);
    }
});