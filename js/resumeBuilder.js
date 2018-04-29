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

const projects = {
  projects: [{
    title: 'World Domination',
    dates: 'Jan 1666 - now',
    description: 'I imagined I was a king. I imagined I was an emperor. I imagined I was God. I ate pizza. I imagined I ate the world.',
    images: ['images/fry.jpg', 'images/fry.jpg', 'images/fry.jpg', ],
  }, {
    title: 'Love',
    dates: 'yesterday - today',
    description: 'I thought what I would say. I thought how I would look. I imagined a kiss. I envisioned cuddling. Then I dopped my head pretending not to stare.',
    images: ['images/197x148.gif', ],
  }],
}

const education = {
  schools: [{
    name: 'School of Life',
    location: 'Earth',
    degree: 'Master',
    majors: ['Procrastination', 'Daydreaming'],
    dates: '1000 - 2000',
  }, {
    name: 'Kindergarten',
    location: 'Warsaw, Poland',
    degree: 'Little Boy',
    majors: ['Sleeping', 'Not eating'],
    dates: '0 - 1000',
  }],
  onlineCourses: [{
    title: 'How to become a millionaire',
    school: 'ConMen.com',
    dates: '2010 - 2011',
    url: '',
  }, {
    title: 'How to become a millionaire',
    school: 'ConMen.com',
    dates: '2010 - 2011',
    url: '',
  }],
}

const octopus = {
  init: function() {
    headerView.init();
    workView.init();
    projectsView.init();
    educationView.init();
    contactsView.init();
  },

  getBio: function() {
    return bio;
  },

  getJobs: function() {
    return work.jobs;
  },

  getProjects: function() {
    return projects.projects;
  },

  getEducation: function() {
    return education;
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

    this.element.innerHTML = `
      <h2>Work Experience</h2>` +
      jobs.map(job => `
        <div class="work-entry">
          <a href="#">${job.employer} - ${job.title}</a>
          <div class="date-text">${job.dates}</div> 
          <div class="location-text">${job.location}</div>
          <p><br>${job.description}</p>
        </div>`
      ).join('\n');
  },
}

const projectsView = {
  init: function() {
    this.element = document.getElementById('projects');
    this.render();
  },

  render: function() {
    const projects = octopus.getProjects();

    this.element.innerHTML = `
      <h2>Projects</h2>` +
      projects.map(project => `
        <div class="project-entry">
          <a href="#">${project.title}</a>';
          <div class="date-text">${project.dates}</div>
          <p><br>${project.description}</p>` +
          project.images.map(url =>
            `<img src="${url}">`
          ).join('\n') + `
        </div>`
      ).join('\n')
  },
}

const educationView = {
  init: function() {
    this.element = document.getElementById('education');
    this.render();
  },

  render: function() {
    const education = octopus.getEducation();

    this.element.innerHTML = `
      <h2>Education</h2>` +
      education.schools.map(school =>
        `<div class="education-entry">
          <a href="#">${school.name} -- ${school.degree}</a>
          <div class="date-text">${school.dates}</div>
          <div class="location-text">${school.location}</div>
          <em><br>Major: ${school.majors.join(', ')}</em>
        </div>`
      ).join('\n') + `
      <h3>Online Classes</h3>` +
      education.onlineCourses.map(course => `
        <div class="education-entry">
          <a href="#">${course.title} - ${course.school}</a>
          <div class="date-text">${course.dates}</div>
          <br><a href="#">${course.url}</a>
        </div>`
      ).join('\n');
  },
}

contactsView = {
  init: function() {
    this.element = document.getElementById('lets-connect');
    this.render();
  },

  render: function() {
    const bio = octopus.getBio();

    this.element.innerHTML = `
      <h2 class="orange center-text">Let's Connect</h2>
      <ul id="footerContacts" class="flex-box">` + 
      Object.entries(bio.contacts).map(([type, value]) => `
        <li class="flex-item">
          <span class="orange-text">${type}</span>
          <span class="white-text">${value}</span>
        </li>`
      ).join('\n') + `
      </ul>`
  }
}
octopus.init();