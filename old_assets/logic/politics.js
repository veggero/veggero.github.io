const names = ['naturapolitica', 'obiezione', 'informarsi']

function politic(name) {
    for (i = 0; i < names.length; i++) {
        obj = document.getElementById(names[i]);
        obj.style.opacity = 0;
        obj.style.pointerEvents = 'none';
    }
    obj = document.getElementById(name);
    obj.style.opacity = 1;
    obj.style.pointerEvents = 'auto';
}

politic('naturapolitica');
