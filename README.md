# MA CCC Website

### Description
  This is a React web app which uses nescaum-ccsc-dataservces.com
### Architecture
  A simple SPA web app which uses nescaum-ccsc-dataservices to source information (resource details, search, collections).
### Deployment
  * The web SPA is packed as a react bundle and pushed to S3 as a staging / development location - editing the ./staging.sh script can change the destination bucket.
### Install Notes - Eric & Chris

Up and running locally.  Issues: Ran into EEXIST error on Windows Command Prompt, but resolved issue by using -f
Had compatibility issues pulling down the version of node_modules in the repo.  We had to remove the folder locally, and then run an npm install to get all of our dependencies working on Windows.  

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
