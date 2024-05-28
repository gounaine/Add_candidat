export default function Person({firstName ,lastName,Age, children}){
return(
 <>
   <div className="Card">
        <h2>Age:{Age}</h2>
        <h2>firstName:{firstName}</h2>
        <h2>lastName:{lastName}</h2>
   </div>
 
 </>
);
 

}