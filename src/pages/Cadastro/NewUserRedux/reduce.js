import actions from "../../../store/actions";

const INICIAL_STATE_NEW_USER_ID = "";

export function newUserId(state = INICIAL_STATE_NEW_USER_ID, action) {
  switch (action.type) {
    case actions.NEW_USER_ID:
      let id = state;

      id = action.payload;

      return id;
    default:
      return state;
  }
}
