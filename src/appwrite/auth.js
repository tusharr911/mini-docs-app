import conf from "../conf/conf";
import { Client, ID, Account } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.loginAccount({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite Service Error:: createAccount", error);
    }
  }

  async loginAccount({ email, password }) {
    try {
      const userAccount = await this.account.createEmailPasswordSession(
        email,
        password
      );
      if (userAccount) {
        const JWT = await this.account.createJWT();
        console.log(JWT);
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite Service Error:: loginAccount", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service Error:: getCurrentUser", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service Error:: logout", error);
    }
  }
}

const authService = new AuthService();
export default authService;
