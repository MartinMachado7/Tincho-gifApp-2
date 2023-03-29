import {useState} from 'react'
import { AddCategiry, GifGrid } from './componets';



export const GifExpertApp = () => {

 const [categories, setCategories] = useState(['luffy']) ;



 const onAddCategory = (newCategory) =>{

 if(categories.includes(newCategory)) return;
  //console.log(NewCategory);
  setCategories ([ newCategory, ...categories])
}

 
 return (
    
    <>
 
     <h1>Tincho-_-GifApp</h1>


     <AddCategiry 

   

      onNewCategory={event => onAddCategory(event) }
      />
     
        {
        categories.map((category) => (
        
         <GifGrid key={category}
         category={category}
         />
          
        ))
        }
    
    

    </>
  )
}
