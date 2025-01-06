Installation

Make sure you have Node.js and npm installed on your system. If not, you can download and install them from https://nodejs.org/id

Open a terminal or command prompt and navigate to the root directory of your project.

Use the following command to install the required dependencies:

- npm install
  
- npm version 

  Usage newman and install newman

  - Using Newman CLI
    The newman run command allows you to specify a collection to be run. You can easily export your Postman Collection as a json file from the Postman App and run it using Newman.

    -$ newman run 'Simple Book Api.postman_collection.json'

  Using Reporters with Newman
Reporters provide information about the current collection run in a format that is easy to both: disseminate and assimilate. Reporters can be configured using the -r or --reporters options. Inbuilt reporters in newman are: cli, json, junit, progress and emojitrain.

    -$ newman run 'Simple Book Api.postman_collection.json' -r cli,json





