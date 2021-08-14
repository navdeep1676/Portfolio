import img from '../Img/img.jpeg'
import AboutDetails from './AboutDetails';
const ImageSection=()=>{
    return(
        <div className='ImageSection my-4  d-flex flex-lg-column flex-column  flex-sm-column flex-xl-row justify-content-around '>
            <div className='img me-3 mt-2 '>
                <img src={img} className='img-fluid mb-3' alt="my_image" />
            </div>
            <div className='about '>
                <h4>I am <span className='text-warning ms-2'>Navdeep</span></h4>
                <p style={{fontSize:'15px'}}>A dynamic, team spirited and performance driven professional ready to take a challenging and high-performance 
oriented role in the field of computer engineering to develop advanced projects with efficiency and quality.
                    </p>
                 <div className="about-details">
                     <AboutDetails type={'Name'} value={'Navdeep'} />
                     <AboutDetails type={'Age'} value={'21'} />
                     <AboutDetails type={'Nationality'} value={'Indian'} />
                     <AboutDetails type={'Languages'} value={'English,Hindi'} />
                     <AboutDetails type={'Address'} value={'HNo: 277 , Mandaura, Sonipat, Haryana'} />
                     <AboutDetails type={'Mobile No'} value={'8950338323'} />

                 </div>
                 <a className='btn btn-warning .btn_1 fw-bold' href="https://drive.google.com/file/d/11NQ-XL3GSR9kL-Coz2WgE0pvLRNE4hBa/view?usp=sharing" download>Download Resume</a>
            </div>
        </div>
    )
}
export default ImageSection;
