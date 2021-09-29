const header = document.querySelector('#header')
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const profile_img = document.querySelector('#profile_img');
const authorName = document.querySelector('#authorName');
const date = document.querySelector('#date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

const getData = () => {
    header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="Header Image" />';
    title.innerHTML = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis';
    profile_img.innerHTML =
        '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="User Profile image" />';
    authorName.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08, 2020';
  
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}

setTimeout(() => {
    getData();
}, 3000);