import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const experience = [
    {
      year: '2022 - 2023',
      role: 'Frontend Engineer',
      company: 'OMRT',
      description:
        'OMRT builds a Deep Tech design platform for real estate development. The product of OMRT is a collection of architectural design, physics, finance, and material modules that are connected within one digital brain. Together, it generates and analyses building designs parametrically.\n● Key Roles and Responsibilities: \n● I served as the sole Frontend Developer on my team, responsible for creating and maintaining an online ecosystem of physics simulations/analysis to assist architects and engineers. \n● Architected and implemented the frontend of a new product from scratch, a performance simulations/analyses engine that facilitated simulations for wind, energy, noise, and daylight, among other factors. \n● Spearheaded the development of the user interfaces for applications using JavaScript, Vue.js for frontend, and Three.js for 3D programming, ensuring seamless performance and scalability.',
    },
    {
      year: '2022 - 2022',
      role: 'Frontend Engineer',
      company: 'Freelance',
      description:
        'JavaScript developer who is proficient with React.js, with a primary focus on developing user interface components and implementing them following well-known React.js workflows (such as Redux). Commitment to collaborative problem-solving, sophisticated design, and quality product is important to me. \n● Experience with modern front-end tools. \n● Thorough understanding of newer specifications of EcmaScript. \n● Experience with RESTful APIs. \n● Experience with code versioning tools (such as Git). \n● A knack for benchmarking and optimization',
    },
    {
      year: '2021 - 2022',
      role: 'Full Stack Developer',
      company: 'EPICODE',
      description:
        'European highly intensive & fully experience Mastercamp for STEM talents, backed by Ycombinator.',
    },
    {
      year: '2019 - 2021',
      role: 'Game Developer',
      company: 'Freelance',
      description:
        "Contributing to projects: coding gameplay mechanics or user interfaces, or doing the animations and the 2D design part. I've also launched several education apps for kids on Google Play Store, which reached thousands of downloads.\n● I use Unity Game Engine and C#. For the design part, Photoshop, Illustrator and the Unity Assets help. For the animations, I use Unity's Mecanim Animation System.",
    },
    {
      year: '2019 - 2019',
      role: 'Gaming Support Specialist',
      company: 'King Games',
      description:
        'Responsible for helping players of popular video games resolve their issues and continue enjoying the game that they love.\n● Duties will include but not be limited to:\n● Assist players to resolve technical problems with the game bugs, gameplay issues, new updates, compromised accounts, purchases not going through etc...',
    },
    {
      year: '2019 - 2019',
      role: 'Technical Support & Back Office Specialist',
      company: 'Sky Italia',
      description:
        '● Advising & assisting Customers who are seeking technical assistance with\ntheir equipment and Sky subscription.\n● Updating internal databases with information about technical issues\n● Supporting administrative staff...',
    },
    {
      year: '2014 - 2017',
      role: 'Cyber Café & Bar Owner',
      company: 'Self-Employed',
      description:
        'I owned a Cybercafé where computers are provided for accessing the internet, a variety of PC games, printing, scanning and other cyber related goods. It also had a fast food and bar area for the students, since it was located in front of a High School.\n● Monitor use of computers, accessories, media equipment, printing equipment and other machines and cyber related goods.\n● Assist customers by troubleshooting hardware, software, terminals or printing, scanning, attaching and emailing documents.\n● Sell computer accessories, stationery, and other cyber related goods and services while providing advice to customers on care and usage.\n● Responsible for the running of the Bar & its business performance.\n● Financial/Budget control',
    },
    {
      year: '2013 - 2015',
      role: 'Independent Used Cars Dealer',
      company: 'Self-Employed',
      description:
        '● Develop an in - depth understanding of current car and use that knowledge\nto encourage customers to make a purchase.\n● Understanding cars by studying characteristics, capabilities and features;\ncomparing and contrasting competitive models.\n● Assist all walk – ins; invite them for a quick discussion about their needs and\nwants in a vehicle, provide suggestion and advise them.\n● Close sales by overcoming objections; negotiating price; completing sales\nor purchase contracts; explaining and offering services;',
    },
    {
      year: '2012 - 2013',
      role: 'Fireplace Showroom Owner',
      company: 'Self-Employed',
      description:
        'I owned a fireplace showroom. \n● Managing a fireplace showroom which included services installations & sales. \n● Work with a wide range of customers, including builders, designers and house owners, to sell a wide range of fireplaces, which may include services and installations.',
    },
    {
      year: '2007 - 2012',
      role: 'Hostel Owner',
      company: 'Self-Employed',
      description:
        'Responsible for management of family house hostel. \n● Responsible in quality housekeeping service alongside managing maintenance works. \n● Responsible for accommodation bookings and optimizing occupancy. \n● Seeking out and contacting groups about accommodation. \n● Creating and advertising promotions. \n● Liaising with tour operators. \n● Conduct check – in and checkout procedures. \n● Provide local and regional information. \n● Assist with transportation requests. \n● Respond to guest feedback regarding broken or malfunctioning items. \n● Arrange and implement a preventative maintenance schedule. \n● Ensured that the house environment is safe as per the required health standards.',
    },
    {
      year: '2006 - 2007',
      role: 'Library Assitant',
      company: 'Feltrinelli',
      description:
        '● Organize and maintain library materials. \n● Maintain computer databases used to locate library materials.',
    },
    {
      year: '2004 - 2005',
      role: 'Chocolate Production Machine Operator',
      company: 'Feltrinelli',
      description:
        'Production worker at Ferrero SpA, for his countless and historic products like: Nutella, Ferrero Rocher & Kinder products.',
    },
  ];

  return (
    <div className="timeline">
      {experience.map((exp, i) => (
        <div key={i} className="timeline-item" style={{ '--order': i }}>
          <div className="timeline-item-year">{exp.year}</div>
          <div className="timeline-item-content">
            <h3>
              {exp.role} at {exp.company}
            </h3>
            {exp.description
              .split('● ')
              .filter(Boolean)
              .map((desc, index) => (
                <p key={index}>● {desc}</p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
