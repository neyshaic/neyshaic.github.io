var DATA = '%data%';

var bio = {
  name: 'Neysha Irizarry Cardoza',
  role: 'Computer Engineering Student',
  contacts: {
    email: 'irizarry.neysha@gmail.com',
    mobile:'(407)-733-5088',
    github: 'neyshaic',
    twitter:'neysha_ic',
    location: 'Orlando, Florida'
  },
  welcomeMessage: 'A Current student of the University of Central Florida. Eager to learn and exand my knowledge as I enter the work field. ',
  skills: ['HTML', 'CSS', 'JavaScript','C','C++','Assembly'],
  biopic: 'images/Corner-Logo.PNG',
  display: function() {
    var formattedName = HTMLheaderName.replace(DATA, bio.name);
    var formattedRole = HTMLheaderRole.replace(DATA, bio.role);

    var formattedMobile = HTMLmobile.replace(DATA, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(DATA, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(DATA, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(DATA, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(DATA, bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace(DATA, bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace(DATA, bio.welcomeMessage);

    $('#header').prepend(formattedName + formattedRole);
    $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail +
      formattedGithub + formattedTwitter + formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0, len = bio.skills.length; i < len; i++) {
        var formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);

        $('#skills').append(formattedSkills);
      }
    }
  }
};
//Jobs information
var work = {
  jobs: [
    {
      employer: 'Automated Building Controls Systems',
      title: 'Graphic Designer',
      location: 'Casselberry, Florida',
      dates: 'January 2016 - Present',
      description: 'Demonstrates excellent communication skills in order to interpret and negotiate'+
      'briefs with clients. Holds accuracy and attention to detail when finalizing designs' +
      'as well as presenting time management skills and the confidence to explain and' +
      'sell ideas to clients and colleagues. Always open to feedback and willing to' +
      'make changes to any design, with a flexible approach when working in a team'
    },
    {
      employer: 'Publix Inc.',
      title: 'Cashier',
      location: 'Longwood, Florida',
      dates: 'October 2014 - March 2016',
      description: 'Assisted customers with final purchases and answered questions at the checkout' +
      'counter. Operated computerized cash register and credit card machines as well' +
      'as conveyor belts. Exuded friendly, courteous, and positive attitude and demonstrated professionalism. Primary' +
      'job duties included ringing up purchases, scanning coupons, and ensuring customer satisfaction.'
    },
    {
      employer: 'Chick fil A',
      title: 'Team Leader',
      location: 'Altamonte Florida',
      dates: 'May 2013 - September 2014',
      description: 'Mentored and guided employees ensuring all were trained in product knowledge and capable of performing assigned duties.'+
      'Demonstrated knowledge of companys mission, purpose, goals, and the ability to help employees successfully achieve'+
      'them. Adhered to rigorous standards for customer service, merchandising, operational safety and the store security policies and guidelines'
    }
  ],
  display: function() {
    if (work.jobs.length > 0) {
      for (var i = 0, len = work.jobs.length; i < len; i++) {
        var formattedEmployer = HTMLworkEmployer.replace(DATA, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(DATA, work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace(DATA, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(DATA, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(DATA, work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
};
//projects that I have work on
var projects = {
  projects: [
    {
      'title': 'Build A Portfolio',
      'dates': 'June 2017',
      'description': 'Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework.'+
      ' The page is fully responsive and works on mobile, tablet, and desktop browsers.',
      'images': ['images/rsz_capture.png']
    }
  ],
  display: function() {
    if (projects.projects.length > 0) {
      for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {
        var formattedTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
        var formattedDates = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace(DATA, projects.projects[i].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
          var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};

var education = {
  schools: [
    {
      'name': 'University of Central Florida',
      'location': 'Orlando, Florida',
      'degree': 'Bachelor in Computer Engineering',
      'majors': ['Elecrical & Computer Science'],
      'dates': '2016 - Current',
      'url': 'https://www.ucf.edu/'
    },
    {
      'name': 'Seminole State College',
      'location': 'Sanford, Florida',
      'degree': 'Associates in Arts',
      'majors': ['Basic Pre-Req'],
      'dates': '2013 - 2016',
      'url': 'https://www.seminolestate.edu/'
    }
  ],
    onlineCourses: [
     {
       'title': 'Front-End Developer',
       'school': 'Udacity',
       'dates': 'May 2017',
       'url': 'https://www.udacity.com/'
     }
  ],
  display: function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
      for (var i = 0, iLen = education.schools.length; i < iLen; i++) {
        var formattedName = HTMLschoolName.replace(DATA, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(DATA, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(DATA, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(DATA, education.schools[i].location);
        var formattedNameDegree = formattedName + formattedDegree;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedNameDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedLocation);

        for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
          var formattedMajor = HTMLschoolMajor.replace(DATA, education.schools[i].majors[j]);

          $('.education-entry:last').append(formattedMajor);
        }
      }

      $('#education').append(HTMLonlineClasses);

      for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
        var formattedTitle = HTMLonlineTitle.replace(DATA, education.onlineCourses[k].title).replace('#', education.onlineCourses[k].url);
        var formattedSchool = HTMLonlineSchool.replace(DATA, education.onlineCourses[k].school);
        var formattedOnlineDates = HTMLonlineDates.replace(DATA, education.onlineCourses[k].dates);
        var formattedUrl = HTMLonlineURL.replace(DATA, education.onlineCourses[k].url);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedTitleSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedUrl);
      }
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
