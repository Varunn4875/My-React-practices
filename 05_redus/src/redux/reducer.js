//chef 
//this state can be rendered by default value also state={current_value:20}
const counterReducer=(state={current_value:0},action)=>{
    //the state will store the count key value in store.js
    console.log(action);  //the dispatch in the app.js took this console
    if (action.type ==="INCREMENT"){
        return {current_value:state.current_value+1}
    }
    return state
      
}
export default counterReducer