export default function Person({data, children}){
    console.log(data)
return(
 <>
   { <div className="Card">
       {
        data.forEach(data => {
            console.log(data)
            
        });
       }
   </div>
  }
 </>
);
 

}