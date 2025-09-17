function showpizza()
{
    pizzaimage.width=200
    pizzaimage.src=pizza.value+".png"
    pizzaname.innerHTML="Pizza Name: "+pizza.value
    price.innerHTML="Price: "+rate.value+" Rs"
    qty.innerHTML="Quantity "+quty.value
    amt.innerHTML="Amount: "+rate.value*quty.value+" Rs"
}