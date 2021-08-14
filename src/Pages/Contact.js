import ContactItem from "../Components/ContactItems"
import Title from '../Components/Title'

const Contact=()=>{
    return(
        <div style={{height:'100vh'}}>
        <Title title={"Contact"} span={'Contact'}/>
        <div className='d-flex flex-wrap mt-5 justify-content-xs-center justify-content-sm-center justify-content-md-center justify-content-lg-around'>
            <div className='map-sec me-xs-0 me-sm-0 me-md-0 me-lg-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6986.770471646805!2d76.99275607296295!3d28.886898323198764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0xe5a485e2ac7c3d4a!2sMandaura%2C%20Haryana%20131103!5e0!3m2!1sen!2sin!4v1626487237656!5m2!1sen!2sin"  style={{width:'400px',height:'450px'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className='contact-sect ms-xs-0 ms-sm-0  ms-md-0 ms-lg-0 ms-xl-4 mt-xs-4 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-0 mt-4'>
                <ContactItem  title={'Phone:'} text1={'+91 8950338323'} text2={'+91 8264954234'}  icons={`fas fa-phone-square  m-4`}/>       
                <ContactItem  title={'Email:'} text1={'navdeepd853@gmail.com'} text2={'navdeepdahiya753@gmail.com'} icons={`fas fa-envelope m-4`}/>
                <ContactItem  title={'Address:'} text1={'HNo:277 Mandaura'} text2={'Sonipat, Haryana (131103)'} icons={`fas fa-address-card m-4`}/>

            </div>
        </div>
        </div>
        
    )
}
export default Contact