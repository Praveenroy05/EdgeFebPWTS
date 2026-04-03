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
import { isPlusToken } from 'typescript';

const loginPayload = {
      userEmail: 'testnHNk@gmail.com',
      userPassword: 'Testing@1234',
    }

let token:string
let orderID: string

const orderURL = "https://rahulshettyacademy.com/api/ecom/order/create-order"
const orderPayload = {orders: [{country: "Bahrain", productOrderedId: "6960ea76c941646b7a8b3dd5"}]}


test.beforeAll('API login should return a token in the response', async ({ request }) => {
  const response = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
    data: loginPayload,
    headers:{
        'Content-Type': 'application/json'
    }
  });

  // console.log(await response.json());
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('token');
  expect(responseBody.token, 'Token should be a non-empty string').toBeTruthy();
  expect(typeof responseBody.token).toBe('string');

  token = responseBody.token;
  // console.log(token);

  const orderResponse = await request.post(orderURL,{
    data: orderPayload,
    headers:{
      "authorization": token
    }
  })

 const orderJsonResponse=  await orderResponse.json()
 orderID = await orderJsonResponse.orders[0]


});

test('Skip login page and move to dashboard page', async ({page})=>{

  await page.addInitScript(function(value){
    window.localStorage.setItem('token', value)
  }, token)

  await page.goto("https://rahulshettyacademy.com/client")

  console.log(orderID);

  await page.locator("[routerlink='/dashboard/myorders']").click()

  await expect(page.locator("table tbody")).toBeVisible()

 const rows =  page.locator("table tbody tr")

 // count() -Return the total number of element matching with the locator

 const rowsCount = await rows.count()

 for(let i=0; i<rowsCount; i++){
  const orderIDText = await rows.nth(i).locator("th").textContent()
  if(orderIDText==orderID){
      await rows.nth(i).locator("button").first().click()
      break
   }
  }

  await expect(page.locator("div.col-text")).toHaveText(orderID)

})

