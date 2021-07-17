
const ServiceSection=({img,title})=>{
    return(
            <div className='services border border-secondary border-2 rounded-3 bg-info ' style={{width:'300px'}}>
                <div className='img'>
                    <img src={img} className='img-fluid rounded-3 w-100' style={{width:'300px',height:'150px'}} alt="" />
                </div>
                <h4 className='text-center my-2 text-dark fw-bold'>{title}</h4>
                
            </div>
        
    )
}
export default ServiceSection;