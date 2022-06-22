let savedNickName;
let greetMessage;
let playerScore;
let area = 0;
let population = 0;
let gini = 0;
let respAnswer = 0;
let question = 1;
let country1;
let country2;
let score;
let pointsEarned = 0;

const getCountries = () => {

    // valstu dati tiks ņemti no Rest Countries API v3 https://restcountries.com/v3

    //XMLHttpRequest (XHR) objects are used to interact with servers. 
    let xhr = new XMLHttpRequest();

    //open inicializē datu pieprasījumu - restcountries atvērtajam servisam
    xhr.open("GET", "https://restcountries.com/v3.1/all")

    //send veic asinhronu datu pieprasīšanu
    xhr.send();

    //onload nostrādā, kad dati ir atnākuši
    xhr.onload = () => {
        let allData = JSON.parse(xhr.response)

        console.log(typeof (allData))

        //atasīsim tikai tās valstis, kurām ir dati mūs interesējošos laukos
        quizCountries = allData.filter((country) => {
            if (country.name.common &&
                country.subregion &&
                country.population &&
                country.area &&
                country.gini &&
                country.maps &&
                country.capital &&
                country.coatOfArms.svg) {
                return allData
            }
        });
        console.log(quizCountries.length);

        //pārbāudām, cik tādas valstis mums atgrieza
        console.log(quizCountries.length);

        //paskatāmies Latvijas datus - lai saprastu, vai sintakse meklētajiem key-value pāriem ir korekta
        // let vienaValsts = quizCountries.filter((country) => (country.name.common === 'Latvia'))
        // console.log(vienaValsts.length);
        // let answer = vienaValsts[0];
        // console.log(answer);
        // console.log('Reģions: ', answer.subregion);
        // console.log('parastsNosaukums: ', answer.name.common)
        // console.log('nosaukums: ', answer.altSpellings[answer.altSpellings.length - 1]);
        // console.log('platība: ', answer.area);
        // console.log('iedzīvotāji: ', answer.population);
        // console.log('valodas: ', Object.keys(answer.languages).length);
        // console.log('robežvalstis: ', answer.borders.length);
        // console.log('Džini: ', Object.values(answer.gini)[0]);
        // console.log('karte: ', Object.values(answer.maps)[0]);
        // console.log('ģerbonis: ', answer.coatOfArms.svg);
        // console.log('galvaspilsēta: ', answer.capital[0]);

        //Quiz nolūkiem atlasām 2 nejaušas valstis
        let index1 = Math.floor(Math.random() * quizCountries.length);
        let index2 = Math.floor(Math.random() * quizCountries.length);
        while (index1 === index2) {
            index2 = Math.floor(Math.random() * quizCountries.length);
        }
        country1 = quizCountries[index1];
        renderCountryData(country1, 1);

        country2 = quizCountries[index2];
        renderCountryData(country2, 2);
        playGame();

    }

}




