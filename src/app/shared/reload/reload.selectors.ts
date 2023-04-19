import {Query} from '@datorama/akita';
import {SessionState, SessionStore} from "./reload.store";

export class ReloadSelectors extends Query<SessionState> {
  constructor(private readonly reloadStore: SessionStore) {
    super(reloadStore)
  }

  reloadSelect(): any {
    return this.select(store => store.reload);
  }

}
