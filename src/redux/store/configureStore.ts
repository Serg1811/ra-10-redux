import { combineReducers, compose, legacy_createStore } from "redux";
import inputsFieldsReducer from "../reducer/inputsFieldsReducer";
import listsAddedFormReducer from "../reducer/listsAddedFormReducer";
import searchItemReducer from "../reducer/searchItemReducer";

const ReactReduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  return legacy_createStore(
    combineReducers({
      inputsFields: inputsFieldsReducer,
      listsAddedForm: listsAddedFormReducer,
      searchItem: searchItemReducer,
    }),
    compose(ReactReduxDevTools)
  );
};

export default configureStore;