// izmantojam onload notikumu, lai sagaidītu līdz DOM ir ielādēts 
window.onload = () => {

    // piešķiram globālajiem mainīgajiem vērtības, kas būs DOM atrastie HTML elementi
    nickNameInputBlock = document.getElementById("playerID");
    nickNameInput = document.getElementById("nickNameInput");
    goBtn = document.getElementById('goBtn');
    playerGreeting = document.getElementById("playerGreeting");
    greetPlayer = document.getElementById("greetPlayer");
    playerScore = document.getElementById("playerScore");
    let playerArray = [];
    playerArray[1] = document.getElementById("player1Name").innerText;
    playerArray[2] = document.getElementById("player2Name").innerText;
    playerArray[3] = document.getElementById("player3Name").innerText;
    playerArray[4] = document.getElementById("player4Name").innerText;
    playerArray[5] = document.getElementById("player5Name").innerText;
    playerArray[6] = document.getElementById("player1Score").innerText;
    playerArray[7] = document.getElementById("player2Score").innerText;
    playerArray[8] = document.getElementById("player3Score").innerText;
    playerArray[9] = document.getElementById("player4Score").innerText;
    playerArray[10] = document.getElementById("player5Score").innerText;

    console.log('doks', playerArray[1]);
    console.log('doks2', playerArray[10]);
    countryGrid = document.getElementById("country-grid");



    // pārabaudām, vai spēlētājs jau ir vienreiz ievadījis savu nickname
    savedNickName = JSON.parse(localStorage.getItem('savedNickName'));
    if (savedNickName) {
        showGreeting(`Welcome back, ${savedNickName}!`);
    }
    else {
        nickNameInputBlock.style.display = 'block';
    };
    // pārabaudām, vai lokāli ir saglabāts spēlētāju tops
    savedPlayer1Name = JSON.parse(localStorage.getItem('player1Name'));

    // ja  spēlētāju tops nav atrasts (nav local storage), ieliek tur sākotnējo tabulu
    if (!savedPlayer1Name) {
        for (let i = 1; i < 6; i++) {
            let pName = `player${i}Name`;
            let pScore = `player${i}Score`;

            localStorage.setItem(pName, JSON.stringify(playerArray[i]));
            localStorage.setItem(pScore, JSON.stringify(playerArray[i + 5]));
        }
    }
    else {
        for (let i = 1; i < 6; i++) {
            let pName = JSON.parse(localStorage.getItem(`player${i}Name`));
            let pScore = JSON.parse(localStorage.getItem(`player${i}Score`));
            document.getElementById(`player${i}Name`).innerText = pName;
            document.getElementById(`player${i}Score`).innerText = pScore;
        }
    }

    // pievienojam  pogai klausītāju uz klikšķi.
    goBtn.addEventListener('click', addNickName);

    // pievienojam opciju ievadīt nickname arī ar Enter taustiņa nospiešanas notikumu nickName ievadlaukā
    nickNameInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addNickName()
        }
    });
}

const addNickName = () => {
    //ja tukšs lauks, neļaujam tādu nickName saglabāt
    if (!nickNameInput.value) {
        alert('Your nickname should contain at least one symbol!');
        return;
    }
    else
    // saglabā nickname lokālajā glabātuvē
    {
        localStorage.setItem('savedNickName', JSON.stringify(nickNameInput.value));
        localStorage.setItem('savedScore', JSON.stringify('0'));
        showGreeting(`Start playing, ${nickNameInput.value}!`);
    }
}

const showGreeting = (message) => {
    //sveicinām lietotāju un paslēpjam nickname ievadlauku
    nickNameInputBlock.style.display = 'none';
    greetPlayer.innerText = message;
    playerScore.innerText = JSON.parse(localStorage.getItem('savedScore'));
    playerGreeting.style.display = 'block';
    playerTable.style.display = 'block';
    getCountries();
}

//funkcija saglabās spēles leaderboard sarakstu lokālajā atmiņā
const saveLeaderBoard = () => {
    // saglabā rezultātus
}

// funkcija, lai izveidotu un atgrieztu html elementu valsts konteinerim

const createCountryCard = () => {
    const countryContainer = document.createElement("div");
    // izveidotajam elementam pievienojam CSS klasi, lai varētu to nofromēt.
    countryContainer.classList.add("country-card");
    return countryContainer
}

// funkcija, lai izveidotu un atgrieztu valsts ģerboņa attēlu
const createImg = (data, index) => {
    const imgEl = document.createElement("img");

    imgEl.src = data.coatOfArms.svg;
    imgEl.classList.add("country-image");
    imgEl.id = index;
    imgEl.addEventListener("click", function (event) {
        console.log("start to click", respAnswer);
        respAnswer = event.target.id;
        console.log("clicked", respAnswer);
        checkAnswer();
    });
    return imgEl
}

// funkcija, lai izveidotu un atgrieztu valsts kartītes nosaukumu
const createCountryName = (data) => {

    const countryNameEl = document.createElement("p");
    countryNameEl.classList.add("country-name");
    countryNameEl.innerHTML = data.name.common;
    return countryNameEl
}


// funkcija, lai izveidotu un atgrieztu valsts kartītes reģionu un galvaspilsētu
const createCountryDetails = (data) => {
    const detailsEl = document.createElement("p");
    detailsEl.classList.add("country-details");
    detailsEl.innerHTML = `Region: ${data.subregion}`;
    detailsEl.innerHTML += "<br>";
    detailsEl.innerHTML += `Capital: ${data.capital}`;
    return detailsEl
}


