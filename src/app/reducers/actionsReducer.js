
import assign from 'object-assign';

export default function actionItems(state = { events : {currentEvents : []} , selectedEvents: []}, action){

    switch(action.type) {
        case  'FETCH_EVENTS' : {
            console.log('reducer called');
            var newState = assign({} , state , {events : { currentEvents : action.payload}} ); 
            return newState;
        }
        case "EVENTS_SELECTION" : {
            console.log('reducer called');
            var newState = assign({} , state , {selectedEvents : action.payload});
            return newState;
        }
        default : {
            return state
        }
    }
}