import { FilterAction, FilterActionTypes } from "../../types/Filter";

export const setFilter = (payload: FilterAction) => ({
  type: FilterActionTypes.SET_FILTER,
  payload,
});
