import UserModel from '../models/userModel';
import { encrypt, verified } from '../utils/pass.handle';
import { User } from './../types/userTypes';

const registerNewUser = async ({ email, password, username }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return 'Already_user';

    const passHash = await encrypt(password);
    const newUser = await UserModel.create(
        { email, password: passHash, username }
    );

    return newUser;
};

const loginUser = async () => { };

const getUsers = async () => {
    const responseGetUsers = await UserModel.find();
    return responseGetUsers;
};

export { registerNewUser, loginUser, getUsers };