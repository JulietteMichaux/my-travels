import  React  from  'react';

const  GenerateSimpsonsQuote = ({ selectQuote }) => {
    return (
        <div  className="GenerateSimpsonsQuote">
        <button  onClick={selectQuote}>Get quote</button>
        </div>
    );
};

export  default  GenerateSimpsonsQuote;