// funkcija, lai izveidotu un atgrieztu valsts kartītes reģionu un galvaspilsētu
const createCountryQuizAnswers = (country) => {
    const quizEl = document.createElement("p");
    quizEl.classList.add("country-quiz");
    quizEl.innerHTML = `Area (sq km): ${country.area}`;
    quizEl.innerHTML += "<br>";
    quizEl.innerHTML += `Population: ${country.population}`;
    quizEl.innerHTML += "<br>";
    quizEl.innerHTML += `GINI index: ${Object.values(country.gini)[0]}`;
    return quizEl
}

// funkcija, lai izveidotu saiti uz kartes datiem
const createCountryMap = (data) => {
    const mapEl = document.createElement("p");
    mapEl.classList.add("country-map");
    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', Object.values(data.maps)[0]);
    anchorTag.innerHTML = `${data.name.common} in a map`;
    mapEl.appendChild(anchorTag);
    return mapEl
}


// funkcija, lai apvienotu visus izveidotos HTML elementus
// funckija tiks izsaukta divām nejauši izvēlētām valstīm un tiks uztaisītas divas kart1ītes.
const renderCountryData = (data, index) => {
    // izmantojot iepriekš definētās funkcijas elementu izveidei,
    // saglabājam to atgrieztos rezultātus jeb HTML elementus iekš mainīgajiem.
    const countryCard = createCountryCard();
    const img = createImg(data, index)
    const countryName = createCountryName(data);
    const countryDetails = createCountryDetails(data);
    const countryMap = createCountryMap(data);

    // kad esam izveidojuši attiecīgās kartītes visus nepieciešamos elementus,
    // pievienojam tos countryCard elementam.
    countryCard.append(img);
    countryCard.append(countryName);
    countryCard.append(countryDetails);
    countryCard.append(countryMap);
    countryCard.id = `Card${index}`;



    // attēlojam lietotājam
    countryGrid.append(countryCard);


}

const playGame = () => {
    score = parseInt(JSON.parse(localStorage.getItem('savedScore')));
    console.log(score);
    console.log(country1.area, ' vs  ', country2.area);
    console.log(country1.population, ' vs  ', country2.population);
    console.log((Object.values(country1.gini)[0]), ' vs  ', Object.values(country2.gini)[0]);
    if (area === 0) {
        alert('Tap on the country with larger area!');

    }

}

checkAnswer = () => {
    console.log(respAnswer);
    console.log(question);
    switch (question) {
        case 1:
            question = 2;
            if (((respAnswer === "1") && (country1.area >= country2.area)) || ((respAnswer === "2") && (country2.area >= country1.area))) {
                alert("way to go!");
                score += 10;
                pointsEarned += 10;
            }
            else {
                alert("no way!");
                score -= 5;
                pointsEarned -= 5;

            }
            alert('Tap on the country with bigger population!');
            break;
        case 2:
            question = 3;
            if ((respAnswer === "1" && country1.population >= country2.population) || (respAnswer === "2" && country2.population >= country1.population)) {
                alert("That's correct!");
                score += 10;
                pointsEarned += 10;
            }
            else {
                alert("Not this time!");
                score -= 5;
                pointsEarned -= 5;

            }
            alert('Tap on the country with higher GINI (unequality) index!');
            break;
            (Object.values(country1.gini)[0])
        case 3:
            if ((respAnswer === "1" && Object.values(country1.gini)[0] >= Object.values(country2.gini)[0]) || (respAnswer === "2" && Object.values(country2.gini)[0] >= Object.values(country1.gini)[0])) {
                alert("You new it!");
                score += 10;
                pointsEarned += 10;
            }
            else {
                alert("Not excatly!");
                score -= 5;
                pointsEarned -= 5;

            }
            //parāda info
            let country111 = document.getElementById("Card1");
            country111.append(createCountryQuizAnswers(country1));
            let country222 = document.getElementById("Card2");
            country222.append(createCountryQuizAnswers(country2));
            localStorage.setItem('savedScore', JSON.stringify(score));

            alert(`You earned ${pointsEarned} points. Your score now is ${score}. Look at the info, reload page and try again :-)`);
            break;
        default:
            alert(`hmmm, smth went wrong`);

    }

};



// endBtn.onclick = () =>
// {
// startBtn.style.display = 'none';
// endBtn.style.display = 'none';
// quotePlace.innerText='Atā!'
// output.style.display = 'none';
// }





