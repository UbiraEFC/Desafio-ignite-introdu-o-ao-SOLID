import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const userFound = this.usersRepository.findById(user_id);

    if (userFound.admin !== true) {
      throw new Error("User don't is an Admin!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
