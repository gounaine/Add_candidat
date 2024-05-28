export default function Person({data, children}){
   
    
return(
 <>
    <div className="Card">
        {
            data.forEach(
                (element)=>{
                    console.log(element.firsTname);
                    
                }
            )
        }
       
   </div>
 
 </>
);
 

}