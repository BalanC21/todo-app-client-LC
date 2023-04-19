import {Store, StoreConfig} from "@datorama/akita";


export interface SessionState {
  reload: boolean;
}

export function createInitialState(): SessionState {
  return {
    reload: false,
  };
}
@StoreConfig({ name: 'reloadStore' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
