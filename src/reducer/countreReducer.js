

export const counterReducer = (state =0, action) => {
    if (action.type === 'INCREMENT'){
        return state + 1
    }
    if(action.type === 'DECREMENT'){
        if (state > 0){
            return state - 1

        }
    }
    if(action.type === 'INCREMENTTEN'){
        return state + 10
    }
    if(action.type === 'DECREMENTTEN'){
        if (state > 10){
            return state - 10

        }
    }
    else if(action.type === 'RESET'){
          return 0
    }
    return state
}