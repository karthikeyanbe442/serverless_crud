# CRUD application using Serverless Architecture

This is a Simple CRUD application following technologies. This architecture will help you host the website free of charge as these are some services offered for free for a limited range. It would work perfect if you are planning for a personal customizable site free of cost.

## Frontend
1. [ReactJS](https://reactjs.org/) SPA application deployed in Amazon S3 Static Web Hosting. 
2. [React Material UI](https://material-ui.com/) is used for theming.
3. [Amazon Cognito](https://aws.amazon.com/cognito/) User Pools for Authentication.
4. You can integrate with [Cloudfront](https://aws.amazon.com/cloudfront/) and [Route 53](https://aws.amazon.com/route53/) if you are planning to use a custom domain.

## Backend
1. [Amazon API Gateway](https://aws.amazon.com/api-gateway/) for defining the Resources and REST API definitions.
2. [Amazon Lambda](https://aws.amazon.com/lambda/) for defining Business Logic and DAO for connecting to the Database layer. It supports different languages. I used JS for this project.

## Storage
1. [DynamoDB](https://aws.amazon.com/dynamodb/) is a NoSQL database.

## High Level Architecture
![image](https://user-images.githubusercontent.com/9916102/132454925-b766c409-1438-4de3-917f-69c8e0aa5f05.png)

## Setup the Project using Amplify CLI 

[Official Documentation](https://docs.amplify.aws/cli/)

### Configure Amplify with an IAM user
`amplify configure`

### Check status of Edit
`amplify status`

### Push Changes to Cloud
`amplify push`

### Pull the changes from Cloud
`amplify pull`

### Additional Commands

#### API Gateway 
`amplify add\update\remove api`

Note: Use Serverless template instead of CRUD operation

#### Lambda
`amplify add\update\remove function`

#### Storage
`amplify add\update\remove storage`

#### Add new Environment
`amplify env add`
Currently configured for Dev, Stage and Production environments

### Frontend
`amplify init`

This will create a `aws-exports.js` file with cognito user pool Secrets in the current environment.

#### Run Locally

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Prepare for Production Build to be deployed in S3

`npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
