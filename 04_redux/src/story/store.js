import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer'
console.log('imstore');
const store= configureStore({
    
    reducer :{
        count:counterReducer
        
    }

})
export default store