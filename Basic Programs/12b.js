function showDetails()
{
    var foodname=food.options[food.selectedIndex].text
    var price=parseInt(food.options[food.selectedIndex].value)
    var qtysale=parseInt(document.getElementById('qty').value) // or qty.value
    var amount=price*qtysale
    var dis=0
    if(amount>=1000)
    {dis=20}
    else if(amount>=500 && amount<=999)
    {dis=5}
    var disamount=amount*dis/100
    var netamount=amount-disamount
    //table 1
    var htm=`<table cellspacing='0' width='20%' border='1'>`
    htm+=`<caption><b>Invoice/Bill</b></caption>`
    htm+=`<tr><th><img src='Haldiram.png' width='100'></th></tr>`
    htm+=`<tr><th><img src='${foodname}.png' width='100'></th></tr></table>`
    //table 2
    htm+=`<table cellspacing='0' width='20%' border='1'>`
    htm+=`<tr><td><b>Food Name:</b></td><td>${foodname}</td></tr>`
    htm+=`<tr><td><b>Rate:</b></td><td>&#8377 ${price}</td></tr>`
    htm+=`<tr><td><b>Quantity:</b></td><td>${qtysale}</td></tr>`
    htm+=`<tr><td><b>Amount:</b></td><td>&#8377 ${amount}</td></tr>`
    htm+=`<tr><td><b>Discount[${dis}%]:</b></td><td>&#8377 ${disamount}</td></tr>`
    htm+=`<tr><td><b>Net Amount:</b></td><td>&#8377 ${netamount}</td></tr>`
    output.innerHTML=htm
}
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
    for(var i=food.options.length-1;i>=1;i--)
    {
        food.remove(i)
    }
}