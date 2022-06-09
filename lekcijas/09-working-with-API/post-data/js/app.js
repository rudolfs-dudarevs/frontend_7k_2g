// ar POST metodi serveris sapratīs, ka jāizveido jauns ieraksts datubāzē.
// POST, PUT un PATCH obligāti nepieciešams otrais parametrs funkcijā fetch() - request konfigurācijas objekts.
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: "Post title",
        body: "Post main content text.",
        userId: 1
    })
})

// ar PUT metdoi serveris sapratīs, ka nepieciešams mainīt esošu ierkastu bāzē. Bet konfoigurācijas objektā jānorāda visi ieraksta lauki, pat tie, kas netiek mainīti.
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: "PUT",
    body: JSON.stringify({
        title: "Updated post title",
        body: "Updated post main content text.",
        userId: 1
    })
})

// ar PATCH metodi serveris sapratīs, ka nepieciešams mainīt esošu ierakstu datubāzē - atšķirībā no PUT, varam nenorādīt visus ieraksta laukus, bet gan tikai maināmās vērtības.
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: "PATCH",
    body: JSON.stringify({
        title: "Updated post title"
    })
})

// ar DELETE metodi atliek vai nu URL vai konfigurācijas objektā norādīt ieraksta datubāzes ID, lai to dzēstu.
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: "DELETE",
})






























// const apiURL = "https://randomuser.me/api/?gender=male&natio";
// const submitBtn = document.getElementById("submit-btn");
// const genderInput = document.getElementById("gender");
// const nationalityInput = document.getElementById("nationality");
// const resultsInput = document.getElementById("results");
// const personGrid = document.getElementById("person-grid");

// const createPersonCard = () => {
//     const personCard = document.createElement("div");
//     personCard.classList.add("person-card");

//     return personCard
// }

// const createImg = (userData) => {
//     const img = document.createElement("img");
//     img.src = userData.picture.large;
//     img.classList.add("person-image");

//     return img
// }

// const createFullName = (userData) => {
//     const fullName = document.createElement("p");
//     fullName.innerText = `${userData.name.first} ${userData.name.last}`;
//     fullName.classList.add("person-name");

//     return fullName
// }

// const createNationality = (userData) => {
//     const nationality = document.createElement("p");
//     nationality.innerText = `Nationality: ${userData.nat}`;
//     nationality.classList.add("person-nationality");

//     return nationality
// }

// const createEamil = (userData) => {
//     const email = document.createElement("a");
//     email.href = `mailto:${userData.email}`;
//     email.innerText = userData.email;
//     email.classList.add("person-email");

//     return email
// }

// const renderUserData = (userData) => {
//     const personCard = createPersonCard()
//     const img = createImg(userData);
//     const fullName = createFullName(userData);
//     const nationality = createNationality(userData);
//     const email = createEamil(userData);
    
//     personGrid.append(personCard);
//     personCard.append(img);
//     personCard.append(fullName);
//     personCard.append(nationality);
//     personCard.append(email);
// }

// const fetchPersonData = () => {
//     const url = new URL(apiURL);
    
//     const queryParms = {
//         gender: genderInput.value,
//         nationality: nationalityInput.value,
//         results: resultsInput.value
//     }

//     const searchParams = new URLSearchParams(queryParms).toString();
//     url.search = searchParams;

//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             data.results.forEach((userData) => {
//                 renderUserData(userData);
//             });
//         })
// }

// submitBtn.addEventListener("click", fetchPersonData);