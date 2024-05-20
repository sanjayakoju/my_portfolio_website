import {
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  QueryCommand,
  ScanCommand,
  DeleteItemCommand,
  UpdateItemCommand
} from "@aws-sdk/client-dynamodb";

const tableName = 'contactUs'; // Put your table name.
const indexName = 'contactUsId'; // Put your index name.
const types = {
  contactUsId: "S",
  email: "S",
  name: "S",
  subject: "S",
  message: "S"
};

export const createNewContactUs = async (body, dynamodb) => {

  const saveParameters = {
    TableName: tableName,
    Item: {
      "contactUsId": {
        S: body.contactUsId
      },
      "email": {
        S: body.email
      },
      "name": {
        S: body.name
      },
      "subject": {
        S: body.message
      },
      "message": {
        S: body.message
      }
    }
  };

  const command = new PutItemCommand(saveParameters);

  return await dynamodb.send(command);
};
