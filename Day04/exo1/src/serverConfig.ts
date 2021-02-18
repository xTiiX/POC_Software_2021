import * as env from 'env-var';

export const serverPort = env.get('SERVER_PORT').required().asIntPositive();
export const helloMessage = env.get('HELLO_MESSAGE').asString();
