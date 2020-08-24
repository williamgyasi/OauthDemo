const email="William@gmail.com"
const password="william123"

//FORM VALIDATOR
const validateForms=()=>{
    //EMAIL SELECTOR
    const email = document.forms["demo-forms"]["femail"].value

    console.log(email)
}

// document.getElementById("login").onclick=function(event){
//     validateForms()
// }

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    const container=document.querySelector(".container")
    if(profile){
        document.querySelector(".results").style.display="block"
        document.querySelector(".google-name").innerHTML=profile.getName()
        document.querySelector(".google-email").innerHTML=profile.getEmail()
        document.querySelector(".g-signin2").style.display="none"
        var img = document.createElement('img'); 
        img.setAttribute('src',profile.getImageUrl())
        container.append(img)
    }
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        location.reload()
      console.log('User signed out.');
    });
}