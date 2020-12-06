import AuthAPI from "./auth_api";
import ChatAPI from "./chat_api";
import ChatUsersAPI from "./chat_users_api";
import UserAPI from "./user_api";


export const authApiInstance = new AuthAPI();
export const chatApiInstance = new ChatAPI();
export const chatUsersApiInstance = new ChatUsersAPI();
export const userApiInstance = new UserAPI();
