import { ItemType, ActionType } from "../../components/types/types";
import { SEARCH_ITEM } from "../action/actionsTypes";

const initialState: ItemType[] = [];

/**
 * Редуктор для обработки действий, связанных с поиском элементов.
 */
const searchItemReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SEARCH_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default searchItemReducer;
