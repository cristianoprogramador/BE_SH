import { type User, type Project } from "@prisma/client";
import { type ICreateProjectDTO } from "./createProjectDTO";

export interface IProjectController {
  projectsQuery(): Promise<Project[]>;
  createProjectMutation(
    _: undefined,
    args: ICreateProjectDTO
  ): Promise<Project>;
  projectUsers(parent: Project): Promise<User[]>;
}
