import Head from 'next/head';
import BasePathLink from '@helpers/BasePathLink';
import { FaGithub, FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa';
import perfilFoto from '@images/foto-perfil.jpeg';

const ProfileInformation = () => {
  return(
    <div className="profile__info">
          <p className="profile__info__name">(str "Matheus Francisco", "nickname : Xico")</p>

          <p className="profile__info__work"> Software Engineer, Functional lover,  Python,  Clojure, Typescript, Artificianl Intelligence,<br/>
            Machine Learning.</p>

          <div className="profile__info__contact">
            <dl className="contacts__list">
              <dt>Email:</dt>
              <dd><a>
                m AT matheusfrancisco DOT com DOT br
              </a></dd>
              <dt>Address:</dt> <dd>Brazil, São Paulo, SP</dd>
            </dl>
          </div>

          <p className="profile__info__social">
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
    <div className="profile__img">
      <img src={perfilFoto}></img>
    </div>
  )
}
  
const Profile = () => {
  return (
  <>
    <div className="profile">
      <ProfileImage/>
      <ProfileInformation/>
    </div>
  </>
  );
};
  
const BodyInformation = () => {
  return (
    <div className="descriptions">
        <div className="descriptions__informations">
              <p>
                <h1> ( println "Hello" )</h1>

                (println “I’m a <b>Software Engineer</b> at Gupy and <b>Computer Engineer</b> at <b>UFSC.</b>”  “
                Love study about paradigms, design principals, software architecture and good practices about testing software.
                I belive that through technology we can impact and improve lives. ”  ) 
              </p>
        </div>
  
    </div>
  )
}
  
const Content = () => {
  return (
    <>
      <div className="content">
          <Profile/>
          <BodyInformation/>
  
      </div>
    </>
  )
}
  





const Nav = () => {
  return (
   <div className="menu">
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
 

export default function Home() {
  // <Head> adds/replace attributes in <head> DOM element, such as the <title> element
  // If <Head> is not provided, it will default to that found in `_app.js`
  return (
    <React.Fragment>
      <Head>
        <title>Matheus Francisco</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
      </Head>
      <Nav/>
      <Content/>

    </React.Fragment>
  );
};

