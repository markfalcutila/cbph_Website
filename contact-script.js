function SendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        subject : document.getElementById("subject").value,
        email_id : document.getElementById("email").value,
        contact_no : document.getElementById("contactNo").value,
        message : document.getElementById("message").value,
    }

     emailjs.send("service_0qx0v25", "template_o4b72kq", params).then(function (res) {
        // alert("Success! " + res.status);
        this.showSuccessPopup();

    })

    console.log(params);


}

function showSuccessPopup() {
    console.log("pop")
    var popup = document.getElementById('success-popup');
    popup.classList.remove('popup-hidden');
  
    setTimeout(function() {
      popup.classList.add('popup-hidden');
    }, 3000); // Hide the popup after 3 seconds (adjust as needed)
  }

