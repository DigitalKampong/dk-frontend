const initState = {
    count: 1
}

const addCountReducer = (state=initState, action: any) => {
    switch(action.type) {
        case 'ADD_COUNT':
            console.log("Redux is working dummy");
            console.log(action.count + state.count);
            return {
                count: action.count + state.count,
            }
        default:
            return state;
    }
}

export default addCountReducer;