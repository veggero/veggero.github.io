const infos = {
    "home": [
        "nerd(",
        "   propic: img(link: 'assets/images/avatar.jpg')",
        "   bio: (",
        "       name: «Niccolo Venerandi»",
        "       age: num(19) // todo put 20 here on 7/6/21",
        "       mail: link(to: 'mailto:niccolo@venerandi.com', text: 'mail.niccolo.venerandi')",
        "       skills: collapsed(name: 'skills', preview: 'all the things that I kinda know how to do')",
        "   )",
        "   my activities: (",
        "       projects: collapsed(name: 'projects', preview: 'all the things that I am kinda working on')",
        "       blog: link(to: 'https://write.as/niccolove', text: 'writeas.niccolove')",
        "   )",
        "   donations: ({donate}link(to: 'https://liberapay.com/niccolove', text: 'liberapay')[], {donate}link(to: 'https://paypal.me/niccolove', text: 'paypal')[], {donate}link(to: 'https://patreon.com/niccolove', text: 'patreon')[])",
        ") // todo insert some funny punchline here"
    ], 
    "skills": [
        "veggero.skills: (",
        "	",
        "	back: collapsed(name: 'home')",
        "	",
        "	// MY FAV STUFF:",
        "	",
        "	information technology: (",
        "		grades: (2016: num(10)/num(10), 2017: num(9)/num(10), 2019: num(10)/num(10))",
        "		python: (",
        "			used since: date(year: num(2016))",
        "			examples: (",
        "				link(to: 'https://github.com/veggero/nylo', text: 'github.veggero.nylo')",
        "				link(to: 'https://github.com/veggero/fyct', text: 'github.veggero.fyct')",
        "				link(to: 'https://github.com/veggero/tytg', text: 'github.veggero.tytg')",
        "			)",
        "			readings: (book(",
        "				title: «Programming in Python»",
        "				author: «Marco Buttu»",
        "			))",
        "			experiences: (",
        "				event(name: «Attended Pycon 9»)",
        "				event(name: «Used while working @ CNR»)",
        "				event(name: «Held a talk @ CNR»)",
        "				event(name: «Should've held a talk @ Pycon 11»)",
        "				// ^(fuck 'orona)",
        "				event(name: «Used @ Hackatons»)",
        "			)",
        "		)",
        "		programming languages: (",
        "			readings: (book(",
        "				title: «Programming Languages»",
        "				authors: («Davide Ancona», ...)",
        "			), book(",
        "				title: «Programming in Haskell»",
        "				author: «Graham Hutton»",
        "			), book(",
        "				title: «C Pocket»",
        "				author: «Enrico Amedeo»",
        "			), book(",
        "				title: «C++ Essential guide for programmers»",
        "				author: «Bjarne Stroustrup»",
        "			), book(",
        "				title: «Foundations of Common Lisps»",
        "				authors: («Roberto Farabone», ...)",
        "			), book(",
        "				title: «The Reasoned Schemer» // thx cm",
        "				authors: («Daniel P. Friedman», ...)",
        "			), book(",
        "				title: «Clean Architecture»",
        "				author: «Robert C. Martin»",
        "			))",
        "			experiences: (",
        "				olympic(organizer: «School», position: 2),",
        "				event(name: «Attended school's class about C»)*2,",
        "				event(name: «Bocconi University's class about C»),",
        "			)",
        "		)",
        "		operating systems: (",
        "			readings: (book(",
        "				title: «Modern Operating Systems»",
        "				authors: («Andrew S. Tanenbaum», ...)",
        "			), book( // this one's boooring:",
        "				title: «Computer Architecture and Design»",
        "				author: «A. J. Van De Goor»",
        "			), book(",
        "				title: «Linux»",
        "				author: «Scott Granneman»",
        "			))",
        "			experiences: (",
        "				event(name: «Used VPS w/ tytg»),",
        "				event(name: «VPS taught while working @ CNR»)",
        "			)",
        "		)",
        "		kde dev: (",
        "			experiences: (",
        "				event(name: «Attended Akademy», year: num(2019))",
        "				event(name: «Held talk @ Akademy», year: num(2020))",
        "			)",
        "			proposed goals: (",
        "				consistency: link(to: 'https://phabricator.kde.org/T11093', text: 'kde.tasks.T11093')",
        "			)",
        "			videos: link(to: 'https://www.youtube.com/channel/UCONH73CdRXUjlh3-DdLGCPw', text: 'youtube.niccolove')",
        "			account: link(to: 'https://invent.kde.org/niccolove/', text: 'kde.invent.niccolove')",
        "		)",
        "		web dev: (",
        "			examples: (link(to: 'https://niccolo.venerandi.com', text: 'niccolo.venerandi.com'))",
        "			readings: (book(",
        "				title: «CSS»",
        "				author: «Gianluca Troiani»",
        "			))",
        "		)",
        "	)",
        "	",
        "	poetry: (",
        "		experiences: (",
        "			event(name: «Banano Slam», year: num(2020))",
        "			event(name: «Sòn Sempre Solo Slam», year: num(2021))",
        "		),",
        "		examples: (",
        "			link(to: 'https://instagram.com/veggero', text: 'instagram.veggero'),",
        "			link(to: 'poetry.html', text: 'veggero.projects.poetry')",
        "		)",
        "	)",
        "	",
        "	debates and voting: (",
        "		global politics: (",
        "			grades: (2018: num(5)/num(7))",
        "			readings: (book(",
        "				title: «Global Politics, a new introdution»",
        "				editors: («Jenny Edkins», «Maja Zehfuss»)",
        "			), book( // loved this one",
        "				title: «Against Democracy»",
        "				author: «Jason Brennan»",
        "			))",
        "		)",
        "		experiences: (",
        "			olympic(organizer: «Regional Debate», position: num(1))",
        "			olympic(organizer: «National Debate», position: num(21)/num(72))",
        "			event(name: «Debate club», year: num(2018))",
        "			pon(name: «Debate», year: num(2019))",
        "		)",
        "		elected: (",
        "			representative(of: «class», year: num(2017)) // I sucked",
        "			representative(of: «school», year: num(2019)) // I did well",
        "		)",
        "	)",
        "	math: (",
        "		courses: (",
        "			course(name: «Algebra 1», grade: 31) // 31 = 30 e lode",
        "		)",
        "		high school grades: (2016: num(8)/num(10), 2017: num(8)/num(10), 2018: num(7)/num(7), 2019: num(9)/num(10))",
        "		experiences: (",
        "            university(subject: «Mathematics», start year: num(2020))",
        "			olympic(organizer: «School», position: num(1)),",
        "			olympic(organizer: «Region», position: num(9))",
        "		)",
        "	)",
        "	",
        "	// GENERIC SCHOOL SUBJECTS:",
        "	",
        "	english: (",
        "		grades: (2016: num(9)/num(10), 2017: num(9)/num(10), 2018: num(7)/num(7), 2019: num(8)/num(10))",
        "		certifications: (cambridge.pet)",
        "		experiences: (",
        "			event(name: «Week in English family»),",
        "			event(name: «Year in international school») // <3",
        "		)",
        "	)",
        "	italian: (",
        "		grades: (2016: num(8)/num(10), 2017: num(7)/num(10), 2018: num(4)/num(7), 2019: num(7)/num(10))",
        "		readings: (book(",
        "			title: «Principe»",
        "			author: «Niccolò Macchiavelli»",
        "		)) & link(to: 'backstage/files/Library.ods', text: '(...)')",
        "	)",
        "	science: (",
        "		grades: (2016: num(8)/num(10), 2017: num(8)/num(10), 2019: num(7)/num(10))",
        "		experiences: (event(name: «Worked at Biophysics week»))",
        "	)",
        "	grades: (",
        "		physics: (2016: num(6)/num(10), 2017: num(7)/num(10), 2018: num(7)/num(7), 2019: num(7)/num(10))",
        "		art:     (2016: num(6)/num(10), 2017: num(7)/num(10), 2019: num(7)/num(10))",
        "		sport:   (2016: num(7)/num(10), 2017: num(7)/num(10), 2019: num(6)/num(10))",
        "		history: (2016: num(7)/num(10), 2017: num(8)/num(10), 2019: num(7)/num(10))",
        "		philosophy: (2017: num(9)/num(10), 2019: num(9)/num(10))",
        "		design: (2018: num(6)/num(7))",
        "		theory of knowledge: (2018: num(4)/num(5))",
        "		final: num(92)/num(100)",
        "	)",
        "	",
        "	// GENERIC SKILLS:",
        "	",
        "	dealing with children: (",
        "		experiences: (",
        "			event(name: «Had a blog about teaching coding»),",
        "			event(name: «Taught coding to many different children»),",
        "			event(name: «Taught binary to many 8-12yo»),",
        "			// ^ this is a cool story, ask me about it",
        "			mentor(place: «Italian Science Festival»),",
        "			mentor(place: «Boy Scouts»),",
        "			mentor(place: «School's coding events»)",
        "		)",
        "	),",
        "	scratch: (",
        "		using since: date(year: num(2012))",
        "		examples: (",
        "			link(to: 'https://scratch.mit.edu/projects/92169 355/', text: 'scratch.veggero.F9Simulator')",
        "			link(to: 'https://scratch.mit.edu/projects/105792191/', text: 'scratch.veggero.marsx')",
        "			link(to: 'https://scratch.mit.edu/projects/6 3932568/', text: 'scratch.veggero.3DAS')",
        "			link(to: 'https://scratch.mit.edu/projects/22821242/', text: 'scratch.veggero.ZombieAdv')",
        "		)",
        "		experiences: (",
        "			event(name: «Attended Many Coderdojos»),",
        "			event(name: «Won 3rd place @ Italian Scratch Festival»),",
        "			event(name: «Used @ Space Apps Challenge»),",
        "		)",
        "	),",
        "	neural networks: (",
        "		examples: (link(to: 'https://scratch.mit.edu/projects/154809159/', text: 'scratch.veggero.NNFarmer'))",
        "		experiences: (",
        "			event(name: «Used for ESA Astro Pi Challenge»),",
        "			event(name: «Made Edu project for Scratch Festival»),",
        "			event(name: «Used while working @ CNR»),",
        "		)",
        "	),",
        "	telegram bots: (",
        "		examples: (link(to: 'https://giuthub.com/veggero/tytg', text: 'github.veggero.tytg'))",
        "	)",
        ")"
    ],
    "projects": [
        "veggero.projects.nerd: (",
        "	",
        "	back: collapsed(name: 'home')",
        "	",
        "	nylo: project(",
        "		type: «Declarative Programming Language»",
        "		status: «Work in Progress»",
        "		repo: link(to: 'https://github.com/veggero/nylo', text: '(...)')",
        "	)",
        "	tytg: project(",
        "		type: «Telegram Bots Maker»",
        "		status: «Stopped»",
        "		pypi: link(to: 'https://pypi.org/project/tytg/', text: '(...)')",
        "		repo: link(to: 'https://github.com/veggero/tytg', text: '(...)')",
        "	)",
        "	fyct: project(",
        "		type: «Interactive Fiction 20th Century Edition»",
        "		status: «Work in Progress»",
        "		repo: link(to: 'https://github.com/veggero/fyct', text: '(...)')",
        "	)",
        ")"
    ]
}

