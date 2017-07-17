function imgurExpand()
{
    $("#content").css("width","95%")
        .css("margin-left","30px");

    $(".all-left-panel").css("width","100%");

    var keys=["control","shift","s"];
    var keymap=[0,0,0];
    document.addEventListener("keydown",function(e){
        for (var x=0;x<keys.length;x++)
        {
            if (e.key.toLowerCase()==keys[x])
            {
                keymap[x]=1;
                break;
            }
        }

        for (var x=0;x<keys.length;x++)
        {
            if (keymap[x]!=1)
            {
                return;
            }
        }

        keymap[0]=0;
        keymap[1]=0;
        keymap[2]=0;
        autoCat();
    });

    document.addEventListener("keyup",function(e){
        for (var x=0;x<keys.length;x++)
        {
            if (e.key.toLowerCase()==keys[x])
            {
                keymap[x]=0;
                break;
            }
        }
    });
}

function autoCat()
{
    var tu=document.querySelectorAll("#sort .item")[1];
    var d=document.querySelectorAll("#order .item")[1];
    var li;
    tu.click();

    var liLoad=function(){
        setTimeout(function(){
            li=document.querySelectorAll("#account-thumbs .image")[0];

            if (!li)
            {
                liLoad();
                return;                
            }

            d.click();      
        },100);
    };

    liLoad();
}

imgurExpand();
