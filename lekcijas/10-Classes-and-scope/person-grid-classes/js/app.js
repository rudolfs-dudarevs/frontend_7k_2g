import { PersonCard } from "./components/PersonCard.js";

const apiURL = "https://randomuser.me/api/";
const submitBtn = document.getElementById("submit-btn");
const personGrid = document.getElementById("person-grid");

const genderInput = document.getElementById("gender");
const resultsInput = document.getElementById("results");
const nationalityInput = document.getElementById("nationality");


const fetchPersonData = () => {
    const url = new URL(apiURL);

    const queryParams = {
        gender: genderInput.value,
        results: resultsInput.value,
        nationality: nationalityInput.value
    }

    const searchParams = new URLSearchParams(queryParams).toString();
    url.search = searchParams;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            personGrid.innerHTML = "";

            data.results.forEach((person) => {
                const personCard = new PersonCard({
                    container: personGrid,
                    image: person.picture.large,
                    name: `${person.name.first} ${person.name.last}`,
                    nationality: person.nat,
                    email: person.email
                });
            })
        })
        .catch((error) => alert(error));
}

submitBtn.addEventListener("click", fetchPersonData);