import { nanoid } from "nanoid";
import { ADD_ITEM, DELETE_ITEM } from "../action/actionsTypes";
import { ItemType, ActionType } from "../../components/types/types";

const initialState: ItemType[] = [];
/**
 * Редуктор для обработки действий, связанных с отображением списка.
 */
const listsAddedFormReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { name, price } = action.payload as ItemType;
      return [...state, { id: nanoid(), name, price: Number(price) }];
    }
    case DELETE_ITEM: {
      const { id } = action.payload as ItemType;
      return state.filter((item) => item.id !== id);
    }
    default:
      return state;
  }
};

export default listsAddedFormReducer;
