console.log('JS OK');

const target = document.getElementById('main');
const workers = [
  {
    image: 'wayne-barnett-founder-ceo.jpg',
    identity: 'Wayne Barnett',
    role: 'Founder & CEO',
  },
  {
    image: 'angela-caroll-chief-editor.jpg',
    identity: 'Angela Caroll',
    role: 'Chief Editor',
  },
  {
    image: 'walter-gordon-office-manager.jpg',
    identity: 'Walter Gordon',
    role: 'Office Manager',
  },
  {
    image: 'angela-lopez-social-media-manager.jpg',
    identity: 'Angela Lopez',
    role: 'Social Media Manager',
  },
  {
    image: 'scott-estrada-developer.jpg',
    identity: 'Scott Estrada',
    role: 'Developer',
  },
  {
    image: 'barbara-ramos-graphic-designer.jpg',
    identity: 'Barbara Ramos',
    role: 'Graphic Designer',
  },
];

let profile = '';

for (let worker of workers) {
  profile += `
    <div class="col-4">
        <div class="card border-0 text-center">
        <img src="img/${worker.image}" alt="team-member">
        <h4>${worker.identity}</h4>
        <p>${worker.role}</p>
        </div>
    </div>
    `;
}

target.innerHTML = profile;
