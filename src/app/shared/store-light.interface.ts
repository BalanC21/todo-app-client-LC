import {IBaseState} from "./i-base.state";

export interface StoreLightInterface<EntityLight, Entity > extends IBaseState{
  entities: EntityLight[],
  active: Entity | null;
}
