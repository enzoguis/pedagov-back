import { User } from "@/domain/authentication/enterprise/entities/user";

export class UserPresenter {
  static toHTTP(user: User){
    return {
      id: user.id.toString(),
      name: user
    }
  }
}
