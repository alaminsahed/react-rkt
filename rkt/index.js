const store = require('./app/store');

const theoryActions = require('./features/theory/theorySlice.js').theoryActions;
const practicalActions = require('./features/pactrical/pactricalSlice.js').practicalActions;
//const usersActions = require('./features/users/userSlice.js').usersActions;
const fetchUser = require('./features/users/userSlice.js').fetchUser;

console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated State ', store.getState())
})


store.dispatch(theoryActions.theoryClass());
store.dispatch(practicalActions.practicalClass());
store.dispatch(theoryActions.theoryClassCancel());
store.dispatch(practicalActions.practicalClassCancel());
store.dispatch(theoryActions.theoryClass());
store.dispatch(fetchUser());
