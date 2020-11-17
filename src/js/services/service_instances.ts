import { userStoreInstance, chatStoreInstance } from "../stores/store_instances";
import LoginService from "./login_service";
import LogoutService from "./logout_service";
import RegisterService from "./register_service";
import CheckAuthService from "./check_auth_service";
import ChatsService from "./chats_service";
import AccountService from "./account_service";

export const checkAuthService = new CheckAuthService(userStoreInstance);
export const registerService = new RegisterService(userStoreInstance);
export const loginService = new LoginService(userStoreInstance);
export const logoutService = new LogoutService(userStoreInstance);
export const accountService = new AccountService(userStoreInstance);
export const chatsService = new ChatsService(chatStoreInstance);
