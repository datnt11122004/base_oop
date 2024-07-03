import {UserServiceInterface} from "./ServiceInterface/UserServiceInterface";
import {user} from '../type/index';
import {UserRepository} from "../repository/index";

export class UserService implements UserServiceInterface{

    private userRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    getAllUsers(): Promise<user[]> {
        return this.userRepository.getAll();
    }

    getUserById(id: number): Promise<user | undefined> {
        return this.userRepository.getById(id);
    }

    createUser(user: user): Promise<user> {
        return this.userRepository.create(user);
    }

    updateUser(user: user): Promise<user | undefined> {
        return this.userRepository.update(user);
    }

    deleteUser(id: number): Promise<void> {
        return this.userRepository.delete(id);
    }

}