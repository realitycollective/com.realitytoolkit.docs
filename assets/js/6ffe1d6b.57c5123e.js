"use strict";(self.webpackChunkreality_toolkit=self.webpackChunkreality_toolkit||[]).push([[2075],{6154:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=o(5893),n=o(1151);const r={sidebar_position:2},a="How To Write Custom Interaction Behaviours?",s={id:"interactions/interaction-behaviours/custom-behaviours",title:"How To Write Custom Interaction Behaviours?",description:"If the default set of Interaction Behaviours does not suffice, you can easily add new useful behaviours for your",source:"@site/docs/03-interactions/03-interaction-behaviours/custom-behaviours.md",sourceDirName:"03-interactions/03-interaction-behaviours",slug:"/interactions/interaction-behaviours/custom-behaviours",permalink:"/docs/interactions/interaction-behaviours/custom-behaviours",draft:!1,unlisted:!1,editUrl:"https://github.com/realitycollective/com.realitytoolkit.docs/edit/main/docs/03-interactions/03-interaction-behaviours/custom-behaviours.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"UpdateRigidbodyBehaviour",permalink:"/docs/interactions/interaction-behaviours/default-behaviours/update-rigidbody-behaviour"},next:{title:"Locomotion",permalink:"/docs/category/locomotion"}},c={},d=[{value:"Writing Your First Interaction Behaviour",id:"writing-your-first-interaction-behaviour",level:2},{value:"Using Your Behaviour",id:"using-your-behaviour",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-write-custom-interaction-behaviours",children:"How To Write Custom Interaction Behaviours?"}),"\n",(0,i.jsxs)(t.p,{children:["If the default set of ",(0,i.jsx)(t.code,{children:"Interaction Behaviour"}),"s does not suffice, you can easily add new useful behaviours for your\n",(0,i.jsx)(t.code,{children:"Interactable"}),"s! The system is designed to be extendible and can be used to implement all kinds of specific app or game\nbehaviour."]}),"\n",(0,i.jsx)(t.h2,{id:"writing-your-first-interaction-behaviour",children:"Writing Your First Interaction Behaviour"}),"\n",(0,i.jsxs)(t.p,{children:["Create a new script in your project and name it ",(0,i.jsx)(t.code,{children:"ForcePushBehaviour"}),":"]}),"\n",(0,i.jsxs)(t.p,{children:["Double click it to open it in your favourite code editor. You are now looking at an empty ",(0,i.jsx)(t.code,{children:"MonoBehaviour"}),".\nClean it up and remove the default MonoBehaviour callbacks:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",children:"using UnityEngine;\n\npublic class ForcePushBehaviour : MonoBehaviour\n{\n    \n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Next we need to make sure that the component inherits ",(0,i.jsx)(t.code,{children:"BaseInteractionBehaviour"}),".\nAdd"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",children:"using RealityToolkit.Input.InteractionBehaviours;\n"})}),"\n",(0,i.jsxs)(t.p,{children:["to the top of your script file and then make ",(0,i.jsx)(t.code,{children:"BaseInteractionBehaviour"})," the base class of your component.\nThis is what your component should look like now:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",children:"using RealityToolkit.Input.InteractionBehaviours;\nusing UnityEngine;\n\npublic class ForcePushBehaviour : BaseInteractionBehaviour\n{\n    \n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Next add a serialized private field to define the strength of your force push. Are you a Jedi Padawan just getting started\nor a powerful Jedi Master? Also make sure to get a reference to the interactable's rigidbody in your awake callback. Since we know\nthe interaction behaviour sits on the interactable object it is safe to assume that there is a rigidbody. Every Interactable object\nmust have a rigidbody. Your script looks like this now:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",children:'using RealityToolkit.Input.InteractionBehaviours;\nusing UnityEngine;\n\npublic class ForcePushBehaviour : BaseInteractionBehaviour\n{\n    [SerializeField, Tooltip("The power of the force push executed on the object.")]\n    private float forcePower = 10f;\n\n    private new Rigidbody rigidbody;\n\n    /// <inheritdoc/>\n    protected override void Awake()\n    {\n        base.Awake();\n        rigidbody = GetComponent<Rigidbody>();\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:'Alright, we are almost there. All that is left to do now is make the component push away the interactable when we\nstop interacting with it. We will be using our custom behaviour together with some of the toolkit\'s default behaviours\nto grab the object and move it around and then when we "drop it", our force push should kick in and do its job.'}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Interaction Behaviours are meant to be combined where possible. Try combinging multiple behaviours to get the desired result.\nThat way we avoid monolithic behaviours that do a lot of things. Interaction Behaviours have a ",(0,i.jsx)(t.code,{children:"Sorting Order"})," property that you can use\nto adjust their execution order, if needed. By default they will execute in the same order as they are attached to the ",(0,i.jsx)(t.code,{children:"GameObject"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["Now back to work. Here is our completed ",(0,i.jsx)(t.code,{children:"ForcePushBehaviour"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cs",children:"using RealityToolkit.Input.Events;\nusing RealityToolkit.Input.InteractionBehaviours;\nusing RealityToolkit.Input.Interactors;\nusing UnityEngine;\n\npublic class ForcePushBehaviour : BaseInteractionBehaviour\n{\n    [SerializeField, Tooltip(\"The power of the force push executed on the object.\")]\n    private float forcePower = 10f;\n\n    private new Rigidbody rigidbody;\n\n    /// <inheritdoc/>\n    protected override void Awake()\n    {\n        base.Awake();\n        rigidbody = GetComponent<Rigidbody>();\n    }\n\n    /// <inheritdoc/>\n    protected override void OnLastGrabExited(InteractionExitEventArgs eventArgs)\n    {\n        base.OnLastGrabExited(eventArgs);\n\n        // This behaviour only works with controller based interactors.\n        if (eventArgs.Interactor is IControllerInteractor controllerInteractor)\n        {\n            // We determine the direction of our force push using the interactor's position in the scene\n            // and the interactable's position and normalize it.\n            var forceDirection = (transform.position - controllerInteractor.GameObject.transform.position).normalized;\n\n            // Scale by our configured force power.\n            forceDirection = forcePower * forceDirection;\n\n            // Finally add the force push to the rigidboy.\n            rigidbody.AddForce(forceDirection, ForceMode.Impulse);\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Note how we use the ",(0,i.jsx)(t.code,{children:"OnLastGrabExited"})," interaction event callback to do our magic. This callback is raised when the last interactor has released\ngrab input on the interctable. You could also listen for another custom input action to do the actual push but to keep things simple here, we simply consider\ndropping the object when we want to push it away."]}),"\n",(0,i.jsxs)(t.p,{children:["Notice how we restrict the behaviour to only perform its duty if the interactor is a type of ",(0,i.jsx)(t.code,{children:"IControllerInteractor"})," because those are represented by a ",(0,i.jsx)(t.code,{children:"GameObject"}),"\nin the scene and thus have a position. We use that position to determine the direction of our force push."]}),"\n",(0,i.jsx)(t.h2,{id:"using-your-behaviour",children:"Using Your Behaviour"}),"\n",(0,i.jsxs)(t.p,{children:["Create a primitive ",(0,i.jsx)(t.code,{children:"GameObject"}),", such as a cube or sphere in your scene. Then attach the ",(0,i.jsx)(t.code,{children:"Interactable"})," component to it and also the ",(0,i.jsx)(t.code,{children:"FocusLockBehaviour"}),", ",(0,i.jsx)(t.code,{children:"UpdateRigidbodyBehaviour"}),", ",(0,i.jsx)(t.code,{children:"TranslateBehaviour"})," and the just created ",(0,i.jsx)(t.code,{children:"ForcePushBehaviour"}),". Configure the input events on the ",(0,i.jsx)(t.code,{children:"Interactable"})," and make it only react to far interaction for simplicity, since our custom behaviour is not designed to work with direction interaction. Your GameObject configuration should look similar to this:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Configured Interactable",src:o(4137).Z+"",width:"491",height:"309"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:['Once again, notice how we make use of the existing behaviours to perform the "telekinesis" aspect of our power.\nThe ',(0,i.jsx)(t.code,{children:"FocusLockBehaviour"})," makes sure that the interactor focus is kept on the interactable while we are interacting with it. After that the ",(0,i.jsx)(t.code,{children:"UpdateRigidbodyBehaviour"}),'\nmakes sure the Rigidbody is configured properly to discard gravity while we are "force holding" the object. ',(0,i.jsx)(t.code,{children:"TranslateBehaviour"})," performs the actual telekinesis and\nlast but not least our custom behaviour does the force push."]})}),"\n",(0,i.jsx)(t.p,{children:"Deploy to your device or use e.g. Quest Link to test using the editor and enjoy your new Jedi powers!"})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4137:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/custom-behaviour-on-gameobject-be68ae9d7e58c55fddf8c94dfa2bf18e.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>a});var i=o(7294);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);