// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NOTE } = initSchema(schema);

export {
  NOTE
};