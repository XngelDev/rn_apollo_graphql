import {HttpLink} from '@apollo/client/link/http';

const env = process.env.NODE_ENV;

export function createHttpLink() {
  return new HttpLink({
    uri: env === 'development' ? '' : '',
  });
}
