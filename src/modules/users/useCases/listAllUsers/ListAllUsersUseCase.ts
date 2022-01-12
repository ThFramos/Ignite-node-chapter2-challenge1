import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }): User[] {
    const userIsAdmin = this.usersRepository.findById(user_id).admin;

    if (!userIsAdmin) throw new Error("user is not Admin!");
    const all = this.usersRepository.list();
    return all;
  }
}

export { ListAllUsersUseCase };
