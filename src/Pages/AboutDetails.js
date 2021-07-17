const AboutDetails=({type,value})=>{
    return(
        <>
        <div className="details d-flex">
            <p style={{fontSize:'15px'}}>{type}</p>
            <p style={{fontSize:'15px'}}>: {value}</p>
        </div>
        </>
    )
}
export default AboutDetails;