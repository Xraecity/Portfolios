document.addEventListener('DOMContentLoaded', function () {
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
     
      let fname = document.getElementById("fname");
      let lname = document.getElementById("lname");
      let email = document.getElementById("email");
      let phone = document.getElementById("phone");
      let address = document.getElementById("address");
      let city = document.getElementById("city");
      let state = document.getElementById("state");
      let country = document.getElementById("country");
      let zipcode = document.getElementById("zipcode");
      let gender = document.getElementsByName("gender");
      let agree = document.getElementById("agree");

      let fnerror_msg = document.getElementById("fnerror_msg");
      let lnerror_msg = document.getElementById("lnerror_msg");
      let emerror_msg = document.getElementById("emerror_msg");
      let pherror_msg = document.getElementById("pherror_msg");
      let adpherror_msg = document.getElementById("adpherror_msg");
      let cterror_msg = document.getElementById("cterror_msg");
      let sterror_msg = document.getElementById("sterror_msg");
      let zperror_msg = document.getElementById("zperror_msg");
      let cnerror_msg = document.getElementById("cnerror_msg");
      let agerror_msg = document.getElementById("agerror_msg");
      let generror_msg = document.getElementById("generror_msg");


      let validation = true;
//first name validation
      if(fname.value != ""){
          fnerror_msg.style.display = "none";
          validation;
      }else{
          fnerror_msg.style.display = "block";
          fname.focus();
      }

//last name validation  
      if(lname.value != ""){
          lnerror_msg.style.display = "none";
      }
      else{
          lnerror_msg.style.display = "block";
          lname.focus();
      }

//email validation
      if(email.value != ""){
          emerror_msg.setAttribute('style', 'display: none;');
      }else{
          emerror_msg.style.display = "block";
          email.focus();
      }

      function isValidEmail(email) {
          // Regular expression for a valid email address
          let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
          // Test the email against the pattern
          return emailPattern.test(email);
        }

    // Example usage:
      email.value;
      let invalid =  document.getElementById("invalid");
        if (isValidEmail(email)) {
        invalid.innerHTML = "Valid email address.";
        } else {
        invalid.innerHTML = "Invalid email address.";
        }

//phone validation        
      if(phone.value != ""){
          pherror_msg.setAttribute('style', 'display: none;');
      }else{
          pherror_msg.setAttribute('style', 'display: block;');
          phone.focus();
      }

// adddress    validation    
      if(address.value != ""){
          adpherror_msg.setAttribute('style', 'display: none;');
      }else{
          adpherror_msg.setAttribute('style', 'display: block;');
          address.focus();
      }

// city validation        
      if(city.value != ""){
          cterror_msg.setAttribute('style', 'display: none;');
      }else{
          cterror_msg.setAttribute('style', 'display: block;');
          city.focus();
      }

// state validation      
      if(state.value != ""){
          sterror_msg.setAttribute('style', 'display: none;');
      }else{
          sterror_msg.setAttribute('style', 'display: block;');
          state.focus();
      }

//    zipcode validation    
      if(zipcode.value != ""){
          zperror_msg.setAttribute('style', 'display: none;');
      }else{
          zperror_msg.setAttribute('style', 'display: block;');
          zipcode.focus();
      }

      // country validation       
        if(country.value != ""){
            cnerror_msg.setAttribute('style', 'display: none;');
        }else{
            cnerror_msg.setAttribute('style', 'display: block;');
            country.focus();
        }

  // Gender validation  
          let radioBtn = null; // assign a varible that will store the gender checked
          for(let i = 0; i < gender.length; i++){ //loop
              if(gender[i].checked){ // while looping, check if the variable holding gender id store array of i and found one checked 
                  radioBtn = gender[i]; // store the checked on the assign variable 
                  break; //exit the loop
              }
          }     
          if(radioBtn){
              generror_msg.setAttribute('style', 'display: none;');
          }else{
              generror_msg.setAttribute('style', 'display: block;');
          }
      
      //agreed validation
      
      if(!agree.checked){
          agerror_msg.setAttribute('style', 'display: block;');
      }else{
          agerror_msg.setAttribute('style', 'display: none;');

      }
  

    if(fname != "" &&
        lname != "" &&
        email != "" &&
        phone != "" &&
        address != "" &&
        city != "" &&
        state != "" &&
        zipcode != "" &&
        country != "" &&
        radioBtn != "" &&
        agree.checked){
        form.submit();
        }
    });
  
    // Update the UI with existing entries on page load
    updateEntriesUI();
  });
  