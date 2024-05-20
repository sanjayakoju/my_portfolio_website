import {
  DynamoDBClient
} from "@aws-sdk/client-dynamodb";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

import {
  createNewContactUs,
} from './lambda-helper.mjs';

export const handler = async (event) => {

  const snsTopicArn = 'arn:aws:sns:us-east-1:851725257835:contactUs-topic'; // Replace with your SNS topic ARN

  const dynamodb = new DynamoDBClient({
    apiVersion: "2012-08-10"
  });

  const sns = new SNSClient({
    apiVersion: "2010-03-31",
    region: "us-east-1" // Replace with your desired region
  });

  const resource = event.resource;
  const httpMethod = event.httpMethod;
  const pathParameters = event.pathParameters;
  const body = JSON.parse(event.body);

  console.log('Body : ', body);

  if (resource === '/contact') {

    if (httpMethod === 'POST') {

      const response = await createNewContactUs(body, dynamodb);

      // Send message to SNS topic
      try {

        const message = {
          Message: JSON.stringify({
            name: body.name,
            subject: body.subject,
            email: body.email,
            message: body.message
          })
        };

        await publishToSns(sns, snsTopicArn, message);
        console.log('Message sent to SNS successfully');
      } catch (error) {
        console.error('Error sending message to SNS:', error);
      }

      return {
        statusCode: 200,
        body: JSON.stringify({
          response
        }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        }
      };

    }
  }

  return {
    statusCode: 404,
    body: JSON.stringify({
      response: "Not Found"
    }),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    }
  };
};

const publishToSns = async (sns, topicArn, message) => {
  const params = {
    TopicArn: topicArn,
    Message: JSON.stringify(message)
  };

  const command = new PublishCommand(params);
  await sns.send(command);
};
