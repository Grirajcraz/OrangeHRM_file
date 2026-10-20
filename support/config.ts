import dotenv from 'dotenv';
dotenv.config();

export const config = {
  baseUrl: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',
  username: process.env.USER_NAME || 'Admin',
  password: process.env.PASS_WORD || 'admin123',
  headless: process.env.HEADLESS === 'true',
};