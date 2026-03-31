// API - Application Programming Interface

// Frontend - JS/TS/Angular/React/Vue/Svelte
// Backend - Java/Python
// Database- sql/mysql/mongodb/redis


// 1. Request format

/*
URL - https://rahulshettyacademy.com/api/ecom/auth/login
Http Method - POST
payload - body - {userEmail: "testnHNk@gmail.com", userPassword: "Testing@1234"}
Header - NA

*/

// 2. Response format

/*
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ0Njc1NWFlMmFmZDRjMGI2Mjg2YmMiLCJ1c2VyRW1haWwiOiJ0ZXN0bkhOa0BnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjoxMjM0NTY3ODkwLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzc0OTIyODg0LCJleHAiOjE4MDY0ODA0ODR9.0XvY-c8eHNY8d9e0qSM_QS9_XtDvHVjEOnfKOrQ7TiI",
    "userId": "66d46755ae2afd4c0b6286bc",
    "message": "Login Successfully"
}

*/




import { test, expect } from '@playwright/test';

test('API login should return a token in the response', async ({ request }) => {
  const response = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
    data: {
      userEmail: 'testnHNk@gmail.com',
      userPassword: 'Testing@1234',
    },
    headers:{
        'Content-Type': 'application/json'
    }
  });

  console.log(await response.json());
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('token');
  expect(responseBody.token, 'Token should be a non-empty string').toBeTruthy();
  expect(typeof responseBody.token).toBe('string');
});

