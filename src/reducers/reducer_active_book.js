//State argument is not application state, on the
//state this reduce is responsible for.
export default function(state = null, action) {
    switch(action.type) {
    case 'BOOK_SELECTED':
        console.log("Was clicked");
        return action.payload;
    }
    
    return state;
}