class _iexpand
{
    constructor()
    {
        document.head.insertAdjacentHTML("beforeend",`<link rel="stylesheet" href="${chrome.runtime.getURL("expandimgur.css")}">`);

        //click on time uploaded then descending
        this.timeUploadedButton=document.querySelector("#sort .options").children[1];
        this.descendingButton=document.querySelector("#order .options").children[1];

        document.addEventListener("keydown",(e)=>{
            if (e.key=="S" && e.ctrlKey==1 && e.shiftKey==1)
            {
                this.sortTimeDesc();
            }
        });
    }

    sortTimeDesc()
    {
        this.timeUploadedButton.click();

        setTimeout(()=>{
            this.descendingButton.click();
        },200);
    }
}

var iexpand=new _iexpand;