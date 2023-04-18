import {StoreInterface} from "./store.interface";

export const initialBaseEntityLightState = <EntityLight, Entity>(): StoreInterface<EntityLight, Entity> => (
  {
    success: false,
    entities: [],
    active: null
  }
)
