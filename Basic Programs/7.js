function show()
{
    //alert(cars.selectedIndex)
    //alert(cars.options.length)
    //alert(cars.options[1].text)
    //alert(cars.options[1].value)
    //alert(cars.options[cars.selectedIndex].text)
    carimage.width=150
    var cn=cars.options[cars.selectedIndex].text
    carname.innerHTML=cn
    carimage.src=cn+".png"
    price.innerHTML=cars.value
}