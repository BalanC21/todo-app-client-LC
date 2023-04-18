import {IBaseState} from "./i-base.state";

export interface StoreInterface<EntityLight, Entity > extends IBaseState{
  entities: EntityLight[],
  active: Entity | null;
}
