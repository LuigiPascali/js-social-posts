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
    },
    {
        "id": 6,
        "content": "Bonus 1 e 3 semplici, sono riuscito a farli abbastanza tranquillamente a mente lucida, il Bonus 2 è un po' più complesso, cercherò meglio su internet nel pomeriggio e proverò a risolverlo..Intanto posto una foto a caso!",
        "media": "https://unsplash.it/600/400?image=118",
        "author": {
            "name": "Luigi Maria Pascali",
            "image": "https://unsplash.it/300/300?image=1"
        },
        "likes": 71,
        "created": "2023-06-28"
    }
];

// MILESTONE 2: 

// Selezione dell'elemento container
const container = document.getElementById('container');

// Itero sull'array dei post
posts.forEach(post => {
  // Creo un elemento div per il post:
  const postElement = document.createElement('div');
  postElement.classList.add('post');

  // Creo elemento dell'intestazione del post:
  const postHeaderElement = document.createElement('div');
  postHeaderElement.classList.add('post__header');

  // Creo elemento meta del post:
  const postMetaElement = document.createElement('div');
  postMetaElement.classList.add('post__meta');

  // Creo elemento dell'icona:
  const postMetaIconElement = document.createElement('div');
  postMetaIconElement.classList.add('post-meta__icon');

  // Creo l'elemento dell'immagine del profilo:
  const profilePicElement = document.createElement('img');
  profilePicElement.classList.add('profile-pic');
  profilePicElement.src = post.author.image;
  profilePicElement.alt = post.author.name;

  // Aggiungo l'elemento dell'immagine del profilo all'icona:
  postMetaIconElement.appendChild(profilePicElement);

  
  // Creo elemento dei dati del post:
  const postMetaDataElement = document.createElement('div');
  postMetaDataElement.classList.add('post-meta__data');

  // Creo elemento autore del post:
  const postMetaAuthorElement = document.createElement('div');
  postMetaAuthorElement.classList.add('post-meta__author');
  postMetaAuthorElement.textContent = post.author.name;

 //   // Creo elemento tempo del post:
 //   const postMetaTimeElement = document.createElement('div');
 //   postMetaTimeElement.classList.add('post-meta__time');
 //   postMetaTimeElement.textContent = post.created;

  // Creo elemento tempo del post:
  const postMetaTimeElement = document.createElement('div');
  postMetaTimeElement.classList.add('post-meta__time');

  //   BONUS 1:
  const createdDate = new Date(post.created);
  const formattedDate = createdDate.toLocaleDateString('it-IT');
  postMetaTimeElement.textContent = formattedDate;

  console.log(formattedDate);

  // Aggiungo gli elementi autore e tempo:
  postMetaDataElement.appendChild(postMetaAuthorElement);
  postMetaDataElement.appendChild(postMetaTimeElement);

  // Aggiungo l'elemento dell'icona e dei dati:
  postMetaElement.appendChild(postMetaIconElement);
  postMetaElement.appendChild(postMetaDataElement);

  // Aggiungo l'elemento del meta all'elemento intestazione:
  postHeaderElement.appendChild(postMetaElement);

  // Creo elemento testo del post:
  const postTextElement = document.createElement('div');
  postTextElement.classList.add('post__text');
  postTextElement.textContent = post.content;

  // Creo l'elemento dell'immagine del post:
  const postImageElement = document.createElement('div');
  postImageElement.classList.add('post__image');

  const imageElement = document.createElement('img');
  imageElement.src = post.media;
  imageElement.alt = '';

  // Aggiungo l'elemento dell'immagine all'elemento dell'immagine del post:
  postImageElement.appendChild(imageElement);

  // Creo elemento del piè di pagina del post:
  const postFooterElement = document.createElement('div');
  postFooterElement.classList.add('post__footer');

  // Creo elemento dei like:
  const likesElement = document.createElement('div');
  likesElement.classList.add('likes');

  // Creo elemento del pulsante like:
  const likeButtonElement = document.createElement('a');
  likeButtonElement.classList.add('like-button');
  likeButtonElement.classList.add('js-like-button');
  likeButtonElement.dataset.postid = post.id;

  // Creo l'elemento dell'icona del pulsante dei like:
  const likeButtonIconElement = document.createElement('i');
  likeButtonIconElement.classList.add('like-button__icon');
  likeButtonIconElement.classList.add('fas');
  likeButtonIconElement.classList.add('fa-thumbs-up');
  likeButtonIconElement.setAttribute('aria-hidden', 'true');

  // Creo l'elemento dell'etichetta del pulsante dei like:
  const likeButtonLabelElement = document.createElement('span');
  likeButtonLabelElement.classList.add('like-button__label');
  likeButtonLabelElement.textContent = 'Mi Piace';

  // Aggiungo l'elemento dell'icona e dell'etichetta del pulsante dei like all'elemento del pulsante dei like:
  likeButtonElement.appendChild(likeButtonIconElement);
  likeButtonElement.appendChild(likeButtonLabelElement);

  // Creo l'elemento del contatore dei like:
  const likesCounterElement = document.createElement('div');
  likesCounterElement.classList.add('likes__counter');
  likesCounterElement.textContent = `Piace a ${post.likes} persone`;

  // Aggiungo l'elemento del pulsante dei like e del contatore dei like all'elemento dei like:
  likesElement.appendChild(likeButtonElement);
  likesElement.appendChild(likesCounterElement);

  // Aggiungo l'elemento dei like all'elemento del piè di pagina del post:
  postFooterElement.appendChild(likesElement);

  // Aggiungo gli elementi dell'intestazione, del testo, dell'immagine e del piè di pagina al post:
  postElement.appendChild(postHeaderElement);
  postElement.appendChild(postTextElement);
  postElement.appendChild(postImageElement);
  postElement.appendChild(postFooterElement);

// MILESTONE 3 + BONUS 3:

// Dichiarazione dell'array likedPosts:
const likedPosts = [];

// Aggiungi l'evento click al pulsante "Mi Piace":
likeButtonElement.addEventListener('click', function(event) {
    event.preventDefault(); // Evita l'azione di navigazione predefinita
  
    const postId = parseInt(likeButtonElement.dataset.postid, 10);
    const likesCounterElement = postElement.querySelector('.likes__counter');
  
    if (likedPosts.includes(postId)) {
      // Se il post è già stato "Messo Mi Piace", decrementa il contatore e rimuovi l'ID dal array likedPosts:
      const index = likedPosts.indexOf(postId);
      if (index > -1) {
        likedPosts.splice(index, 1);
      }
      post.likes--;
      likesCounterElement.textContent = `Piace a ${post.likes} persone`;
      likeButtonElement.classList.remove('like-button--liked');
    } else {
      // Altrimenti, incrementa il contatore e aggiungi l'ID al array likedPosts:
      likedPosts.push(postId);
      post.likes++;
      likesCounterElement.textContent = `Piace a ${post.likes} persone`;
      likeButtonElement.classList.add('like-button--liked');
    }
  
    console.log(likedPosts);
  });
  
  // Aggiungo l'elemento del post al container:
  container.appendChild(postElement);
});




