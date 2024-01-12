const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('ul.gallery');

// Append each iamge to the gallery
images.forEach(image => {
  let html = `<li><img src=${image.url} alt=${image.alt} width="250" height="150" /></li><style>ul.gallery {display:flex; flex-wrap:wrap;} ul.gallery li {list-style:none; margin:10px;}</style>`
  gallery.insertAdjacentHTML('beforeend', html);
});