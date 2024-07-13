export const SET_USER = "SET_USER";
export const DELETE_USER = "DELETE_USER";
export const SET_USER_TO_UPDATE = "SET_USER_TO_UPDATE";
export const USER_TO_UPDATE = "USER_TO_UPDATE";
export const UPDATE_USER = "UPDATE_USER";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const setUserToUpdate = (isOnEdit) => ({
  type: SET_USER_TO_UPDATE,
  payload: isOnEdit,
});

export const userToUpdate = (user) => ({
  type: USER_TO_UPDATE,
  payload: user,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});
