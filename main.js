const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// MILESTONE 2: 

const container = document.getElementById('container');

// Itero sull'array dei post
posts.forEach(post => {
    console.log('Post:', post);
    // Creo un elemento div per il post:
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    console.log('Post Element:', postElement);

    // Creo elemento dell'intestazione del post:
    const postHeaderElement = document.createElement('div');
    postHeaderElement.classList.add('post__header');

    console.log('Post Header Element:', postHeaderElement);

    // Creo elemento meta del post:
    const postMetaElement = document.createElement('div');
    postMetaElement.classList.add('post__meta');

    console.log('Post Meta Element:', postMetaElement);

    // Creo elemento dell'icona:
    const postMetaIconElement = document.createElement('div');
    postMetaIconElement.classList.add('post-meta__icon');

    console.log('Post Meta Icon Element:', postMetaIconElement);

    // Creo l'elemento dell'immagine del profilo:
    const profilePicElement = document.createElement('img');
    profilePicElement.classList.add('profile-pic');
    profilePicElement.src = post.author.image;
    profilePicElement.alt = post.author.name;

    console.log('Profile Picture Element:', profilePicElement);

    // Aggiungo l'elemento dell'immagine del profilo all'icona:
    postMetaIconElement.appendChild(profilePicElement);

    // Creo elemento dei dati del post:
    const postMetaDataElement = document.createElement('div');
    postMetaDataElement.classList.add('post-meta__data');

    console.log('Post Meta Data Element:', postMetaDataElement);

    // Creo elemento autore del post:
    const postMetaAuthorElement = document.createElement('div');
    postMetaAuthorElement.classList.add('post-meta__author');
    postMetaAuthorElement.textContent = post.author.name;

    console.log ('Post Meta Author:', postMetaAuthorElement);

    
})