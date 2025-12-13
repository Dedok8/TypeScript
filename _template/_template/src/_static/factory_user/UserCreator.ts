import IUser from './IUser'

export default class UserCreator {
  static createUser(name: string, age: number): IUser {
    return { name, age }
  }
}