const parseReplacements = [
    {
        'start': 'link(to: ', 'new_start': '<a href=',
        'middle': ", text: '", 'new_middle': '>',
        'end': "')", 'new_end': '</a>'
    },
    {
        'start': '{', 'new_start': '<span onmouseenter="loadPreview(\'',
        'middle': "}", 'new_middle': '\')" onmouseout="unloadPreview()">',
        'end': "[]", 'new_end': '</span>'
    },
    {
        'start': 'num(', 'new_start': '<span class="num">',
        'end': ')', 'new_end': '</span>'
    },
    {
        'start': 'img(link: ', 'new_start': '<span class="collapsed" onmouseenter="loadImagePreview(',
        'end': ')', 'new_end': ')" onmouseout="unloadPreview()" >(...)</span>' 
    },
    {
        'start': "collapsed(name: ", 'new_start': '<span onclick="loadCard(',
        'middle': ", preview: ", 'new_middle': ' )" onmouseout="unloadPreview()" onmouseenter="loadPreview(',
        'end': "\')", 'new_end': '\')" class="collapsed">(...)</span>'
    },
    {
        'start': '// ', 'new_start': '<span class="comment">// ',
        'add': '</span>',
    },
    {
        'start': '«', 'new_start': '<span class="str">«',
        'end': '»', 'new_end': '»</span>'
    },
    {
        'start': '««', 'new_start': '<span class="str">',
    },
]

