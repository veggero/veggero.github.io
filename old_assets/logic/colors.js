colorschemes = {
    'light': {
        bg: "white",
        fg: "black",
        sidebar: "rgb(240, 240, 240)",
        border: "#ddd",
        bgt: "rgba(255, 255, 255, 0)",
        filter: "0%"
    },
    'dark': {
        bg: "rgb(35, 35, 35)",
        fg: "white",
        sidebar: "rgb(40, 40, 40)",
        border: "#333",
        bgt: "rgba(30, 30, 30, 0)",
        filter: "100%"
    },
}

next = {
    light: 'dark',
    dark: 'light'
}

var currentColorscheme = 'light';

function setColorscheme(colorscheme) {
    currentColorscheme = colorscheme;
    document.getElementById('background').classList.add('notransition')
    document.documentElement.style.setProperty('--bg', colorschemes[colorscheme].bg)
    document.documentElement.style.setProperty('--fg', colorschemes[colorscheme].fg)
    document.documentElement.style.setProperty('--sidebar', colorschemes[colorscheme].sidebar)
    document.documentElement.style.setProperty('--border', colorschemes[colorscheme].border)
    document.documentElement.style.setProperty('--bgt', colorschemes[colorscheme].bgt)
    document.documentElement.style.setProperty('--filter', colorschemes[colorscheme].filter)
    setTimeout(function(i) {
            document.getElementById('background').classList.remove('notransition')
            console.log
        }, 5, 3);
}

function nextColorscheme() {
    currentColorscheme = next[currentColorscheme];
    setColorscheme(currentColorscheme);
}

setColorscheme('light');
