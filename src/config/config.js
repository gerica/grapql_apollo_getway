import dotenv from 'dotenv';

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: `${process.cwd()}/src/config/.env` });
}

export default {
  ...process.env,
};
