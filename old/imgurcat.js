function run()
{
    var tu=document.querySelectorAll("#sort .item")[1];
    var d=document.querySelectorAll("#order .item")[1];
    var li;
    tu.click();

    var liLoad=function(){
        setTimeout(function(){
            console.log("liload");
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

run();
