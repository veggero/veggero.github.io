from glob import glob

output = ''

for i in range(1, 100):
    filename = (glob(f'*.poetry{i}.txt') or [None])[0]
    if not filename: break
    text = open(filename, 'r').read().strip().split('\n')
    output += '<p>'
    flag = False
    for i, line in enumerate(text):
        if line.startswith('#'):
            flag = True
            name = line.replace("#", "").strip()
            album, _, _ = filename.partition('.')
            output += f'</p>\n\n<h1>{name}</h1>\n'
            output += f'<p name="{name}" album="{album}">'
        elif line.strip():
            flag = False
            output += line.strip() + '<br>\n'
        else:
            if text[i+1].strip() and not flag:
                output += '<br>'
    output += '</p>'
    output.replace('<p></p>', '')

template = open('template.html', 'r').read()
open('main.html', 'w').write(template.replace('<!-- %content% -->', output))
