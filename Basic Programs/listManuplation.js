function removeOptionlist1()
{
    var i=list1.selectedIndex
    var opt=document.createElement('option')
    opt.text=list1.options[i].text
    list2.add(opt)
    list1.remove(i)

}
function removeAlloptionlist1()     /////******/
{
    var p=list1.options.length
    for(var i=0;i<p;i++)
    {
        var opt=document.createElement('option')
        opt.text=list1.options[0].text
        list2.add(opt)
        list1.remove(0)
    }
}
function removeOptionlist2()
{
    var i=list2.selectedIndex
    var opt=document.createElement('option')
    opt.text=list2.options[i].text
    list1.add(opt)
    list2.remove(i)

}
function removeAlloptionlist2()
{
    for(var i=list2.options.length-1;i>=0;i--)  ////*****/
    {
        var opt=document.createElement('option')
        opt.text=list2.options[0].text
        list1.add(opt)
        list2.remove(0)
    }
}