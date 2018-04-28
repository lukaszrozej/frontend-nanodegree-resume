// Model:
const bio = {
  name: 'Gerhard Reisefieber',
  role: 'Front End Developer',
  contacts: {
    mobile: '00 800 666 666',
    email: 'gerhard@reisefieber.com',
    github: 'reisefieber',
    twitter: '@gerhard',
    location: 'Tłuszcz, Poland',
  },
  welcomeMessage: `I develope the front of the end, and I'm good at it!`,
  skills: ['developement', 'boasting', 'cluelessness'],
  biopic: 'images/fry.jpg',
};

const octopus = {
  init: function() {
    headerView.init();
  },

  getBio: function() {
    return bio;
  }
}

headerView = {
  init: function() {
    this.header = document.getElementById('header');
    this.render();
  },

  render: function() {
    const bio = octopus.getBio();

    this.header.innerHTML = `
      <h1 id="name">${bio.name}</h1>
      <span>${bio.role}</span><hr>
        <ul id="topContacts" class="flex-box">` + 
        Object.entries(bio.contacts).map(([type, value]) => `
          <li class="flex-item">
            <span class="orange-text">${type}</span>
            <span class="white-text">${value}</span>
          </li>`
        ).join('\n') + `
      </ul>
      <img src="${bio.biopic}" class="biopic">
      <span class="welcome-message">${bio.welcomeMessage}</span>
      <h3 id="skills-h3">Skills at a Glance:</h3>
      <ul id="skills" class="flex-column">` +
      bio.skills.map(skill => 
        `<li class="flex-item"><span class="white-text">${skill}</span></li>`
      ).join('\n') + `
      </ul>`;
  }
}

octopus.init();