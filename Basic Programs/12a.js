function fillFood()
{
    var i=category.selectedIndex
    switch(i)
    {
        case 1:
            var nif=[['Chole Bhature',45],['Rajma Chaval',30],['Pav Bhaji',50],['Panner Tikka',91]]
            fillDD(nif)
            break
        case 2:
            var sif=[['Idli Sambar',55],['Uttapam',60],['Medu Vada',71]]
            fillDD(sif)
            break  
        case 3:
            var ita=[['Margherita Pizza',469],['Pizza Panne',391],['Pasta',159],['Pizza Napoletana',349],['Mozzarella Cheese',299]]
            fillDD(ita)
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
        food.add(opt)
    }
}
function removeOption()
{
    for(i=food.options.length-1;i>=1;i--)
    {
        food.remove(i)
    }
}
function showDetails()
{
    var fn=food.options[food.selectedIndex].text
    var rate=food.value
    output.innerHTML=`<h1>Food Name: ${fn}</h1><img src='${fn}.png' width="300"><h2>Rate: ${rate} Rs</h2>`
} 