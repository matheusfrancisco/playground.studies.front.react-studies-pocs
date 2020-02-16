import React from 'react';
import css from '../public/style.scss';
import { FaGithub, FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa';


const ProfileInformation = () => {
    return(
      <div className={css.profile__info}>
            <p className={css.profile__info__name}>(str "Matheus Francisco", "nickname : Xico")</p>

            <p className={css.profile__info__work}> Software Engineer, Functional lover,  Python,  Clojure, Typescript, Artificianl Intelligence,<br/>
              Machine Learning.</p>

            <div className={css.profile__info__contact}>
              <dl className={css.contacts__list}>
                <dt>Email:</dt>
                <dd><a>
                  m AT matheusfrancisco DOT com DOT br
                </a></dd>
                <dt>Address:</dt> <dd>Brazil, São Paulo, SP</dd>
              </dl>
            </div>

            <p className={css.profile__info__social}>
              <a href="https://github.com/matheusfrancisco"> <i><FaGithub/></i></a>
              <a href="https://www.linkedin.com/in/matheus-francisco/"> <FaLinkedin/></a>
              <a href="youtube.com.br"> <FaYoutube/></a>
              <a href=""> <FaTelegram/></a>
            </p>
      </div>
    )
};

const ProfileImage = () => {
  return (
    <div className={css.profile__img}>
      <img src="images/foto-perfil.jpeg"></img>
    </div>
  )
}

const Profile = () =>{
  return (
  <>
    <div className={css.profile}>
      <ProfileImage/>
      <ProfileInformation/>
    </div>
  </>
  );
}

const BodyInformation = () => {
  return (
    <div className={css.descriptions}>
        <div className={css.descriptions__informations}>
              <h1> ( println "Hello" )</h1>

              <p>
                (println “I’m a <b>Software Engineer</b> at Gupy and <b>Computer Engineer</b> at <b>UFSC.</b>”  “
              </p> 
              <p> 
                Love study about paradigms, design principals, software architecture and good practices about testing software.
              </p> 
              <p> 
                I belive that through technology we can impact and improve lives. ”  ) 
              </p>
        </div>

    </div>
  )
}


const Content = () => {
  return (
    <>
      <div className={css.content}>
          <Profile/>
          <BodyInformation/>

      </div>
    </>
  )
}

const Nav = () => {
 return (
  <div className={css.menu}>
    <nav>
      <ul>
        <li><a href="#hello">Home</a></li>
        <li><a href="/blog/index.html">Blog</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#ideas">Ideas</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
 )
}




const Home = () => (
  <>
    <Nav/>
    <Content/>
  </>
);


export default Home;
