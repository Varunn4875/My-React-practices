import { configureStore} from '@reduxjs/toolkit'
import counterReducer from './reducer'

const store=configureStore({
    reducer:{
        count: counterReducer
        //this count key stores the value of the counterreducer function in
        //reducer.js
      
    }
})
export default store