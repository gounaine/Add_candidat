export default function Person({data}){
   
    
return(
 <>
    <div className="Card">
        
      
            
                    <ul>
                        <li>{data[0].firsTname}</li>
                        <li>{data[0].lastName}</li>
                        <li>{data[0].Age}</li>
                        <li>{data[0].Etat}</li>
                    </ul>
                    
       
       
   </div>
 
 </>
);
 

}