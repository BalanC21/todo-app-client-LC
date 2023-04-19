import {SessionStore} from "./reload.store";
import {ReloadSelectors} from "./reload.selectors";

export class SessionService {
  constructor(
    private sessionStore: SessionStore,
    private reloadSelector: ReloadSelectors
  ) {}

  updateUserName(newName: string) {
    this.sessionStore.update({ reload: !this.reloadSelector.reloadSelect() });
  }
}
