import {StoreLightInterface} from "./store-light.interface";

export const initialBaseEntityLightState = <EntityLight, Entity>(): StoreLightInterface<EntityLight, Entity> => (
  {
    success: false,
    entities: [],
    active: null
  }
)
