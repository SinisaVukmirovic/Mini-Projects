const tagsElem = document.querySelector('#tags');
const textarea = document.querySelector('textarea');

textarea.focus();

textarea.addEventListener('keyup', e => {
    createTags(e.target.value);
});

const createTags = (input) => {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());  

    console.log(tags)
}