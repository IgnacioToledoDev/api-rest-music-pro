import { compare, hash, hashSync } from "bcryptjs"

const encrypt = async (pass: string) => {
    const passwordHash = hashSync(pass, 8);

    return passwordHash;
};

const verified = () => { };

export { encrypt, verified };