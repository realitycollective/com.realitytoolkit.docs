"use strict";(self.webpackChunkreality_toolkit_docs=self.webpackChunkreality_toolkit_docs||[]).push([[552],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={slug:"project-template",title:"Using the Reality Toolkit project generator for new packages",authors:["simon"],tags:["upm","reality","toolkit"]},s="Reality Collective - Repository Template Generator",c={permalink:"/blog/project-template",editUrl:"https://github.com/realitycollective/realitycollective.github.io/edit/development/blog/2022-03-13-using-project-template-generator/index.md",source:"@site/blog/2022-03-13-using-project-template-generator/index.md",title:"Using the Reality Toolkit project generator for new packages",description:"To generate a new project for the Reality Toolkit, we have provided a handy repository generator that includes everything you need to get started.",date:"2022-03-13T00:00:00.000Z",formattedDate:"March 13, 2022",tags:[{label:"upm",permalink:"/blog/tags/upm"},{label:"reality",permalink:"/blog/tags/reality"},{label:"toolkit",permalink:"/blog/tags/toolkit"}],readingTime:3.785,truncated:!1,authors:[{name:"Simon (Darkside) Jackson",title:"Resolving life, one day and build at a time",url:"https://github.com/SimonDarksideJ",imageURL:"https://github.com/SimonDarksideJ.png",key:"simon"}],frontMatter:{slug:"project-template",title:"Using the Reality Toolkit project generator for new packages",authors:["simon"],tags:["upm","reality","toolkit"]},prevItem:{title:"Welcome to our new docs page!",permalink:"/blog/welcome"}},p={authorsImageUrls:[void 0]},d=[{value:"1. Create new Project, using either:",id:"1-create-new-project-using-either",level:2},{value:"2. Clone project locally as a submodule of &quot;RealityToolkit.dev&quot; in the &quot;Packages&quot; folder.",id:"2-clone-project-locally-as-a-submodule-of-realitytoolkitdev-in-the-packages-folder",level:2},{value:"3. Open powershell window in cloned folder (run powershell if not already in cloned folder)",id:"3-open-powershell-window-in-cloned-folder-run-powershell-if-not-already-in-cloned-folder",level:2},{value:"4. Run the command",id:"4-run-the-command",level:2},{value:"5. Delete the &quot;<strong>InitializeTemplate.ps1</strong>&quot; script",id:"5-delete-the-initializetemplateps1-script",level:2},{value:"6. Edit &quot;package.json&quot; and ensure values are correct, add any dependencies as needed.",id:"6-edit-packagejson-and-ensure-values-are-correct-add-any-dependencies-as-needed",level:2},{value:"7. Edit the Build workflow and ensure any dependencies are added to the &quot;Run Unit Tests&quot; job, remove existing Core default if not required.",id:"7-edit-the-build-workflow-and-ensure-any-dependencies-are-added-to-the-run-unit-tests-job-remove-existing-core-default-if-not-required",level:2},{value:"8. Open Unity and ensure all asset/meta files are generated and no additional errors are present.",id:"8-open-unity-and-ensure-all-assetmeta-files-are-generated-and-no-additional-errors-are-present",level:2},{value:"9. Check any relevant dependencies for the project are correctly registered in the Package.json dependencies (DO NOT add dependencies to the &quot;RealityToolkit.dev&quot; project.",id:"9-check-any-relevant-dependencies-for-the-project-are-correctly-registered-in-the-packagejson-dependencies-do-not-add-dependencies-to-the-realitytoolkitdev-project",level:2},{value:"10. CLOSE Unity.",id:"10-close-unity",level:2},{value:"11. Push changes to the Source repository for the NEW project.",id:"11-push-changes-to-the-source-repository-for-the-new-project",level:2},{value:"12. Check the Build action completes as expected, fix any issues.",id:"12-check-the-build-action-completes-as-expected-fix-any-issues",level:2},{value:"13. Go to the GitHub Repository and validate Repository Settings:",id:"13-go-to-the-github-repository-and-validate-repository-settings",level:2},{value:"15. Go to the GitHub Repository &quot;<strong>Branches</strong>&quot; section and add branch protections for main, development and feature/*",id:"15-go-to-the-github-repository-branches-section-and-add-branch-protections-for-main-development-and-feature",level:2},{value:"16. Once the initial check-in actions are complete, remove all pre-failed Actions runs (to tidy up)",id:"16-once-the-initial-check-in-actions-are-complete-remove-all-pre-failed-actions-runs-to-tidy-up",level:2}],u={toc:d};function h(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To generate a new project for the Reality Toolkit, we have provided a handy repository generator that includes everything you need to get started."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'It is possible to reuse the template generator for your own projects that require UPM dependant packages, however, there is additional setup required for your account to enable the automation to work, if required (if not required, then simply delete the ".github" folder)')),(0,a.kt)("p",null,"Using the Template generator is very easy:"),(0,a.kt)("h2",{id:"1-create-new-project-using-either"},"1. Create new Project, using either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The "Use this template" button from the "',(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://github.com/realitycollective/com.realitytoolkit.upm.template"},"https://github.com/realitycollective/com.realitytoolkit.upm.template")),'" repository '),(0,a.kt)("br",null),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{alt:"use this template button",src:n(5010).Z,width:"1611",height:"228"})),(0,a.kt)("p",{parentName:"li"},"  Or")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Create a new repository and selecting the "',(0,a.kt)("em",{parentName:"p"},"com.realitytoolkit.upm.template"),'" "Repository template" option'),(0,a.kt)("br",null),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{alt:"create new repository and selecting template",src:n(7808).Z,width:"909",height:"838"})))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Please make sure to select the "',(0,a.kt)("strong",{parentName:"p"},"include all branches"),'" option before clicking "',(0,a.kt)("em",{parentName:"p"},"Create repository"),'"')),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"2-clone-project-locally-as-a-submodule-of-realitytoolkitdev-in-the-packages-folder"},'2. Clone project locally as a submodule of "RealityToolkit.dev" in the "Packages" folder.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    git submodule add <remote_url> packages\\<full project name>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"E.G. "),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"git submodule add https://github.com/realitycollective/com.realitytoolkit.myawesomeproject.git packages\\com.realitytoolkit.myawesomeproject\n"))),(0,a.kt)("h2",{id:"3-open-powershell-window-in-cloned-folder-run-powershell-if-not-already-in-cloned-folder"},"3. Open powershell window in cloned folder (run powershell if not already in cloned folder)"),(0,a.kt)("p",null,'The "',(0,a.kt)("em",{parentName:"p"},"InitializeTemplate"),'" script is a powershell script.  Windows 11 includes powershell by default, so simply run "powershell" and navigate to the cloned folder, or open a regular "command prompt" window and navigate to the cloned folder and then run "powershell".'),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"4-run-the-command"},"4. Run the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},' ".\\InitializeTemplate.ps1 <New Project sub name>"\n')),(0,a.kt)("p",null,"E.G."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    ".\\InitializeTemplate.ps1 myawesomeproject"\n')),(0,a.kt)("p",null,"Only use the ",(0,a.kt)("strong",{parentName:"p"},"Name"),' as everything else is pre-filled in, additional sub names like "myawesomeproject.extension" are allowed.'),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"5-delete-the-initializetemplateps1-script"},'5. Delete the "',(0,a.kt)("strong",{parentName:"h2"},"InitializeTemplate.ps1"),'" script'),(0,a.kt)("p",null,"Simply remove/delete the file from the repository, it is no longer needed after execution."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"6-edit-packagejson-and-ensure-values-are-correct-add-any-dependencies-as-needed"},'6. Edit "package.json" and ensure values are correct, add any dependencies as needed.'),(0,a.kt)("p",null,"E.G."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    "com.realitytoolkit.core": "1.0.0-preview.1"\n')),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"7-edit-the-build-workflow-and-ensure-any-dependencies-are-added-to-the-run-unit-tests-job-remove-existing-core-default-if-not-required"},'7. Edit the Build workflow and ensure any dependencies are added to the "Run Unit Tests" job, remove existing Core default if not required.'),(0,a.kt)("p",null,'Inside the "',".",'github\\workflows\\buildupmpackages.yml" script, there is a section towards the end named "Run Unit Tests".  It has a section called "dependencies" which is pre-filled in with an entry to the RealityToolkit.core project.'),(0,a.kt)("p",null,"The configuration follows a json strructure, so simply add another {key:value} section in the array.  For an example of multiple dependencies, check the configuration in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/realitycollective/com.realitytoolkit.spatial-persistence.asa/blob/464fe2f2ecca423ca02ace1955a9a7004cf7b493/.github/workflows/buildupmpackages.yml#L54"},"SpatialPersistence.asa build file")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Additional instructions on how this works are included in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/realitycollective/reusableworkflows/blob/73475e0c6c40d1ab142fce0fb2d72a6520a4343e/.github/workflows/rununityunittests.yml#L121"},"source build pipeline file here"))),(0,a.kt)("p",null,"E.G."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    dependencies: \'[{"rcdevelopment": "github.com/realitycollective/com.realitytoolkit.core.git"}]\'\n')),(0,a.kt)("p",null,"*",(0,a.kt)("em",{parentName:"p"},"Note"),', do not put "https://" at the beginning of the dependency url.'),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"8-open-unity-and-ensure-all-assetmeta-files-are-generated-and-no-additional-errors-are-present"},"8. Open Unity and ensure all asset/meta files are generated and no additional errors are present."),(0,a.kt)("p",null,"The template does not include ANY meta files by default, these need to be generated by Unity, to ensure they are unique."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"9-check-any-relevant-dependencies-for-the-project-are-correctly-registered-in-the-packagejson-dependencies-do-not-add-dependencies-to-the-realitytoolkitdev-project"},'9. Check any relevant dependencies for the project are correctly registered in the Package.json dependencies (DO NOT add dependencies to the "RealityToolkit.dev" project.'),(0,a.kt)("p",null,'In the dependencies section of the "package.json", ensure any required components are listed.  Check the ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/realitycollective/com.realitytoolkit.core/blob/rcdevelopment/package.json"},'"com.realitytoolkit.core" package.json')," for reference"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"10-close-unity"},"10. CLOSE Unity."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"11-push-changes-to-the-source-repository-for-the-new-project"},"11. Push changes to the Source repository for the NEW project."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"12-check-the-build-action-completes-as-expected-fix-any-issues"},"12. Check the Build action completes as expected, fix any issues."),(0,a.kt)("p",null,'Visit the "Actions" tab to see a new "job" run once the update to the repository has been pushed.  This should automatically be recognized by the build pipeline from the template.'),(0,a.kt)("p",null,"If any issues occur, check the logs and resolve these before continuing."),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"13-go-to-the-github-repository-and-validate-repository-settings"},"13. Go to the GitHub Repository and validate Repository Settings:"),(0,a.kt)("p",null,'Go to the "Settings" tab for the repository and in the "General" section, validate the following settings to finalize the repository.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'* Un-check ALL features (these are all run from the RealityToolkit.dev repository)\n* un-check "allow merge commits"\n* Enable "Always suggest updating pull request branches"\n* Enable "Automatically delete head branches"\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Repository default settings",src:n(3838).Z,width:"998",height:"2750"})),(0,a.kt)("h2",{id:"15-go-to-the-github-repository-branches-section-and-add-branch-protections-for-main-development-and-feature"},'15. Go to the GitHub Repository "',(0,a.kt)("strong",{parentName:"h2"},"Branches"),'" section and add branch protections for main, development and feature/*'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3351).Z,width:"988",height:"588"})),(0,a.kt)("p",null,"For each branch, enable the following settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"* Require a pull request before merging\n* Require approvals\n* Dismiss stale pull request approvals when new commits are pushed\n* Require status checks to pass before merging\n* Require branches to be up to date before merging\n* Require conversation resolution before merging\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9189).Z,width:"1000",height:"2054"})),(0,a.kt)("h2",{id:"16-once-the-initial-check-in-actions-are-complete-remove-all-pre-failed-actions-runs-to-tidy-up"},"16. Once the initial check-in actions are complete, remove all pre-failed Actions runs (to tidy up)"),(0,a.kt)("p",null,"This will deliver a UPM style project, complete with the build pipeline and checks necessary for a platform/service to be built upon."))}h.isMDXComponent=!0},9189:function(e,t,n){t.Z=n.p+"assets/images/branch-protections-de2972cca90a2cdb5841238b3943f9ab.png"},3351:function(e,t,n){t.Z=n.p+"assets/images/branch-settings-36e408b923c0e2dc141c9d8d975f7394.png"},7808:function(e,t,n){t.Z=n.p+"assets/images/create-repository-d4b2b429818f19db76c7aa8d9ee50549.png"},3838:function(e,t,n){t.Z=n.p+"assets/images/repository-settings-45e9375588b2fcf4ec4e157e7a614c18.png"},5010:function(e,t,n){t.Z=n.p+"assets/images/use-this-template-button-81eaebac2fa20348706e544961d03d71.png"}}]);