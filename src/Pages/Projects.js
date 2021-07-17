import { useState } from "react"
import { AllProjects } from "../Components/AllProjects"
import Categories from '../Components/Categories'
import MenuItems from '../Components/MenuItems'
import Title from '../Components/Title'
const allCat=['All',...new Set(AllProjects.map(item=>item.cat))]
const Projects=()=>{
    const [categories,setCategories]=useState(allCat)
    const [menu,setMenu]=useState(AllProjects)
    const filter=(category)=>{
        if(category==='All'){
            setMenu(AllProjects)
            return
        }
        const filteredData=AllProjects.filter( item=>{
           return item.cat===category
        })
        setMenu(filteredData)
    }
    return(
        <div className='MiniProject'>
            <Title title={'Mini Projects'} span={'Mini Projects'}/>
           <div className=''>
               
                   <Categories  filter={filter} categorie={categories}/>
                   <MenuItems className='' menuitem={menu}/>
        
           </div>
        </div>
    )
}
export default Projects;