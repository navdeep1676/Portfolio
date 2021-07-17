import Categories from '../Components/Categories'
import MenuItems from '../Components/MenuItems'
import Title from '../Components/Title'
import {AllMiniProjects} from '../Components/AllMiniProjects'
import { useState } from 'react'
const allCat=['All',...new Set(AllMiniProjects.map(item=>item.cat))]
 
const Miniproject=()=>{
    const [categories,setCategories]=useState(allCat)
    const [menu,setMenu]=useState(AllMiniProjects)
    const filter=(category)=>{
        if(category==='All'){
            setMenu(AllMiniProjects)
            return
        }
        const filteredData=AllMiniProjects.filter( item=>{
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
export default Miniproject;