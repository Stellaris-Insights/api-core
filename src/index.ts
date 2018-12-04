import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const handle: Handler = (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback,
) => {
  cb(null, { statusCode: 200, body: JSON.stringify({ message: 'Success' }) });
};
