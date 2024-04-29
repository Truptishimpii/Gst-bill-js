
     function gstbill(){

          price = document.getElementById("price").value;
          Gstb = document.getElementById("gst").value;
          Quantity = document.getElementById("qty").value;
          priceqty = document.getElementById("price-qty").value;
          Amount = document.getElementById("amt").value;
          finalanswer = document.getElementById("finalans").value;


          priceqty = price * Quantity;
          Amount = price * Gstb/100;
          finalanswer = priceqty + Amount;


          answer = document.getElementById("ans1");
          answer.innerHTML = priceqty;
          
          answer = document.getElementById("ans2");
          answer.innerHTML = Amount;

          answer = document.getElementById("ans3");
          answer.innerHTML = finalanswer; 

     }