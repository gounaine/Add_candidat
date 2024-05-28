export default function Person({data, children}){
   
    
return(
 <>
    <div className="Card">
        {
            data.forEach(
                (element)=>{
                    <ul>
                        <li>{}</li>
                        <li>{}</li>
                        <li>{}</li>
                        <li>{}</li>
                    </ul>
                    
                }
            )
        }
       
   </div>
 
 </>
);
 

}