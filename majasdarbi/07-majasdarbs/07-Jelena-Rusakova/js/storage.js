
window.onload = () => {
    let userName = localStorage.getItem("userName");
    let userSpeciality = localStorage.getItem("speciality");
    let userSkills = localStorage.getItem("skills");
    let userContacts = localStorage.getItem("contacts");

    let userNameOutput = document.getElementById("username");
    let specialityOutput = document.getElementById("speciality");
    let skillsOutput = document.getElementById("skills");
    let contactsOutput = document.getElementById("contacts");

       if(userName) {
        userNameOutput.innerHTML = `Username: ${userName}`;
    } else {
        localStorage.setItem("userName", "Student123");
    }

    if(userSpeciality) {
        specialityOutput.innerHTML = `Speciality: ${userSpeciality}`;
    } else {
        localStorage.setItem("speciality", "Frontend");
    }

    if(userSkills) {
         let skillsToDisplay = [];
         let parsedSkills = JSON.parse(userSkills);
         console.log(parsedSkills)

         parsedSkills.forEach((item) => {
            let itemAsString = `<li>${item}</li>`;
            skillsToDisplay.push(itemAsString);
        })

        skillsOutput.innerHTML = skillsToDisplay.join("");
    } else {
        let frontendSkills = ["JavaScript", "React", "CSS"];
        let skillsAsJSON = JSON.stringify(frontendSkills);
        localStorage.setItem("skills", skillsAsJSON);
    }

    if(userContacts) {
        let contactsToDisplay = [];
        let parsedContacts = JSON.parse(userContacts);
Object.keys(parsedContacts).forEach((key) => {
            let itemAsString = `<li>${key}: ${parsedContacts[key]}</li>`;
            contactsToDisplay.push(itemAsString);
        })

        contactsOutput.innerHTML = contactsToDisplay.join("");
    } else {
        let contacts = {
            email: "student123@gmail.com",
            tel: "20034593"
        }
        let contactsAsJSON = JSON.stringify(contacts);
        localStorage.setItem("contacts", contactsAsJSON);
    }
}
