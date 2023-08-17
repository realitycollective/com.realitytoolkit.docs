---
sidebar_position: 1
---

# Available Default Interactors

The toolkit comes with the following predefined and implemented `Interactor`s.

## Near Interactor

The `NearInteractor` interacts with nearby objects. It does not require touching the object but instead it will
focus and interact with interactables that are within a configuratble reach from the controller or hand.

## Far Interactor

The `FarInteractor` allows interactions across distance by pointing your controller or hand at objects that are out of reach.

## Poke Interactor

The `PokeInteractor` is used to trigger interactions by poking / touching objects. It is usually located at the index finger tip or another
convenient location on your controller visualization.

## Teleport Interactor

The `TeleportInteractor` is a special interactor used to teleport from one location to another. It interacts with your app or game
environment to determine  the target position.

:::caution

The `TeleportInteractor` is only available if the `RealityToolkit.Locomotion` module is installed via the Package Manager.

:::