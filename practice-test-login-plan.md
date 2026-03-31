# Practice Test Login Test Plan

## Application Overview

Test plan for the Practice Test Automation login page at https://practicetestautomation.com/practice-test-login/. Covers positive, negative, and edge-case flows for login validation and logout behavior.

## Test Scenarios

### 1. Practice Test Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Positive login with valid credentials

**File:** `practice-test-login-plan.md`

**Steps:**
  1. Open https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
    - expect: Login form is visible with Username and Password fields and a Submit button
  2. Enter Username = student
    - expect: Username field contains student
  3. Enter Password = Password123
    - expect: Password field contains Password123
  4. Click Submit
    - expect: Browser navigates to a new page
    - expect: URL contains /logged-in-successfully/
    - expect: Page shows text confirming successful login
    - expect: Log out button is visible

#### 1.2. Negative login with invalid username

**File:** `practice-test-login-plan.md`

**Steps:**
  1. Open https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
    - expect: Login form is visible
  2. Enter Username = incorrectUser
    - expect: Username field contains incorrectUser
  3. Enter Password = Password123
    - expect: Password field contains Password123
  4. Click Submit
    - expect: Page stays on the login page
    - expect: Error message is displayed
    - expect: Error text reads Your username is invalid!

#### 1.3. Negative login with invalid password

**File:** `practice-test-login-plan.md`

**Steps:**
  1. Open https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
    - expect: Login form is visible
  2. Enter Username = student
    - expect: Username field contains student
  3. Enter Password = incorrectPassword
    - expect: Password field contains incorrectPassword
  4. Click Submit
    - expect: Page stays on the login page
    - expect: Error message is displayed
    - expect: Error text reads Your password is invalid!

#### 1.4. Negative login with both username and password invalid

**File:** `practice-test-login-plan.md`

**Steps:**
  1. Open https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
    - expect: Login form is visible
  2. Enter Username = wrongUser
    - expect: Username field contains wrongUser
  3. Enter Password = wrongPass
    - expect: Password field contains wrongPass
  4. Click Submit
    - expect: Page stays on the login page
    - expect: An error message is displayed
    - expect: Error text reads Your username is invalid! or Your password is invalid! depending on validation order

#### 1.5. Negative login with blank username

**File:** `practice-test-login-plan.md`

**Steps:**
  1. Open https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
    - expect: Login form is visible
  2. Leave Username blank
    - expect: Username field is empty
  3. Enter Password = Password123
    - expect: Password field contains Password123
  4. Click Submit
    - expect: Page stays on the login page
    - expect: Error message is displayed
    - expect: Error text reads Your username is invalid!

#### 1.6. Negative login with blank password

**File:** `practice-test-login-plan.md`

**Steps:**
  1. Open https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
    - expect: Login form is visible
  2. Enter Username = student
    - expect: Username field contains student
  3. Leave Password blank
    - expect: Password field is empty
  4. Click Submit
    - expect: Page stays on the login page
    - expect: Error message is displayed
    - expect: Error text reads Your password is invalid!

#### 1.7. Edge case: username case sensitivity

**File:** `practice-test-login-plan.md`

**Steps:**
  1. Open https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
    - expect: Login form is visible
  2. Enter Username = Student
    - expect: Username field contains Student
  3. Enter Password = Password123
    - expect: Password field contains Password123
  4. Click Submit
    - expect: Page stays on the login page
    - expect: Error message is displayed
    - expect: Error text reads Your username is invalid!

#### 1.8. Edge case: logout returns to login page

**File:** `practice-test-login-plan.md`

**Steps:**
  1. Open https://practicetestautomation.com/practice-test-login/
    - expect: Page loads successfully
    - expect: Login form is visible
  2. Enter Username = student
    - expect: Username field contains student
  3. Enter Password = Password123
    - expect: Password field contains Password123
  4. Click Submit
    - expect: Browser navigates to logged-in page
    - expect: Log out button is visible
  5. Click Log out
    - expect: Browser returns to the login page
    - expect: Login form is visible again
