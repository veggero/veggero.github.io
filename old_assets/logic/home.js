code = document.getElementById('code');
poetry = document.getElementById('poetry');
kde = document.getElementById('kde');
politics = document.getElementById('politics');

selection = {
    code: code,
    poetry: poetry,
    kde: kde,
    politics: politics
}

colors = {
    code: "#eeff00",
    poetry: "#ff0800",
    kde: "#00ff08",
    politics: "#0d00ff",
    none: "var(--fg)"
}

selected = false;

function select(el) {
    var loaded_delay = 1550
    var flip_delay = 1500
    if (selected != false && el == selected) {
        code.className = 'home topleft card topic'
        poetry.className = 'home topright card topic'
        kde.className = 'home bottomleft card topic'
        politics.className = 'home bottomright card topic'
        selection[selected].classList.remove('home')
        selection[selected].classList.add('loading')
        console.log(selection[selected].classList)
        setTimeout(function(selected) {
            selection[selected].classList.remove('loading')
            selection[selected].classList.add('home')
            unloadCard()
        }, flip_delay, selected)
        document.getElementById('background').style.backgroundColor = colors.none
        selected = false
        return
    }
    if (selected != false && el != selected) {
        select(selected)
        setTimeout(function(el) {select(el)}, flip_delay, el);
        return
    }
    selected = el;
    document.getElementById('background').style.backgroundColor = colors[el]
    if (el == 'code') {
        setTimeout(function(i) {code.className += ' loaded'}, loaded_delay+flip_delay, 1);
        setTimeout(function(i) {
            kde.className = 'selected bottom card topic'
            poetry.className = 'selected right card topic'
            code.className = 'selected center card topic'
            politics.className = 'selected bottomright card topic'
            openCard()
        }, flip_delay)
        code.className = 'topleft loading card topic'
    } else if (el == 'poetry') {
        setTimeout(function(i) {poetry.className += ' loaded'}, loaded_delay+flip_delay, 1);
        setTimeout(function(i) {
            code.className = 'selected left card topic'
            poetry.className = 'selected center card topic'
            kde.className = 'selected bottomleft card topic'
            politics.className = 'selected bottom card topic'
            unloadCard()
        }, flip_delay)
        poetry.className = 'topright loading card topic'
    } else if (el == 'kde') {
        setTimeout(function(i) {kde.className += ' loaded'}, loaded_delay+flip_delay, 1);
        setTimeout(function(i) {
            code.className = 'selected top card topic'
            poetry.className = 'selected topright card topic'
            kde.className = 'selected center card topic'
            politics.className = 'selected right card topic'
            unloadCard()
        }, flip_delay)
        kde.className = 'bottomleft loading card topic'
    } else if (el == 'politics') {
        setTimeout(function(i) {politics.className += ' loaded'}, loaded_delay+flip_delay, 1);
        setTimeout(function(i) {
            code.className = 'selected topleft card topic'
            poetry.className = 'selected top card topic'
            kde.className = 'selected left card topic'
            politics.className = 'selected center card topic'
            unloadCard()
        }, flip_delay)
        politics.className = 'bottomright loading card topic'
    }
}

function parall(event) {
    body = document.getElementById('body');
    xo = (event.clientX + (window.innerWidth / 2)*15) / 16
    yo = (event.clientY + (window.innerHeight / 2)*15) / 16
    body.style['perspective-origin'] =  `${xo}px ${yo}px`
}
