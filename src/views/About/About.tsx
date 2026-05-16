import { useState } from 'react';
import styles from './About.module.css';

import profilePic2 from '../../assets/images/profile-photo2.jpg';

import rainier from '../../assets/images/mount-rainier.jpg';
import cosmo from '../../assets/images/cosmo.jpg';
import zion from '../../assets/images/zions.jpg'
import inShop from '../../assets/images/shopPhotos/inShop-about.jpg'
import fixingTruck from '../../assets/images/fixingTruckWithNate.jpg'

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const techStack = [
    'Cloud Deployment',
    'Self-hosted Deployment',
    'Docker',
    'SQL',
    'Dynamo/MongoDB',
    'C/C++',
    'git',
    'python',
    'React',
    'TypeScript',
    'Vite',
    'CSS',
    'Node.js',
    'Machine Learning',
    'Deep Learning',
    'AI Assistant Tools',
    'Linux '
  ];
  // Swap these with your imported image variables once they are ready.
  const carouselImages = [zion, cosmo, rainier, inShop, fixingTruck];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.profileSection}>
          <div className={styles.profileImageWrapper}>
            <img src={profilePic2} alt="Professional headshot" className={styles.profileImage} />
            <div className={styles.imagePlaceholder}>Profile Photo</div>
          </div>
          <div className={styles.contactInfo}>
            <a href="mailto:dallin@djackson.dev" className={styles.contactItem}>
              <span className={styles.contactLabel}>Email:</span> dallin@djackson.dev
            </a>
            <a href="tel:+7209370192" className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone:</span> (720) 937-0192
            </a>
          </div>


        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.bioIntro}>
            I am a Software Engineer hoping to help apply the advancements of technology to valuable industries.
            Whether it's building AI models to enhance medical tooling, automating logistics so companies can grow,
            or anything that helps an endeavor take its next step, I get excited about it. Clean, structured code is
            important to me and I take pride in a good implementation of Software. Whatever the challenge, I am confident
            there is a valuable way I can help your company, startup, small business, or process enjoy the benefits of
            Software. If you would like to work with me please reach out, I would be happy to talk.
          </p>

        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.bio}>
          <h2>My Journey</h2>
          <p>
            My professional journey has been driven by a love for creating tools that advance our capacities.
            I started as a Mechanical Engineering student hoping to go into medical robotics. In taking into to
            Computer Science courses I found the challenge difficult but rewarding. In time I switched my educational
            pursuits to Computer Science. Throughout my education I have found ways to keep creating tools for others.
            I was able to build a e-commerce website for my sister's crochet buisiness, build simulators and research
            applications for an AI-Human Interaction lab at BYU, and start a small company to build a self hosted Github
            alternative. My course work has emphasized Software Engineering principles and practices along with AI/ML
            model creation. Ending my education as a BYU Computer Science undergrad in the Winter, I am looking to
            connect with orgainizations where I can offer what I have learned.
          </p>
        </section>

        <section className={styles.skills}>
          <h2>Tech Stack</h2>
          <ul className={styles.techList}>
            {techStack.map((tech) => (
              <li key={tech} className={styles.techItem}>
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.personal}>
          <h2>Personal Life</h2>
          <p>
            When I am not at the keyboard, you can find me spending time with friends and family.
            In most of my pictures I am with my wife, Taylor, we've been married a few years now.
            We enjoy National Parks and hiking through them. When we aren't doing that we are
            with family and friends, making fun food, or checking out a movie. I still love the
            hands on creation process I got from working in a machine shop as a freshman, so I am
            often somewhere building a computer, checking off house projects, or volunteering as an
            EMT when I have the time.
          </p>
        </section>

        <section className={styles.carouselSection}>
          <div className={styles.carouselContainer}>
            <button onClick={prevSlide} className={styles.carouselBtn}>&#8592;</button>

            <div className={styles.slideView}>
              <img className={styles.slideImage} src={carouselImages[currentSlide]}>
              </img>
            </div>

            <button onClick={nextSlide} className={styles.carouselBtn}>&#8594;</button>
          </div>
          <div className={styles.carouselIndicators}>
            {carouselImages.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
