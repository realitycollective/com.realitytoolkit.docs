---
sidebar_position: 0
---

# What Are Interaction Behaviours?

An `InteractionBehaviour` is a Unity component designed to work with `Interactable`s. It is an atomic piece of code, that implements a specific
behaviour that you'd expect, when interacting with an `Interactable`. Examples for default interaction behaviours available with the toolkit are
the `GrabBehaviour` to make an object grabbable or the `GrabPoseBehaviour` that will animate the hand visualizing ther user's controller into a given pose, when
grabbing the object.

`InteractionBehaviour`s can be stacked onto the `Interactable` GameObject to achieve various effects. You can combine multiple `InteractionBehaviour`s (composition) to achieve your desired interaction reponse. Check the samples to learn more about `InteractionBehaviour`s are used.