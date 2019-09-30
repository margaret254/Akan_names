// Function to refresh the form after submission
function formRefresh(){
  document.getElementById("form_data").reset();
}

// Event function on button
function akanNames(){

  var birthDate=document.getElementById("birthdate").value;
  var dateEntered= birthDate.split("-");
  var day=parseInt(dateEntered[2]);
  var month=parseInt(dateEntered[1]);
  var year=parseInt(dateEntered[0]);

  //Century calculation
  var century=(year)/100; 
  var dayOfTheWeek = ( century/4 -2*century-1 + 5*year/4  + 26*(month+1)/10 + day ) % 7;
      
  document.getElementById("display").innerHTML=Math.round(dayOfTheWeek);
  var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  var maleNames=["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var gender=document.getElementById("gender").value;
  var daysOfWeek=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var dOfWeek = Math.round(dayOfTheWeek)

  //form validation and output
  if(!isNaN(dOfWeek)){
      if(gender=="Male"){
          document.getElementById("display").innerHTML= "Your were born on " + daysOfWeek[dOfWeek] +" and Your akan name is  "+ maleNames[Math.round(dayOfTheWeek)]
      }
      else if(gender==="Female"){
          document.getElementById("display").innerHTML="You were born on " +daysOfWeek[dOfWeek]+ " and Your akan name is " + femaleNames[Math.round(dayOfTheWeek)];
      }else{
          alert("Choose your gender");
          document.getElementById("display").innerHTML="";
      }
  }
          else{
              alert("Enter valid birthdates");
              document.getElementById("display").innerHTML="";
          }
  
  
  //call to the reFresh function
  formRefresh();
}