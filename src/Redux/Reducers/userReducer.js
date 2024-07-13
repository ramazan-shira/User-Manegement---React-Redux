import {
  DELETE_USER,
  SET_USER,
  SET_USER_TO_UPDATE,
  USER_TO_UPDATE,
  UPDATE_USER,
} from "../Actions/userActions";

const initialState = {
  users: [],
  isOnEdit: false,
  userToUpdate: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      const newUsers = state.users.filter(
        (user) => user.id !== action.payload.id
      );
      return {
        ...state,
        users: newUsers,
      };
    case SET_USER_TO_UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    case USER_TO_UPDATE:
      return {
        ...state,
        userToUpdate: action.payload.user,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            user.firstName = action.payload.firstName;
            user.lastName = action.payload.lastName;
            user.age = action.payload.age;
            user.email = action.payload.email;
          }
          return user;
        }),
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
