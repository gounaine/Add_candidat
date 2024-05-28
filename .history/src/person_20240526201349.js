export default function Person({data, children}){
   
    
return(
 <>
    <div className="Card">
        {
            data.forEach(
                (element)=>{
                    <ul>
                        <li>{element.firsTname}</li>
                        <li>{element.lastName}</li>
                        <li>{element.Age}</li>
                        <li>{Etat}</li>
                    </ul>
                    
                }
            )
        }
       
   </div>
 
 </>
);
 

}