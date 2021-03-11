import {
  FilterState,
  FilterAction,
  FilterActionTypes,
} from "./../../types/Filter";

const initialization: FilterState = {
  byFilter: "all",
};

function filteReducer(state = initialization, action: FilterAction) {
  switch (action.type) {
    case FilterActionTypes.SET_FILTER:
      return {
        ...state,
        byFilter: action.payload,
      };

    default:
      return state;
  }
}

export default filteReducer;
