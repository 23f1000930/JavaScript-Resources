function showDetails() {
  var foodname = food.options[food.selectedIndex].text
  var price= parseInt(food.options[food.selectedIndex].value)
  var qtysale=parseInt(qty.value)
  var amount=price*qtysale
  var dis=0
  if(amount>=1000)
  {
   dis=20
  }
  else if(amount>=500 && amount<=999)
  { dis=5}
 var disamount=amount*dis/100
 var netamount=amount-disamount 
 var htm=`<table cellspacing='0' width='20%' border='1'>`
 htm+=`<caption><b>Invoice/Bill<b></caption>`
 htm+=`<tr><th><img src='haldiram.png' width='100'></th></tr>`
 htm+=`<tr><th><img src='${foodname}.png' width='100'></th></tr></table>`

 htm+=`<table cellspacing='0' width='20%' border='1'>`
 htm+=`<tr><td><b>Name:</td><td>${foodname}</td></tr>`
 htm+=`<tr><td><b>Rate:</td><td>&#8377 ${price}</td></tr>`
 htm+=`<tr><td><b>Qty:</td><td>${qtysale}</td></tr>`
 htm+=`<tr><td><b>Amount:</td><td>&#8377 ${amount}</td></tr>`
 htm+=`<tr><td><b>Discount[${dis}%]:</td><td>&#8377 ${disamount}</td></tr>`
 htm+=`<tr><td><b>Net Amount:</td><td>&#8377 ${netamount}</td></tr></table>`
output.innerHTML=htm






}

function fillFood() {
  var i = category.selectedIndex;
  switch (i) {
    case 1:
      var ni = [
        ["Chola Bhatura", 120],
        ["Amritsari Naan", "200"],
        ["Samosa", 20],
       
      ];
      
      fillDD(ni);
      break;
    case 2:
      var si = [
        ["Masala Dosa", 80],
        ["Idli Sambhar", 100],
        ["Uttappam", 60],
          ];
      fillDD(si);
      break;
    
  }
}

function fillDD(arr) {
  removeOption();
  for (var i = 0; i < arr.length; i++) {
    var opt = document.createElement("option");
    opt.text = arr[i][0];
    opt.value = arr[i][1];
    food.add(opt);
  }
}
function removeOption() {
  for (var i = food.options.length - 1; i >= 1; i--) {
    food.remove(i);
  }
}
