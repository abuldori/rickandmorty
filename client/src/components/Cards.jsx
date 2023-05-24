import Card from './Card';
import style from "./Cards.module.css"


const Cards = ({ characters, onClose }) => {
   return (
   <div className= {style.container}>
      {characters.map((char, i)=>{
         
      return <Card 
               key={i}
               id={char.id}
               name={char.name}
               species={char.species}
               gender={char.gender}
               image={char.image}
               onClose={onClose}
                />
      })}
   </div>);
}

export default Cards;
