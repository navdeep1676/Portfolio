const Categories=({filter,categorie})=>{
    return(
        <div className='my-4'>
           {
               categorie.map((item,i)=>{
                   return(
                       <button key={i} className='btn text-white' onClick={()=>{filter(item)}}>{item}</button>
                   )
               })
           }
        </div>
    )
}
export default Categories;