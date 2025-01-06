Installation

Make sure you have Node.js and npm installed on your system. If not, you can download and install them from https://nodejs.org/id

Open a terminal or command prompt and navigate to the root directory of your project.

Use the following command to install the required dependencies:

- npm install
  
- npm version 

  Usage newman and install newman

  Getting started
To run Newman, ensure that you have Node.js >= v16. Install Node.js via package manager.

Installation
The easiest way to install Newman is using NPM. If you have Node.js installed, it is most likely that you have NPM installed as well.

$ npm install -g newman
This installs Newman globally on your system allowing you to run it from anywhere. If you want to install

  Using Reporters with Newman
Reporters provide information about the current collection run in a format that is easy to both: disseminate and assimilate. Reporters can be configured using the -r or --reporters options. Inbuilt reporters in newman are: cli, json, junit, progress and emojitrain.

 $ newman run 'Simple Book Api.postman_collection.json' -r cli,json





