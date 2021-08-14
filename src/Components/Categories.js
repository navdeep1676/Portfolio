const Categories=({filter,categorie})=>{
    return(
        <div className='my-4'>
           {
               categorie.map((item,i)=>{
                   return(
                       <button key={i} className='btn text-white btn-primary me-3' onClick={()=>{filter(item)}}>{item}</button>
                   )
               })
           }
        </div>
    )
}
export default Categories;
