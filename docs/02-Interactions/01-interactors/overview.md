---
sidebar_position: 0
---

# What Are Interactors?

An `Interactor` is a special `GameObject` in your scene that enables specific types of interactions with your interactable objects.
Usually an Interactor will be attached to the controller in the scene and perform interactions as input on those controllers is happening.

:::tip

You don't have to worry about setting up `Interactor`s yourself. The default toolkit configuration will make sure they are added to the scene
whenever a compatible controller is detected.

:::