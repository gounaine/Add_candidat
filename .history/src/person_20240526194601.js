export default function Person({firstName ,lastName,Age, children}){
return(
 <>
   <div className="Card">
        <h3>Age:{Age}</h3>
        <h3>firstName:{firstName}</h3>
        <h3>lastName:{lastName}</h3>
        <h3>{children}</h3>
   </div>
 
 </>
);
 

}