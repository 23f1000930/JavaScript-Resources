function changeCountry()
{
    var i=country.selectedIndex
    switch(i)
    {
        case 1:
            var ind=['Madhya Pradesh','Uttar Pradesh','Gujarat']
            fillDDState(ind)
            break
        case 2:
            var us=['Alaska','Massachusetts']
            fillDDState(us)
            break
        case 3:
            var nz=['Northland','Wellington','Marlborough','Canterbury']  
            fillDDState(nz)
            break      
        case 4:
            var can=['Manitoba','Quebec']
            fillDDState(can)
            break
        case 5:
            var nor=['Vestland','Trøndelag','Rogaland']  
            fillDDState(nor) 
            break 
    }
}






function fillDDState(arr)
{
    removeOptionState()
    for(var i=0;i<arr.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=arr[i]
        state.add(opt)
    }
}
function removeOptionState()
{
    for(var i=state.options.length-1;i>=1;i--)
    {
        state.remove(i)
    }
}





// fillDDC()------>fillDDCity()
function changeState()
{
    var i=country.selectedIndex
    var j=state.selectedIndex
    switch(i)
    {
        case 1:
            switch(j)
            {
                case 1:
                    var mp=['Gwalior','Indore','Bhopal','Bhind']
                    fillDDC(mp)
                    break
                case 2:
                    var up=['Agara','Noida','Mathura']
                    fillDDC(up)
                    break    
                case 3:
                    var guj=['Ahmedabad','Surat','Gandhinagar','Rajkot','Jamnagar']   
                    fillDDC(guj)
                    break 
            }
            break
        case 2:
            switch(j)
            {
                case 1:
                    var alas=['Fairbanks','Kena','Juneau','Juneau','Wasilla']
                    fillDDC(alas)
                    break
                case 2:
                    var messa=['Somerville','Brockton']
                    fillDDC(messa)
                    break 
            }
            break
        case 3:
            switch(j)
            {
                case 1:
                    var nl=['Whangārei','Kaitaia','Mangonui']
                    fillDDC(nl)
                    break
                case 2:
                    var well=['Te Aro','Johnsonville']
                    fillDDC(well)
                    break    
                case 3:
                    var mrl=['Blenheim']   
                    fillDDC(mrl)
                    break 
                case 4:
                    var cntr=['Christchurch','Rangiora','Ashburton']   
                    fillDDC(cntr)
                    break         
            }
            break
        case 4:
            switch(j)
            {
                case 1:
                    var matov=['Winnipeg','Dauphin','Winkler','Selkirk']
                    fillDDC(matov)
                    break
                case 2:
                    var qub=['Montreal','Longueuil','Sherbrooke']
                    fillDDC(qub)
                    break    
            }
            break
        case 5:
            switch(j)
            {
                case 1:
                    var vst=['Bergen','Haugesund','Vossl','Kristiansund']
                    fillDDC(vst)
                    break
                case 2:
                    var trg=['Steinkjer','Orkanger']
                    fillDDC(trg)
                    break    
                case 3:
                    var rogal=['Stavanger','Kopervik','Egersund']   
                    fillDDC(rogal)
                    break 
            }
            break
    }
}






function fillDDC(arr)
{
    removeOptionCity()
    for(var i=0;i<arr.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=arr[i]
        city.add(opt)
    }
}
function removeOptionCity()
{
    for(var i=city.options.length-1;i>=1;i--)
    {
        city.remove(i)
    }
}