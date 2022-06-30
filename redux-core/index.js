const redux = require('./redux-core/node_modules/redux');
const combineReducers = redux.combineReducers;


//actions
const TheoryClass = "TheoryClass";
const TheoryClassCancel = "TheoryClassCancel";

function theoryClass() {
    return {
        type: TheoryClass,
    }

}

function theoryClassCancel() {
    return {
        type: TheoryClassCancel,
    }

}

const PracticalClass = "PracticalClass";
const PracticalClassCancel = "PracticalClassCancel";

function practicalClass() {
    return {
        type: PracticalClass,
    }
}

function practicalClassCancel() {
    return {
        type: PracticalClassCancel,
    }

}

//reducers (state, action)

const initialState = {
    countOfTheoryClass: 0,
}

const initialPracticalState = {
    countOfPracticalClass: 0,
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case TheoryClass:
            return {
                ...state,
                countOfTheoryClass: state.countOfTheoryClass + 1,
            }
        case TheoryClassCancel:
            return {
                ...state,
                countOfTheoryClass: state.countOfTheoryClass - 1,
            }
        default:
            return state;
    }
}


const reducersPractical = (state = initialPracticalState, action) => {
    switch (action.type) {
        case PracticalClass:
            return {
                ...state,
                countOfPracticalClass: state.countOfPracticalClass + 1,
            }
        case PracticalClassCancel:
            return {
                ...state,
                countOfPracticalClass: state.countOfPracticalClass - 1,
            }
        default:
            return state;
    }
}


//store

const createStore = redux.createStore;

const rootReducer = combineReducers({
    theoryClassReducer: reducers,
    practicalClassReducer: reducersPractical,
})
const store = createStore(rootReducer);
console.log('initial state', store.getState());

//subscribe- how the sore is updated

const unsubscribe = store.subscribe(() =>
    console.log('Present State ', store.getState())
)

//access the store

// store.dispatch(theoryClass());
// store.dispatch(theoryClass());
// store.dispatch(theoryClassCancel());
// store.dispatch(practicalClass());

//bindActionCreators(actionCreator, dispatch)

const bindActionCreators = redux.bindActionCreators;

const action = bindActionCreators({ theoryClass, theoryClassCancel }, store.dispatch);
const practicalAction = bindActionCreators({ practicalClass, practicalClassCancel }, store.dispatch);

action.theoryClass();
action.theoryClass();
action.theoryClassCancel();
practicalAction.practicalClass();
practicalAction.practicalClass();
practicalAction.practicalClassCancel();

//call unsubscribe to stop the store from updating
unsubscribe();