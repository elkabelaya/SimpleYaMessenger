import {userStoreInstance, chatsStoreInstance} from 'stores/store_instances';
import LoginService from 'services/login_service';
import LogoutService from 'services/logout_service';
import RegisterService from 'services/register_service';
import CheckAuthService from 'services/check_auth_service';
import ChatsService from 'services/chats_service';
import AccountService from 'services/account_service';
import CreateChatService from 'services/create_chat_service';
import {authApiInstance, userApiInstance, chatApiInstance} from 'api/api_instances';

export const checkAuthService = new CheckAuthService(userStoreInstance, authApiInstance);
export const registerService = new RegisterService(userStoreInstance, authApiInstance);
export const loginService = new LoginService(userStoreInstance, authApiInstance);
export const logoutService = new LogoutService(userStoreInstance, authApiInstance);
export const accountService = new AccountService(userStoreInstance, authApiInstance, userApiInstance);
export const chatsService = new ChatsService(chatsStoreInstance, chatApiInstance);
export const createChatsService = new CreateChatService(chatsStoreInstance, chatApiInstance);
