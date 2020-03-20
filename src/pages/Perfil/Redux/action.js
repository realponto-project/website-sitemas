import action from "../../../store/actions";

export function updateUserAction(value) {
  return dispatch => {
    dispatch({
      type: action.USER.UPDATE,
      payload: value
    });
  };
}
