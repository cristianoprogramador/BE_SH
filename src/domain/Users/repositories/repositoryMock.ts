import { type Project, type User } from "@prisma/client";
import { type ICreateUserDTO, type IUserRepository } from "../types";
import { injectable } from "tsyringe";

export const USERS_LIST_MOCK = [
  {
    id: 1,
    name: "User 1",
    birthDate: new Date("1985-01-01"),
    createdAt: new Date("1985-01-01"),
    email: "user1@example.com",
    position: "frontend",
    imageUrl: "http://google.com/image/user1.jpg",
    salary: 3500,
  },
  {
    id: 2,
    name: "User 2",
    birthDate: new Date("1990-01-01"),
    createdAt: new Date("1990-01-01"),
    email: "user2@example.com",
    position: "backend",
    imageUrl: "http://google.com/image/user2.jpg",
    salary: 3500,
  },
] satisfies User[];

export const PROJECTS_LIST_MOCK = [
  {
    id: 1,
    name: "Project 1",
    client: "Client Project",
    createdAt: new Date(),
    deliveryDate: new Date(),
    description: "Description",
    startDate: new Date(),
    technologies: "React",
  },
] satisfies Project[];

@injectable()
export class UserRepositoryMock implements IUserRepository {
  public async getAllUsers() {
    return USERS_LIST_MOCK;
  }

  public async createUser(data: ICreateUserDTO) {
    return {
      ...data,
      id: 1,
      createdAt: new Date(),
    } satisfies User;
  }

  public async getProjectsByUserId(userId: User["id"]) {
    const user = USERS_LIST_MOCK.find((userMock) => userMock.id === userId);

    if (!user) {
      return [];
    }

    return PROJECTS_LIST_MOCK;
  }
}