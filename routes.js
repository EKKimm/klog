//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//user
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//writing
const WRITING = "/writing";
const UPLOAD = "/upload";
const WRITING_DETAIL = "/:id";
const EDIT_WRITING = "/:id/edit";
const DELETE_WRITING = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  writing: WRITING,
  upload: UPLOAD,
  writingDetail: WRITING_DETAIL,
  editWriting: EDIT_WRITING,
  deleteWriting: DELETE_WRITING
};

export default routes;
