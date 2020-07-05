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

            else if (e.key=="A" && e.ctrlKey==1 && e.shiftKey==1)
            {
                openCurrentAlbum();
            }
        });

        upresAlbumImgs();
    }

    sortTimeDesc()
    {
        this.timeUploadedButton.click();

        setTimeout(()=>{
            this.descendingButton.click();
        },200);
    }
}

//attempts to determine the current album and opens the imgur gallery in a new tabs
function openCurrentAlbum()
{
    var albumvalue=document.querySelector("#options input").value;

    if (!albumvalue.length)
    {
        return;
    }

    window.open(`https://imgur.com/a/${albumvalue}`);
}

// attempt to target and upres the album images.
function upresAlbumImgs()
{
    var res=document.querySelectorAll("#view .item img");

    if (!res[0].src)
    {
        setTimeout(()=>{
            upresAlbumImgs();
        },3000);
        return;
    }

    for (var x=0;x<res.length;x++)
    {
        // special link that should be ignored
        if (res[x].src.search(/\.com\/.*\//)>=0)
        {
            continue;
        }

        // example: https://i.imgur.com/btesKIms.jpg
        // match[1]=imgur id without "s" for small thumbnail (ie: btesKIm)
        // match[2]=file extension (ie: .jpg)
        var match=res[x].src.match(/\.com\/(.*)s(.*)/);
        res[x].src=`https://i.imgur.com/${match[1]}b${match[2]}`
    }
}

var iexpand=new _iexpand;