const SkillSection=({title,percentage,b_class})=>{
    return(
        <div className="SkillSection">
            <div className="skills-container my-3">
                <h5>{title}</h5>
        
                <div className="progress  ">
                <div className={b_class} role="progressbar" style={{width:`${percentage}`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <p className='text-white fw-bold mt-3'style={{fontSize:'15px'}}>{percentage}</p>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default SkillSection;