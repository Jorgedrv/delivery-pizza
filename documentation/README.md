<p align="center">
  <img src="./documentation/assets/images/logo.jpg" alt="Scotiabank" width=300 height=auto />
</p>

<p align="center">
	<b>Front-End PortalEmpresaWeb Migration</b>
</p>

<p align="center">
    Step project for migrations
</p>

#Associated Projects

- [MVP](#mvp)

##Scaffolding
├───config
├───documentation
│ ├───assets
│ └───README.md
├───coverage
├───mocks
├───public
├───src
│ ├───commons
│ │ ├───constants
│ │ ├───formatter
│ │ ├───routes
│ │ ├───security
│ │ └───utils
│ │  
│ ├───components
│ │ ├───sections
│ │ ├───common
│ │ │ ├───[NOMBRE]
│ │ │ │ ├───[NOMBRE].jsx
│ │ │ │ └───[NOMBRE].modules.css
│ │ │ └───ui-kit
│ │ │
│ ├───services
│ │ └───http
│ │  
│ ├───store
│ │ └───[CARACTERISTICA]
│ │ │ ├───Actions.js
│ │ │ ├───Constants.js
│ │ │ └───Reducer.js
│ │ ├───rootReducer.js
│ │ └───store.js
│
└───WEB-INF
├───stories
├───.env
├───CHANGELOG.md
├───gradlew
├───gradlew.bat
├───package.json
├───pipeline.jenkins
├───README.md
├───setting.gradle

.- config
Configuration folder

.- documentation
Folder with project documentation

.- coverage
Folder destined to the reports of the tests

.- mocks
Mock of the data

.- public
Folder where the js bundle and production css are generated

.- src
Folder destined for the source codes of the App

.- stories
Folder destined for the documentation of components and NAMES using StoryBook

.- .env
File with environment variables

.- .CHANGELOG.md
File that stores the change log

##Stack

.- Webpack
.- Babel
.- React
.- Redux
.- React-router-dom
.- React-Redux-Router
.- Redux-logger
.- Prop-types
.- CSS modules
.- Testing with Jest, Enzyme.
.- Redux-thunk
.- Axios