var currentSide = 'front'

// https://stackoverflow.com/questions/10710345/finding-all-indexes-of-a-specified-character-within-a-string
function locations(substring, string) {
    var a=[],i=-1;
    while((i=string.indexOf(substring,i+1)) >= 0) a.push(i);
    return a;
}

function parseLines(code) {
    output = ''
    for (var line of code) {
        for (const replace of parseReplacements) {
            diffindex = 0
            for (var index of locations(replace.start, line)) {
                index = index + diffindex
                subcode = line.substring(index)
                subcode = subcode.replace(replace.start, replace.new_start)
                                 .replace(replace.middle, replace.new_middle)
                                 .replace(replace.end, replace.new_end)
                newline = line.substring(0, index) + subcode
                line = newline
                diffindex = newline.lenght - line.lenght
                if (replace.add) {line += replace.add}
            }
        }
        output += `<span>${line}</span>`
    }
    return output
}

function loadPreview(text) {
    
    backpreview = document.getElementById('fatherbackpreview')
    backpreview.className = backpreview.className.replaceAll(' closed', '')
    if (text == 'donate') {
        text = '<b>thank you</b><br>this helps me all aroud: code, poetry, the channel, etc!'
        backpreview.className += ' donation'
    }
    backpreview = document.getElementById('backpreview')
    backpreview.innerHTML = text
}

