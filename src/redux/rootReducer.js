import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { appReducer } from "./appReducer";
import { contactsReducer } from "./contactsReducer";
import { reducer as reduxFormReducer } from "redux-form";

export const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  form: reduxFormReducer,
  contacts: contactsReducer,
});
