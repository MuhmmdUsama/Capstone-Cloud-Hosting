const hamburger = document.querySelector('.hamburger');

const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach((e) => e.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// ############## Owners Section ####################

const owners = [
  {
    name: 'John smith',
    image: 'Owners/owner-01.png',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloremque quos expedita.',
  },
  {
    name: 'John snow',
    image: 'Owners/owner-02.png',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloremque quos expedita.',
  },
  {
    name: 'Ron wisly',
    image: 'Owners/owner-03.png',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloremque quos expedita.',
  },
  {
    name: 'Harry potter',
    image: 'Owners/owner-04.png',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloremque quos expedita.',
  },
  {
    name: 'Sara johns',
    image: 'Owners/owner-05.png',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloremque quos expedita.',
  },
  {
    name: 'Emlya clark',
    image: 'Owners/owner-06.png',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi doloremque quos expedita.',
  },
];

const container = document.querySelector('.owner__content');

for (let i = 0; i < owners.length; i += 1) {
  container.innerHTML += `

  <div class='owner__body'>
          <div class='owner__img'>
            <img src='${owners[i].image}' alt='owner image' />
          </div>
          <div class='owner__info'>
            <h3>${owners[i].name}</h3>
            <p>${owners[i].description}</p>
          </div>
  </div>`;
}
