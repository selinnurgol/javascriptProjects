const { UI } = require("winjs");

const searchProfile=documen.querySelector('#searcProfile');

searchProfile.addEventListener('keyup',(Event)) => {
    let text = event.target.value;
     
    if(text!== ' '){
        searchProfile.getProfile(text)
        .then(res => {
            if(res.profile.length === 0){
                UI.
            }
        }
    }

    Event.target.value;

}



