import FetchFactory from "../factory";
import Routes from "../routes.client";
import type { IUser} from "~/types/model";

class AuthModule extends FetchFactory {
  private readonly RESOURCE = Routes.User;
  async authenticate() {
    return this.call<IUser>(
        {
          method: 'GET', url: `${this.RESOURCE.Authenticate()}`
        }
    )
  }
}

export default AuthModule;