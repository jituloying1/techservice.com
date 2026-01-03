function openBooking(){
 document.getElementById("bookingPopup").style.display="block";
}
function closeBooking(){
 document.getElementById("bookingPopup").style.display="none";
}

function saveData(){
 let preview = `
 <h3>Preview</h3>
 Name: ${fname.value}<br>
 Website: ${webname.value}<br>
 Type: ${websiteType.value}<br>
 Mobile: ${mobile.value}<br>
 Email: ${email.value}
 <br><input type='checkbox' onchange="enableCaptcha()"> I confirm
 `;
 document.getElementById("previewBox").innerHTML = preview;
}

function enableCaptcha(){
 document.getElementById("captchaBox").style.display="block";
}

function submitData(){
 if(document.getElementById("captcha").value !== "LOYING"){
   alert("Wrong Character");
   return;
 }
 document.getElementById("paymentBox").style.display="block";
 sendToSheet();
}

function showUPI(){
 let box=document.getElementById("upiBox");
 box.innerHTML = `
 <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=jituloying1947@axl&am=500">
 <p>UPI ID: jituloying1947@axl</p>
 <p>Visible for 2 minutes</p>
 <button onclick="showUPI()">Re-generate</button>
 `;
 setTimeout(()=>box.innerHTML="",120000);
}

function showCard(){
 alert("Card payment gateway integration required");
}
function showBank(){
 alert("Account No: 923010031325140");
}

function sendToSheet(){
 fetch("YOUR_APPS_SCRIPT_URL",{
 method:"POST",
 body:JSON.stringify({
  name:fname.value,
  mobile:mobile.value,
  email:email.value,
  website:webname.value
 })
});
}
