import action from "../../../store/actions";

export function setNewUserId(value) {
  return dispatch => {
    dispatch({
      type: action.NEW_USER_ID,
      payload: value
    });
  };
}
