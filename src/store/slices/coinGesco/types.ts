import { COMMON_ERROR } from 'services/api/errors';
import { Status } from 'shared/types/redux-status';
type ErrorType = typeof COMMON_ERROR | null;

interface State {
  status: Status;
  error: ErrorType;
  ethereumRate: number;
}

export type { Status, ErrorType, State };
