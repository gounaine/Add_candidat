export default function Person({data, children}){
   
    
return(
 <>
    <div className="Card">
        
        {
            data.forEach(
                (element)=>{
                    <ul>
                        <li>{console.log(element.firsTname)}</li>
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