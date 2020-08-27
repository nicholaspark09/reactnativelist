import NetworkResponse from "./model/NetworkResponse"

interface Api {
  url: string;
  getUsers: () => Promise<NetworkResponse<Array<User>>>;
}
