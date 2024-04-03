import { ActionType, ChangeItemType } from "../../components/types/types";
import { CHANGE_ITEM, EDIT_ITEM } from "../action/actionsTypes";

/**
 * Интициализация глобального state для inputFields
 */

const initialState = {
  name: "",
  price: "",
};

/**
 * Редуктор для обработки действий, связанных с полями ввода.
 */
const inputsFieldsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case CHANGE_ITEM: {
      const { name, value } = action.payload as ChangeItemType;
      return { ...state, [name]: value };
    }
    case EDIT_ITEM:
      return action.payload;

    default:
      return state;
  }
};

export default inputsFieldsReducer;
