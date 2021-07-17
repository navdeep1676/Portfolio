import { useState } from "react";

const MenuItems=({menuitem})=>{
    return(
      
        <div className=' d-flex  flex-wrap'>
           
           {
               menuitem.map(item=>{
                   return(
                       <>
                        <div key={item.id} className='bg-dark rounded-3 border border-dark projects me-4 my-3' style={{width:'280px' }}>
                           <div className='mb-2 img border border-start-0 border-end-0 border-top-0 border-bottom-2 border-secondary'>
                           <img src={item.img} className='img-fluid w-100 ' style={{height:'300px',backgroundSize:'cover'}} alt={item.name} />
                           </div>
                           <div className='p-2 '>
                           <h5 >{item.name}</h5>
                           <p>{item.cat}</p>
                           
                           <a href={item.url} className='btn btn-success  mx-auto my-2'>Go to Project</a>
                          
                           </div>
                           
                                                 
                       </div>
                       

                       

                       </>
                      
                   )
               })
           }
        </div>
    )
}
export default MenuItems;