// reset button is useless until form tag is not used
function showMarksheet()
{
    var rn=rollno.value
    var sch=school.value
    var std=student.value
    var fn=father.value

    var pm=parseInt(physics.value)
    var cm=parseInt(chemistry.value)
    var mm=parseInt(maths.value)
    var hm=parseInt(hindi.value)
    var em=parseInt(english.value)
    var total=pm+cm+mm+hm+em
    var per=total*100/500

    // getting division

    var division
    if(per<=100 && per>=60)
    {division='1st'}
    else if(per<=59 && per>=48)
    {division='2nd'}
    else if(per<=47 && per>=35)
    {division='3rd'}
    else
    {division='Fail'}

    //getting remark

    var remark
    var i
    function showRemark()
    {
        remark=''
        var sub=[pm,cm,mm,hm,em]
        if(sub[i]<35)
        {remark='*'}
        else if(sub[i]>75)
        {remark='D'}
    }
    
    //getting gender

    var g=gender.value
    var title
    var nam
    if(g=='M')
    {title='Master' 
    nam='S/o'}
    else if(g=='F')
    {title='Miss' 
    nam='D/o'}

   
    //table 1
    var htm=`<table cellspacing='0' width='600' border='1' bgcolor='#f8c291'><caption><h2>Marksheet</h2></caption>`
    htm+=`<tr><th><img src='cbse.png' width='60'></th><th><h2>Central Board Of Secondary Education</h2></th></tr></table>`
    //table 2
    htm+=`<table cellspacing='0' width='600' border='1' bgcolor='#f8c291'>`
    htm+=`<tr><td width='110'><b>Roll No.</b></td><td>${rn}</td></tr>`
    htm+=`<tr><td><b>School Name</b></td><td>${sch}</td></tr>`
    htm+=`<tr><td><b>Student Name</b></td><td>${title} ${std} ${nam} ${fn}</td></tr></table>`
    //table 3
    htm+=`<table cellspacing='0' width='600' border='1' bgcolor='#f8c291'>`
    htm+=`<tr><th><b>Subject Code</b></th><th><b>Subject Name</b></th><th><b>Minimum Marks</b></th><th><b>Maximum Marks</b></th><th><b>Marks Obtained</b></th><th><b>Remark</b></th></tr>`
    i=0
    showRemark()
    htm+=`<tr><td>20312</td><td>Physics</td><td>35</td><td>100</td><td>${pm}</td><td>${remark}</td></tr>`
    i=1
    showRemark()
    htm+=`<tr><td>32468</td><td>Chemistry</td><td>35</td><td>100</td><td>${cm}</td><td>${remark}</td></tr>`
    i=2
    showRemark()
    htm+=`<tr><td>42536</td><td>Maths</td><td>35</td><td>100</td><td>${mm}</td><td>${remark}</td></tr>`
    i=3
    showRemark()
    htm+=`<tr><td>52149</td><td>Hindi</td><td>35</td><td>100</td><td>${hm}</td><td>${remark}</td></tr>`
    i=4
    showRemark()
    htm+=`<tr><td>81234</td><td>English</td><td>35</td><td>100</td><td>${em}</td><td>${remark}</td></tr>`
    htm+=`<tr><td>Division</td><td>${division}</td><td>Percentage(${per}%)</td><td>Total Marks</td><td>${total}</td></tr></table>`
    marksheet.innerHTML=htm
}
