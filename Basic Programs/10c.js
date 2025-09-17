function fillcity()
{
    var i=state.selectedIndex
    switch(i)
    {
        case 1:
            var mpcity=['Indore','Bhopal','Jabalpur','Gwalior']
            fillDD(mpcity)
            break
        case 2:
            var upcity=['Agra','Jhansi','Mathura','Noida','Gaziabad','Lucknow']
            fillDD(upcity)
            break
        case 3:
            var hra=['Sonipat','Panipat','Karnal','Gurugram']   
            fillDD(hra)
            break
        case 4:
            var guj=['Ahmedabad','Surat','Gandhinagar','Rajkot','Jamnagar']   
            fillDD(guj)
            break    
    }
}
function fillDD(arr)
{
    removeOption()
    for(var i=0;i<arr.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=arr[i]
        city.add(opt)
    }
}
function removeOption()
{
    for(i=city.options.length;i>=1;i--)
    {
        city.remove(i)
    }
}