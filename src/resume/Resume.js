let Resume = {
  basics: {
    firstname: "Lewis",
    middleinitial: "Z.",
    lastname: "Matos",
    label: "Software Engineer",
    picture: "https://s3.amazonaws.com/lewismatos.com/images/_71A6572.png",
    backgroundvideo: "https://storage.googleapis.com/coverr-main/mp4/Black_Keys.mp4",
    email: "lewm20@gmail.com",
    phone: "(347) 885-4683",
    website: "http://johndoe.com",
    summary: "A summary of John Doe...",
    location: {
      address: "Brooklyn",
      postalCode: "11385",
      city: "Brooklyn",
      countryCode: "US",
      region: "NY",
    },
    profiles: [
      {
        network: "gitHub",
        username: "LewisMatos",
        url: "https://github.com/LewisMatos",
      },
      {
        network: "LinkedIn",
        username: "lewisMatos",
        url: "https://www.linkedin.com/in/lewismatos/",
      },
      {
        network: "Twitter",
        username: "MatosLewis",
        url: "https://twitter.com/MatosLewis",
      },
      {
        network: "file",
        username: "",
        url: "https://s3.amazonaws.com/lewismatos.com/resume/LewisMatosResume.pdf",
      },
    ],
  },
  work: [
    {
      company: "Scripted",
      position: "Teacher at Lyons Community School",
      website: "http://scripted.com",
      startDate: "Mar 2017",
      endDate: "Present",
      summary: [
        {
          header: "Teach fundamentals of HTML, CSS and JavaScript to high school students in under resourced schools.",
          bullet: [],
        },
      ],
    },
    {
      company: "Bounce Exchange",
      position: "Software Engineer",
      website: "http://bouncex.com",
      startDate: "Jan 2016",
      endDate: "Mar 2017",
      summary: [
        {
          header:
            "Performed client-side integrations with Bounce Exchange behavior automation platform using Vanilla JavaScript and jQuery.",
          bullet: [],
        },
        {
          header:
            "Collaborated with design and accounts to deliver custom campaigns across many high traffic e-commerce and publisher sites.",
          bullet: [],
        },
        {
          header:
            "Integrated numerous Web Services and APIs with a primary focus on Email Service Providers using PHP CodeIgniter and JavaScript.",
          bullet: [
            "Developed in-house APIs for SendGrid, Mailchimp, Bronto, Salesforce, Experian, Uniqlo, JetBlue and many more.",
          ],
        },
        {
          header: "Assisted in rolling out client-side side V2 inbox retargeting engine.",
          bullet: [
            "Built JavaScript tracking boiler-plates leading to a decrease in complexity, client roll-out and bugs.",
          ],
        },
        {
          header: "Worked alongside accounts and analytics to create experimental campaigns and platform features.",
          bullet: [],
        },
        {
          header: "Managed Bouncex homepage, working closely with design lead on site changes.",
          bullet: ["Implemented Facebook and google conversion tracking."],
        },
        {
          header: "Paired programmed and helped onboard new engineers with the platform and codebase.",
          bullet: [],
        },
      ],
    },
    {
      company: "Department of Education",
      position: "DIIT IPDVS Engineer Intern",
      website: "http://doe.com",
      startDate: "Mar 2015",
      endDate: "Jul 2015",
      summary: [
        {
          header:
            "Created a script in Java that automated inspections of more than 500 DOE sites, providing diagnostics and detailed reporting.",
          bullet: [],
        },
        {
          header: "Performed full site assessments at DOE schools, including technical reports and documentation.",
          bullet: [],
        },
      ],
    },
    {
      company: "DOE Peak Technician Intern",
      position: "Department of Education",
      website: "http://doe.com",
      startDate: "Aug 2014",
      endDate: "Sept 2014",
      summary: [
        {
          header: "Provided hands-on support to maintain network infrastructure, systems access, and equipment.",
          bullet: [],
        },
        {
          header: "Installed and configured Lan's and Voip across DOE sites",
          bullet: [],
        },
      ],
    },
    {
      company: "Staples",
      position: "Easy Tech Technician",
      website: "http://staples.com",
      startDate: "Oct 2009",
      endDate: "Nov 2012",
      summary: [
        {
          header: "Performed system diagnostics, repairs and upgrades on client technologies.",
          bullet: [],
        },
        {
          header: "Answered tech questions about various technologies, with consistent high sales",
          bullet: [],
        },
      ],
    },
  ],
  volunteer: [
    {
      organization: "Organization",
      position: "Volunteer",
      website: "http://organization.com/",
      startDate: "2012-01-01",
      endDate: "2013-01-01",
      summary: "Description...",
      highlights: ["Awarded 'Volunteer of the Month'"],
    },
  ],
  education: [
    {
      institution: "Flatiron School",
      area: "NYC Web Development Fellow",
      studyType: "Web Development",
      startDate: "July 2015",
      endDate: "Dec 2015",
      gpa: "0",
      courses: ["DB1101 - Basic SQL"],
    },
    {
      institution: "Queens College, The City University of New York",
      area: "Bachelor of Science, Computer Science",
      studyType: "Computer Science",
      startDate: "Jan 2013",
      endDate: "Dec 2018",
      gpa: "0",
      courses: ["DB1101 - Basic SQL"],
    },
    {
      institution: "City College of Technology, The City University of New York",
      area: "Associates in Applied Science",
      studyType: "",
      startDate: "Jan 2009",
      endDate: "July 2011",
      gpa: "0",
      courses: ["DB1101 - Basic SQL"],
    },
  ],
  awards: [
    {
      title: "Award",
      date: "2014-11-01",
      awarder: "Company",
      summary: "There is no spoon.",
    },
  ],
  publications: [
    {
      name: "Publication",
      publisher: "Company",
      releaseDate: "2014-10-01",
      website: "http://publication.com",
      summary: "Description...",
    },
  ],
  skills: [
    {
      name: "Web Development",
      level: "Master",
      keywords: ["HTML", "CSS", "Javascript"],
    },
  ],
  languages: [
    {
      name: "English",
      level: "Native speaker",
    },
  ],
  interests: [
    {
      name: "Wildlife",
      keywords: ["Ferrets", "Unicorns"],
    },
  ],
  references: [
    {
      name: "Jane Doe",
      reference: "Reference...",
    },
  ],
};
export default Resume;
