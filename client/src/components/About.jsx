import React from "react";
import style from "./About.module.css"
import iconoIn from "../assets/Linkedin.png"
import iconoGit from "../assets/github.png"
import photo from "../assets/Andrea.jpg"
import varios from "../assets/combinados.png"
import expre from "../assets/express.png"
import nodejs from "../assets/nodejs.png"
import react from "../assets/react.png"
import redux from "../assets/redux.png"

const AboutUs = () => {
    const card = [
        {
            name: "Andrea Buldorini",
            photoUrl: photo,
            description: "Full Stack web developer.",
            contacto: "Contáctame:",
            linkedinUrl:"https://www.linkedin.com/in/andrea-soledad-buldorini-462690113/",
            githubUrl: "https://github.com/settings/profile",
            linkedinIcon:iconoIn,
            githubIcon: iconoGit,
            varios: varios
          }]

          const teamMemberCards = card.map(
            (
              member //Luego, creamos las tarjetas del equipo (teamMemberCards) utilizando el nuevo array mezclado (shuffledTeamMembers). Finalmente, renderizamos las tarjetas de manera aleatoria en el componente div con la clase members.
            ) => (
              <div className={style.card}>
                <img src={member.photoUrl} alt={member.name} />
                <h2>{member.name}</h2>
                <p>{member.description}</p>
                <p>{member.contacto}</p>
                <div className={style.socialLinks}>
                  <a href={member.linkedinUrl} target="_blank">
                    <img src={member.linkedinIcon} alt="LinkedIn" />
                  </a>
                  <a href={member.githubUrl} target="_blank">
                    <img src={member.githubIcon} alt="Github" />
                  </a>

                </div>
              </div>
            )
          );
        
          return (
            <div>

            <div className={style.conteiner}>
              <div className={style.cointeinerCard}>
              <div className={style.member}>{teamMemberCards}</div>
              <p className={style.descrip}>
              <h1 className={style.h1}>💫 Acerca de mí:</h1>
              <br/>
              ¡Hola a todos! <br /> Hoy les presento mi proyecto integrador: "Rick and Morty". <br /> Con esta aplicación, podrán explorar el increíble universo de Rick and Morty, buscar personajes específicos por su id o descubrir personajes aleatorios. <br /> También podrán guardar sus personajes favoritos y aplicar filtros combinados. ¡Es una experiencia impresionante que muestra el potencial de la tecnología para brindar grandes experiencias en línea! <br /> ¡Gracias por su atención y los invito a disfrutar de "Rick and Morty"!
                <br />
                </p>
            </div>
            </div>
                <div className={style.conteinerIcono}></div>
                  <img className={style.img2} src={varios}></img> 
                  <img className={style.img} src={expre}></img> 
                  <img className={style.img} src={nodejs}></img>
                  <img className={style.img} src={redux}></img>
                  <img className={style.img} src={react}></img>
               
            </div>
          );
        }
    

export default AboutUs;
