import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userNonAdm = this.usersRepository.findById(user_id);

    if (!userNonAdm) {
      throw new Error("User don't exists!");
    }

    const user = this.usersRepository.turnAdmin(userNonAdm);

    return user;
  }
}

export { TurnUserAdminUseCase };
