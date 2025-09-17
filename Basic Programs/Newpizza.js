function ShowRate()
{
    rate.innerHTML="Rate: Rs "+pizzaname.value
}
function ShowBill()
{
    pn=pizzaname.options[pizzaname.selectedIndex].text
    image.src=pn+".png"
    image.width=250
    pname.innerHTML="Pizza Name: "+pn
    pizzarate.innerHTML="Rate: Rs "+pizzaname.value
    pizzaqty.innerHTML="Quantity: "+qty.value
    var amount=qty.value*pizzaname.value
    amt.innerHTML="Amount: Rs "+amount
    if(amount>1000)
    {
        var d=amount*10/100
        discount.innerHTML="Discount Amount: Rs "+d
    }
    else
    {
        d=0
        discount.innerHTML="Discount Amount: Rs "+d
    }
    netamt.innerHTML="Net Amount: Rs "+(amount-d)
}