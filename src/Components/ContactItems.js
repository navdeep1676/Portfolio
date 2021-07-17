const ContactItem=({icons,title,text1,text2})=>{
    return(
        <div className='d-flex  bg-warning w-100 mb-3 p-3 rounded-3 text-white'>
           <i className={icons} style={{fontSize:'50px'}}></i>
           <div>
               <h4>{title}</h4>
               <p className='my-2 fw-bold'>{text1}</p>
               <p className='my-2 fw-bold'>{text2}</p>
           </div>
            
        </div>
    )
}
export default ContactItem