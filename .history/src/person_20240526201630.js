export default function Person({data}){
   
    
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
                        <li>{element.Etat}</li>
                    </ul>
                    
                }
            )
        }
       
   </div>
 
 </>
);
 

}