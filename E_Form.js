let saveFile = () => {

    const eID = document.getElementsByID("eID");
    const eName = document.getElementsByID("eName");
    const ePhno = document.getElementsByID("ePhno");
    const eSkills = document.getElementsByID("eSkills");
    const email = document.getElementsByID("email");
    const area = document.getElementsByID("area");
    const city = document.getElementsByID("city");
    const state = document.getElementsByID("state");
    const country = document.getElementsByID("country");
    const gender = document.getElementsByID("gender");
    
    let data = "\r ID: " + eID.value + " \r\n " + "eName: " + eName.value + " \r\n " +
    "ePhno: " + ePhno.value + " \r\n " +"eSkills: " + eSkills.value + " \r\n " +"email: " + email.value + " \r\n " +
     "area: " + area.value + " \r\n " +"city: " + city.value + " \r\n " +"state: " + state.value + " \r\n " +
      "Country: " + country.value + " \r\n " + "gender: " + gender.value ;


const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'E://register.txt';	

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }