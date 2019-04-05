
export default ({ dispatch }) => next => action => {

    //checkt to seee if the action 
    // has a propmise on its 'payload' property
    // if ti does, then wait for it to resolve
    // if it doesn`t, then send the action on the 
    // next middleware

    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // wait for the promise to resolve then create new action with that data and dispatch it 

    action.payload.then(function (response) {
        const newAction = { ...action, payload: response }
        dispatch(newAction)
    })

}


