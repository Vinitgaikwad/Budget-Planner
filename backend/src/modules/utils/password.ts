import bcrypt from "bcrypt"

const saltRounds = process.env.BCRYPT_SALT_ROUNDS || 12;

export async function hashPassword(password: string) {
    return await bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
}