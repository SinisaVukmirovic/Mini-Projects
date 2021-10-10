const tagsElem = document.querySelector('#tags');
const textarea = document.querySelector('textarea');

textarea.focus();

textarea.addEventListener('keyup', e => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';

            randomSelect();
        }, 10);
    }
});

const createTags = (input) => {
    const tags = new Set(input.split(',')
                              .filter(tag => tag.trim() !== '')
                              .map(tag => tag.trim()));  

    tagsElem.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;

        tagsElem.appendChild(tagEl);
    });
}

const randomSelect = () => {
    const timesToHighlight = 50;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 200);
    }, 200);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 200);
    }, timesToHighlight * 100);
}

const pickRandomTag = () => {
    const tags = document.querySelectorAll('.tag');

    return tags[Math.floor(Math.random() * tags.length)];
}

const highlightTag = (tag) => {
    tag.classList.add('highlight');
}

const unHighlightTag = (tag) => {
    tag.classList.remove('highlight');
}