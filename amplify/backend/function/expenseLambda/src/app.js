/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_EXPENSEDB_ARN
	STORAGE_EXPENSEDB_NAME
Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
const {v4: uuidv4} = require('uuid')
const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient();
AWS.config.update({ region: process.env.TABLE_REGION });
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
let tableName = "expenseTable";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/expense', function(request, response) {
  let params = {
    TableName: tableName,
    limit: 100
  }
  dynamodb.scan(params, (error, result) => {
    if (error) {
      response.json({ statusCode: 500, errorMsg: error.message, error: error });
    } else {
      response.json({ statusCode: 200, url: request.url, body: JSON.stringify(result.Items) })
    }
  });

});

app.get('/expense/:id', function(request, response) {
  let params = {
    TableName: tableName,
    Key: {
      id: request.params.id
    }
  }
  dynamodb.get(params, (error, result) => {
    if (error) {
      response.json({ statusCode: 500, error: error.message });
    } else {
      response.json({ statusCode: 200, url: request.url, body: JSON.stringify(result.Item) })
    }
  });
});

/****************************
* Example post method *
****************************/

app.post('/expense', function(request, response) {

  const timestamp = new Date().toISOString();
  let params = {
    TableName: tableName,
    Item: {
      ...request.body,
      id: uuidv4()
    }
  }
  dynamodb.put(params, (error, result) => {
    if (error) {
      response.json({ statusCode: 500, error: error.message, url: request.url });
    } else {
      response.json({ statusCode: 200, url: request.url, body: JSON.stringify(params.Item) })
    }
  });
});

app.post('/expense/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/expense', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/expense/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/expense', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/expense/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
