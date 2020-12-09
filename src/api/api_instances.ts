import AuthAPI from 'api/auth_api';
import ChatAPI from 'api/chat_api';
import ChatUsersAPI from 'api/chat_users_api';
import UserAPI from 'api/user_api';

export const authApiInstance = new AuthAPI();
export const chatApiInstance = new ChatAPI();
export const chatUsersApiInstance = new ChatUsersAPI();
export const userApiInstance = new UserAPI();
