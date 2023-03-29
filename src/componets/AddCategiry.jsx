import {useState} from 'react'


export const AddCategiry = ({onNewCategory}) => {
   
    const [imputValue, setImputValue] = useState('');
    const onInputChage = ({target}) =>  {
         setImputValue(target.value);        
    }
    const onSubmit = (event) => {
        event.preventDefault();
       if(imputValue.trim().length <=1) return;

      //  setCategories(categories => [imputValue, ...categories]);  
      onNewCategory(imputValue.trim());
       setImputValue('');
        
    }


  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input
        type ="texst"
        placeholder='Hala, soy goku'
        value={imputValue}
        onChange={onInputChage}
        />
    </form>
  )
}
