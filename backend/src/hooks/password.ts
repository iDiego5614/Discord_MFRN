import * as bcrypt from "bcrypt"

export const hashPassword = async (password : string) =>
{
  const salt = await bcrypt.genSalt(10)

  const hashedPassword = await bcrypt.hash(password , salt)

  return hashedPassword
}

export const comparePassword = async (password : string , hashedPassword : string | undefined) =>
{
  // The password is unfefined
  if (!hashedPassword)
  {
    return false
  }

  const isCorrectPassword = await bcrypt.compare(password , hashedPassword)

  return isCorrectPassword
}
