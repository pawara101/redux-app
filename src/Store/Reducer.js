const initialState = {
    message : 'Suscribe to Simplilearn'
}

const reducer = (state = initialState,action) =>{
    const newState = {...state}

    if(action.type === 'Message chnage'){
        newState.message = "Thank you for Subscribing...."
    }
    return newState;
};

export default reducer;