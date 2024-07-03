import {user} from '../../type'
export interface UserServiceInterface {
    getAllUsers(): Promise<user[]>;
    getUserById(id: number): Promise<user | undefined>;
    createUser(user: user): Promise<user>;
    updateUser(id: number, user: user): Promise<user | undefined>;
    deleteUser(id: number): Promise<void>;

}