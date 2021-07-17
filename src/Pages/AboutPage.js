import ServiceSection from '../Components/ServiceSection'
import SkillSection from '../Components/SkillSection'
import Title from '../Components/Title'
import ImageSection from './ImageSection'
import ui from '../Img/ui.png'
import reactimg from '../Img/react.png'
import nodeimg  from '../Img/node-js-main.jpg'
const AboutPage=()=>{
    return(
        <div className=''>
            <Title title={'About Me'} span ={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span ={'My Skills'} />
            <SkillSection b_class={'progress-bar progress-bar-striped bg-primary'} title={'HTML 5'} percentage={'95%'}/>
            <SkillSection b_class={'progress-bar progress-bar-striped bg-secondary'} title={'CSS 3'} percentage={'90%'}/>
            <SkillSection b_class={'progress-bar progress-bar-striped bg-success'} title={'JavaScript (ES6)'} percentage={'80%'}/>
            <SkillSection b_class={'progress-bar progress-bar-striped bg-danger'} title={'JQuery'} percentage={'85%'}/>
            <SkillSection b_class={'progress-bar progress-bar-striped bg-warning'} title={'BootStrap'} percentage={'90%'}/>
            <SkillSection b_class={'progress-bar progress-bar-striped bg-info'} title={'Photoshop'} percentage={'90%'}/>
            <SkillSection b_class={'progress-bar progress-bar-striped bg-dark'} title={'Responsive Web Designs'} percentage={'90%'}/>
            <SkillSection b_class={'progress-bar progress-bar-striped bg-primary '}  title={'React.js'} percentage={'80%'}/>
            <Title title={'Services'} span ={'Services'} />
            <div className='d-flex justify-content-between mt-4'>
            <ServiceSection title={'UI Developer'}    img={ui} />
            <ServiceSection title={'React Developer'}  img={reactimg}/>
            <ServiceSection title={'Node Developer'}  img={nodeimg}/>
            </div>

        </div>
    )
}
export default AboutPage;