function result()
{
    var k=parseInt(pm.value)+parseInt(cm.value)+parseInt(mm.value)
    totalm.innerHTML="Total Marks: "+k
    percentage.innerHTML="Percentage: "+k/3
    if(k/3<=100 && k/3>=60)
    {
        dvs.innerHTML="Division: First Division"
    }
    else if(k/3<=59 && k/3>=48)
    {
        dvs.innerHTML="Division: Second Division"
    }
    else if(k/3<=47 && k/3>=35)
    {
        dvs.innerHTML="Division: Third Division"
    }
    else if(k/3<=34 && k/3>=0)
    {
        dvs.innerHTML="Fail..."
    }
}