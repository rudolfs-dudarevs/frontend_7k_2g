// local storage
window.onload = () => {
    // iegūt ierakstus no local storage pēc to nosaukuma ar .getItem() metodi
    let userName = localStorage.getItem("userName");
    let userSpeciality = localStorage.getItem("speciality");
    let userSkills = localStorage.getItem("skills");
    let userContacts = localStorage.getItem("contacts");

    let userNameOutput = document.getElementById("username");
    let specialityOutput = document.getElementById("speciality");
    let skillsOutput = document.getElementById("skills");
    let contactsOutput = document.getElementById("contacts");

    // veikt pārbaudi, ja userName ieraksts ir atrasts local storage - iestatīt tā vērtību kā .innerHTML un attēlot lietotājam
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
         // tā kā viss local un session storage tiek saglabāts kā JSON, nepieciešams to pārvērst no JSON uz objektu
         let parsedSkills = JSON.parse(userSkills);
         console.log(parsedSkills)

         parsedSkills.forEach((item) => {
            let itemAsString = `<li>${item}</li>`;
            skillsToDisplay.push(itemAsString);
        })

        skillsOutput.innerHTML = skillsToDisplay.join("");
    } else {
        let frontendSkills = ["JavaScript", "React", "CSS"];
        // tā kā local storage viss tiek saglabāts kā string, objektus un masīvus nebūs iespējams izmantot kā objektus,
        // kad gribēsim tos iegūt no local storage
        // tāpēc pārvēršam šos objektus vispirms par JSON un tad saglabājam local storage
        let skillsAsJSON = JSON.stringify(frontendSkills);
        localStorage.setItem("skills", skillsAsJSON);
    }

    if(userContacts) {
        let contactsToDisplay = [];
        let parsedContacts = JSON.parse(userContacts);

        // varam iterēt cau jebkura objekta īpašību nosaukiem izmantojot Object.keys() metodi, kurā kā parametru norādām
        // objektu, kura īpašībām vēlamies iterēt cauri
        // šī metode atgriezīs masīvu uz kura savukārt varam izmantot .forEach() metodi
        // kā parametrus for each iegūsim objekta īpasības nosaukumu
        Object.keys(parsedContacts).forEach((key) => {
            // vēl viens veids kā piekļūt objekta īpašībām ir sintaktiski līdzīgs masīva veidam
            // tomēr šeit norādām nevis indeksu, bet gan īpašības nosaukumu - key
            // parsedContacts[key] piekļūstam objekta īpašībai pēc tās nosaukuma
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

// sesion storage
// window.onload = () => {
//     let userName = sessionStorage.getItem("userName");
//     let userSpeciality = sessionStorage.getItem("speciality");
//     let userSkills = sessionStorage.getItem("skills");
//     let userContacts = sessionStorage.getItem("contacts");

//     let userNameOutput = document.getElementById("username");
//     let specialityOutput = document.getElementById("speciality");
//     let skillsOutput = document.getElementById("skills");
//     let contactsOutput = document.getElementById("contacts");

//     if(userName) {
//         userNameOutput.innerHTML = `Username: ${userName}`;
//     } else {
//         sessionStorage.setItem("userName", "Student123");
//     }

//     if(userSpeciality) {
//         specialityOutput.innerHTML = `Speciality: ${userSpeciality}`;
//     } else {
//         sessionStorage.setItem("speciality", "Frontend");
//     }

//     if(userSkills) {
//          let skillsToDisplay = [];
//          let parsedSkills = JSON.parse(userSkills);
//          console.log(parsedSkills)

//          parsedSkills.forEach((item) => {
//             let itemAsString = `<li>${item}</li>`;
//             skillsToDisplay.push(itemAsString);
//         })

//         skillsOutput.innerHTML = skillsToDisplay.join("");
//     } else {
//         let frontendSkills = ["JavaScript", "React", "CSS"];
//         let skillsAsJSON = JSON.stringify(frontendSkills);
//         sessionStorage.setItem("skills", skillsAsJSON);
//     }

//     if(userContacts) {
//         let contactsToDisplay = [];
//         let parsedContacts = JSON.parse(userContacts);

//         Object.keys(parsedContacts).forEach((key) => {
//             let itemAsString = `<li>${key}: ${parsedContacts[key]}</li>`;
//             contactsToDisplay.push(itemAsString);
//         })

//         contactsOutput.innerHTML = contactsToDisplay.join("");
//     } else {
//         let contacts = {
//             email: "student123@gmail.com",
//             tel: "20034593"
//         }
//         let contactsAsJSON = JSON.stringify(contacts);
//         sessionStorage.setItem("contacts", contactsAsJSON);
//     }
// }