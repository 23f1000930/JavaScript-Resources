function fillcity()
{
    var i=state.selectedIndex;
    switch(i)
    {
        case 1:
            var mpcity=[['Indore',2500000],['Bhopal','1500000'],['Jabalpur',8789999],['Gwalior',4567656]]
            mpcity[0][1]
            fillDD(mpcity)
           break
        case 2:
            var upcity=[['Agra',888909],['Jhansi',7868768],['Mathura',77777],['Noida',576576],['Gaziabad',868768],['Lucknow',68778768]]
            fillDD(upcity)
            break
        case 3:
            var hra=[['Sonipat',525000],['Panipat',1150000],['Karnal',1525500],['Gurugram',1789500]]
            fillDD(hra)
            break    
    }
}
function fillDD(arr)
{
    removeOption()
    for(var i=0;i<arr.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=arr[i][0]
        opt.value=arr[i][1]
        city.add(opt)
    }
}
function removeOption()
{
    for(var i=city.options.length-1;i>=1;i--)
    {
        city.remove(i)
    }
}
function showDetails()
{
    var cname=city.options[city.selectedIndex].text
    var popu=city.value //   popu=city.options[city.selectedIndex].value
    output.innerHTML=`<h1>${cname}</h1><h2>Population :${popu}</h2><img src='${cname}.png' width='200'>`
}