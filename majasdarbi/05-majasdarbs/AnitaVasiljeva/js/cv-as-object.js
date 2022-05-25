const anitaVasiljeva = {
    firstName: "Anita",
    familyName: "Vasiljeva",
    profession: "Maybe future Front-end developer",
    moto: "Moto: positive mindset brings positive things",
    contacts: {
        mobile: "+371 29196151",
        email: "anita.vas@icloud.com",
        linkedin: null
    },
    jobAreaSummary: "More than 20 years of experience and competence in Latvian language and culture related projects.",
    workExperience: [{
        projectName: "letonika.lv – education and reference resource",
        timeFrom: "05/2010",
        timeTo: "present",
        mainResponsibilities: ["product manager", "client education and needs research",
            "content development"
        ]
    },
    {
        projectName: "letonika.lv – education and reference resource",
        timeFrom: "05/2010",
        timeTo: "present",
        mainResponsibilities: ["product manager", "client needs research", "education activities",
            "content development"
        ],
        stillWorkingOnIt: true,
    },
    {
        projectName: "Virtual Aspazija&Rainis museum – arlugano.lv",
        timeFrom: "07/2013",
        timeTo: "10/2015",
        mainResponsibilities: ["concept group memeber", "project management", "content development"],
        stillWorkingOnIt: false,
    },
    {
        projectName: "CD 'History of Latvia', latvian and english versions",
        timeFrom: "02/1998",
        timeTo: "05/2005",
        mainResponsibilities: ["concept group memeber", "content development",
            "project coordination"
        ],
        stillWorkingOnIt: false,
    },
    ],
    education: [{
        establishmentName: "Latvia University",
        establishmentType: "university",
        educationLevel: "higher education (now Masters degree)",
        educationProgramm: "Applied mathematics",
        timeFrom: 1986,
        timeTo: 1991,
        finished: true,
    },
    {
        establishmentName: "Riga secondary school Nr 50",
        establishmentType: "secondary school",
        educationLevel: "secondary",
        educationProgramm: "English language specialization",
        timeFrom: 1975,
        timeTo: 1986,
        finished: true,
    }
    ],
    skills: [
        "talking :-), listening and communication", "analytic thinking and problem solving",
        "education activities",
        "management and team job"
    ],
    languages: [{
        language: "Latvian",
        level: "native"
    },
    {
        language: "English",
        level: "fluent"
    },
    {
        language: "Russian",
        level: "fluent"
    },
    {
        language: "HTML",
        level: "beginner"
    },
    {
        language: "CSS",
        level: "few code lines"
    },
    ],
    interests: {
        hobbies: ["tennis", "beach volleyball", "swimming", "traveling", "theater"],
        favourite_playlist: {
            playListName: "Garāžroks. 20 ievērojamas dziesmas",
            playListSongs: ["WildThing", "Tall Cool One", "Louie Louie", "Talk Talk", "Psycho"],
            playListSpotifyLink: "https://open.spotify.com/playlist/0sX2c1sTcSUc5iimuQgBIy?go=1&sp_cid=f81a4fd901371e2acd72b88835e46432&utm_source=embed_player_m&utm_medium=desktop&nd=1"
        },
    },
};

console.log(`This is CV for: ${anitaVasiljeva.firstName} ${anitaVasiljeva.familyName}`, anitaVasiljeva);
