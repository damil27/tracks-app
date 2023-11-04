import { Status } from "../createTasks/enum/status";

export type statusType = Status.todo | Status.inProgress | Status.completed;

export interface ItaskCounter {
  count?: number;
  status?: statusType;
}
