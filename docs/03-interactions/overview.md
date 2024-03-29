---
sidebar_position: 0
---

# Overview

Similar to other XR toolkits for Unity the Reality Toolkit comes with its own interaction framework, designed to get you up and running quickly implementing immersive apps and games with modern interactions.

The Reality Toolkit interaction framework is a love-child of Unity's `XRI` package and `MRTK`. If none of those two rings a bell for you, don't worry, you don't need to be familiar with those to use interactions with Reality Toolkit.

For best understanding, we recommend reading through this documentation in the predefined page order.

## High-level Concept

On a high level, there are three key players invovled when it comes to interactions with Reality Toolkit:

| Interactor | Interactable | Interaction Behaviours |
|------------|--------------|----------------------|
| `Interactor`s define how you interact with the virtual world. The toolkit comes with a bunch of common interactors, such as `FarInteractor`, `NearInteractor`, and `PokeInteractor`. You can learn more about each on the [Interactors](/docs/category/interactors) page. | `Interactable`s are objects in your virtual environment that the user can interact with. Use it to define how the object wants to be interacted with and to restrict interaction types. You can learn more about them on the [Interactables](/docs/category/interactables) page. | `Interaction Behaviour`s are atomic components that you can add to your interactables to define their behaviour when interacted with. The toolkit comes with many interaction actions, such as `GrabBehaviour`, `TranslateBehaviour`, `ButtonBehaviour` and `ToggleBehaviour`. Learn more about them on the [Interaction Behaviours](/docs/category/interaction-behaviours) page. |

**Put simple in a single sentence:**
An `Interactor` interacts with an `Interactable` object and causes one ore more `Interaction Behaviour`s to execute.

Keep on reading to learn more about each of them.