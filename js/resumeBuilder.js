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

const work = {
  jobs: [{
    employer: 'Obscure Company',
    title: 'The Go-To-Guy',
    location: 'Kiev, Ukraine',
    dates: 'Jan 2000 - Feb 2001',
    description: 'I did what I was told. I told everybody what I did. I was obscure, but I had a lot of company.'
  }, {
    employer: 'Flamboyant Company',
    title: 'Scapegoat',
    location: 'Beijing, China',
    dates: 'Jan 1999 - Feb 2000',
    description: 'I was a flamingo, I was a boy, I was an ant. I composed anything. I escaped goats. I was being jingoistic. '
  }],
}

const octopus = {
  init: function() {
    headerView.init();
    workView.init();
  },

  getBio: function() {
    return bio;
  },

  getJobs: function() {
    return work.jobs;
  }
}

const headerView = {
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
  },
}

const workView = {
  init: function() {
    this.element = document.getElementById('workExperience');
    this.render();
  },

  render: function() {
    const jobs = octopus.getJobs();

    this.element.innerHTML =
      jobs.map(job => `
        <div class="work-entry">
          <h2>Work Experience</h2>
          <a href="#">${job.employer} - ${job.title}</a>
          <div class="date-text">${job.dates}</div> 
          <div class="location-text">${job.location}</div>
          <p><br>${job.description}</p>
        </div>`
      ).join('\n');
  },
}

octopus.init();