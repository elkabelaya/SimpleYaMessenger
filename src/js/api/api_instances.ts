import HTTPTransport from "../utils/http_transport/http_transport";

export const authApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2/auth");
export const chatApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2/chats");
export const chatUsersApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2/chats/users");
export const leaderboardApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2/leaderboard");
export const oauthApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2/oauth");
export const userApiInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2/user");
