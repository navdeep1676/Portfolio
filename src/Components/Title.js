const Title=(props)=>{
    return(
        <div className='title my-4'>
            <h3 className='text-uppercase'>{props.title}
            <span>{props.span}</span>
            </h3>
        </div>
    )
}
export default Title;