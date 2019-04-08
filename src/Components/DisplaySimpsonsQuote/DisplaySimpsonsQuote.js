import  React  from  'react';

const  DisplaySimpsonsQuote = ({ exemple }) => {
    return (
        <div  className="element">
            <img  src={exemple.image}  alt="picture"  />
            <ul>
                <li>Quote : {exemple.quote}</li>
                <li>
                    Character : {exemple.character}</li>
               <li>
                    CharacterDirection : {exemple.characterDirection},
               </li>
            </ul>
        </div>
    );
};


export  default  DisplaySimpsonsQuote;