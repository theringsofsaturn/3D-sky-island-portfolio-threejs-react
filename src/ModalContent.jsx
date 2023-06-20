import React from 'react';
import Timeline from './Timeline';
import ProjectCard from './ProjectCard';
import SocialCard from './SocialCard';
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaGooglePlay,
  FaInstagram,
  FaGoodreads,
} from 'react-icons/fa';
import './ModalContent.css';

const ModalContent = ({ mesh }) => {
  if (mesh && mesh.name === 'About Me') {
    return (
      <div className="modal-content">
        <h2 className="modal-heading">About Me</h2>
        <p>
          Seeking to take the next step in my career, I am constantly updating
          my expertise from Web Development to 3D programming and Game Design.
          My core strengths lie within JavaScript, utilizing React.js, Vue.js,
          Node.js, Express.js, and MongoDB. Additionally, I am well-versed in
          Unity3D with C# and Three.js for 3D programming. I am also an Indie
          Game Developer enthusiast and love creating engaging content for the
          developer community. <br></br> <br></br>I am passionate about sharing
          my knowledge and experience with others. As a proactive developer, I
          create tutorials on YouTube, offering step-by-step guidance for
          beginners and intermediate developers to build complete projects,
          focusing on 3D programming and game development. I also actively
          contribute to translation of docs, engage in programming communities,
          and participate in open-source projects to give back to the community.{' '}
          <br></br> <br></br> As a developer, my ultimate goal is to enhance my
          programming abilities to deliver exceptional solutions that truly
          benefit users and exceed the expectations of employers and clients.
        </p>
        <Timeline />
      </div>
    );
  }

  if (mesh && mesh.name === 'My Socials') {
    return (
      <div className="modal-content">
        <h2 className="modal-heading">My Socials</h2>
        <SocialCard
          platform="GitHub"
          link="https://github.com/theringsofsaturn"
          Icon={FaGithub}
        />
        <SocialCard
          platform="LinkedIn"
          link="https://www.linkedin.com/in/emilian-kasemi/"
          Icon={FaLinkedin}
        />
        <SocialCard
          platform="YouTube"
          link="https://www.youtube.com/c/EmilianKasemi"
          Icon={FaYoutube}
        />
        <SocialCard
          platform="Google Play Apps"
          link="https://play.google.com/store/apps/dev?id=6201646843189478498"
          Icon={FaGooglePlay}
        />
        <SocialCard
          platform="Instagram"
          link="https://www.instagram.com/the_rings_of_saturn/"
          Icon={FaInstagram}
        />
        <SocialCard
          platform="Goodreads"
          link="https://www.goodreads.com/user/show/140785582-emilian-kasemi"
          Icon={FaGoodreads}
        />
      </div>
    );
  }

  if (mesh && mesh.name === 'My Projects') {
    return (
      <div className="modal-content">
        <h2 className="modal-heading">My Projects</h2>
        <ProjectCard
          title="3D Portfolio Website"
          technologies="JavaScript, Three.js"
          videoSrc="src/assets/videos/portfolio3d.mp4"
        />
        <ProjectCard
          title="3D Art Gallery"
          technologies="JavaScript, Three.js"
          videoSrc="src/assets/videos/3D-art-gallery.mp4"
        />
      </div>
    );
  }

  return (
    <div className="modal-content">
      <h2 className="modal-heading">{mesh.name}</h2>
      <p>Content for {mesh.name}...</p>
    </div>
  );
};

export default ModalContent;
