function fillcity()
{
    var i=state.selectedIndex
    switch(i)
    {
        case 1:
            var mpcity=['Indore','Bhopal','Jabalpur','Gwalior']
            for(var i=0;i<mpcity.length;i++)
            {
                var opt=document.createElement('option')
                opt.text=mpcity[i]
                city.add(opt)
            }
            break
        case 2:
            var upcity=['Agara','Jhansi','Mathura','Noida','Gaziabad','Lucknow']
            for(var i=0;i<upcity.length;i++)
            {
                var opt=document.createElement('option')
                opt.text=upcity[i]
                city.add(opt)
            }    
            break    
    }
}