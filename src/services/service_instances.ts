import {userStoreInstance, chatsStoreInstance} from '../stores/store_instances';
import LoginService from './login_service';
import LogoutService from './logout_service';
import RegisterService from './register_service';
import CheckAuthService from './check_auth_service';
import ChatsService from './chats_service';
import AccountService from './account_service';
import CreateChatService from './create_chat_service';
import {authApiInstance, userApiInstance, chatApiInstance} from '../api/api_instances';

export const checkAuthService = new CheckAuthService(userStoreInstance, authApiInstance);
export const registerService = new RegisterService(userStoreInstance, authApiInstance);
export const loginService = new LoginService(userStoreInstance, authApiInstance);
export const logoutService = new LogoutService(userStoreInstance, authApiInstance);
export const accountService = new AccountService(userStoreInstance, authApiInstance, userApiInstance);
export const chatsService = new ChatsService(chatsStoreInstance, chatApiInstance);
export const createChatsService = new CreateChatService(chatsStoreInstance, chatApiInstance);
