function language()
{
    var x=lang.selectedIndex
    switch(x)
    {
        case 1:
            var eng=['Screen 1','Screen 3']
            fillscr(eng,x)
            break
        case 2:
            var hin=['Screen 2','Screen 4','Screen 5']
            fillscr(hin,x)
            break
    }
}
function fillscr(arr,x,y)
{
    removeOptionScr()
    for(var i=0;i<arr.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=arr[i]
        if(x==1 && i==0)
        {opt.value='The Equalizer 3'}
        else if(x==1 && i==1)
        {opt.value="Shazam! Fury of the Gods"}
        else if(x==2 && i==0)
        {opt.value='OMG 2'}
        if(x==2 && i==1)
        {opt.value='Jawan'}
        if(x==2 && i==2)
        {opt.value="IB71"}
        scr.add(opt)
    }
}
function removeOptionScr()
{
    for(var i=scr.options.length-1;i>=1;i--)
    {
        scr.remove(i)
    }
}


function movie()
{
    var i=scr.options[scr.selectedIndex].value
    movnam.innerHTML=i
}
function genrateticket()
{
    var mp=movnam.innerHTML
    var sn=scr.options[scr.selectedIndex].text
    var mt=t.options[t.selectedIndex].text
    var price=360
    var dis=t.options[t.selectedIndex].value
    var disprice=price-price*dis/100
    var notick=numtick.value
    var netamt=disprice*notick
    var freebie="Sorry You Missed These Free Perks!"
    if(netamt>1000)
    {freebie="Pepsi"}
    if(netamt>2000)
    {freebie="Pepsi + Popcorn"}

    var htm=`<table width='450' cellspacing='0' border='1'><caption><h2>Movie Ticket Generator</h2></caption>`
    htm+=`<tr><th><img src='INOX.png' width="120"></th></tr>`
    htm+=`<tr><th><img src='${mp}.png' width="445" height="250"></th></tr></table>`
    //table 2
    htm+=`<table width='450' cellspacing='0' border='1'>`
    htm+=`<tr><td width="50%"><b>Screen Name:</b> ${sn}</td><td><b>Time:</b> ${mt}</td></tr>`
    htm+=`<tr><td><b>Price:</b> ${price}</td><td><b>Discounted Price:</b> ${disprice}</td></tr>`
    htm+=`<tr><td><b>No. Of Tickets:</b> ${notick}</td><td><b>Net Amount:</b> ${netamt}</td></tr></table>`
    htm+=`<table width='450' cellspacing='0' border='1'>`
    htm+=`<tr><td><b>Freebie:</b> ${freebie}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src='${freebie}.png' width="150" height=130"></td></tr></table>`
    ticket.innerHTML=htm
}