function loadImagePreview(text) {
    backpreview = document.getElementById('backpreview')
    backpreview.innerHTML = `<img src="${text}">`
    backpreview = document.getElementById('fatherbackpreview')
    backpreview.className = backpreview.className.replaceAll(' closed', '')
}

function unloadPreview(text) {
    backpreview = document.getElementById('fatherbackpreview')
    backpreview.className += ' closed'
    backpreview.className = backpreview.className.replaceAll(' donation', '')
}

function unloadCard() {
    otherfront = document.getElementById('otherfront')
    oldfront = document.getElementById('oldfront')
    oldfront.style.opacity = 1;
    oldfront.style.pointerEvents = 'auto';
    otherfront.style.opacity = 0;
}

function openCard() {
    if (currentSide == 'front') {
        code.className = code.className + ' flipped'
    }
    oldfront.style.opacity = 0;
    oldfront.style.pointerEvents = 'none';
    otherfront.style.opacity = 1;
}

function loadCard(name) {
    otherfront = document.getElementById('otherfront')
    oldfront = document.getElementById('oldfront')
    code = document.getElementById('code')
    if (currentSide == 'front') {
        currentSide = 'back'
        codepre = document.getElementById('backcodepre')
        codepre.innerHTML = parseLines(infos[name])
        code.className = code.className.replace(' flipped', '')
    } else {
        currentSide = 'front'
        codepre = document.getElementById('frontcodepre')
        codepre.innerHTML = parseLines(infos[name])
        oldfront.style.opacity = 0;
        oldfront.style.pointerEvents = 'none';
        otherfront.style.opacity = 1;
        code.className = code.className + ' flipped'
    }
}

loadCard('home')
