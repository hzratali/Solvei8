# Assignment - Trello-Style Task Management Application

## Title: Create an Angular web application for signing in / logging-in the user. The designs for the same can be found in the following link. [Designs for Assignment](https://www.figma.com/design/LVmO8JvoK5nPAHaZtVK5Xt/Dev-Interview-Reference)

### Details:

The first step is to ask the user to enter their email address or phone number.
Validate if the user already exists or not and accordingly show signup or login screen.

### In login screen

1. Show a password field in addition to the email/phone number field, already entered by
   the user.
2. On clicking on the Login button, check if the password is valid and accordingly show a
   success modal or failure inline message, stating the password is not valid.
   (you can store a few pairs of email/phone numbers and password fields in mocks and
   validate)

### In sign up screen

Step 1:

1. Show a Name field and Create Password field in addition to the email/phone number
   field already entered by the user.
2. On clicking on the Continue button, show the next page with the next set of fields.
   Step2:
3. The next set of fields will be coming through the backend api, in our case using mocks.
   a. Organization-name - string - should be present in the list of allowed
   Organization-id that is present in the mocks response.
   Otherwise, show an inline error message- “Unknown organization-id”
   b. Designation - dropdown
   c. Birth-date - open a calendar
   d. City - text
   e. Pincode - verify its 6 digits and only number fields.
4. There should be a back button, on clicking on the back button from step2, the data
   entered on the previous page should persist.
5. On clicking on Next from step1, if some data was filled in step2, that data should also
   persist.

### Evaluation criteria

1. The code should be modular and use strong Typings.
2. Interface/type should be created for mock responses and request payloads.
3. Please use Router and Stores(rxjs + ngrx).
4. A good folder structure or hierarchy is highly recommended.
5. Code should be highly readable, i.e. good naming, comments, and consistent
   indentations should be followed wherever possible.

### Submission guidelines:

1. Please add the readme file with the details of setup instructions.
2. It would be good if just by commenting/uncommenting from a single place (data layer),
   all the cases can be tested.
3. Please commit the code to any of GitHub, Bitbucket, or GitLab and share the link for the
   same.

## Getting Started

You can check out mock data for testing the application in the /src/mocks directory.

Running the Application Locally
Clone or Download the Repository:

Clone the repository using Git:
bash
git clone https://github.com/hzratali/Solvei8
Or download the ZIP file and extract it.
Install Dependencies:

Navigate to the project directory and run:
bash
npm install
This will download and install all necessary packages.
Run the Application:

Start the application by running:
bash
npm start
The application should now be running locally on http://localhost:3000.

export const data: User[] = [
{
name: 'Ali',
password: '12345678',
email: 'ali@gmail.com',
phone: '9085858585',
organizationName: 'AccioJob',
organizationId: '001',
designation: 'Software Engineer',
birthDate: new Date('2000-05-29'),
city: 'Guwahati',
pincode: '787878',
},
{
name: 'Khan',
password: '12345678',
email: 'khan@gmail.com',
phone: '9583429333',
organizationName: 'Buyogo',
organizationId: '002',
designation: 'Frontend Developer',
birthDate: new Date('1985-07-20'),
city: 'Delhi',
pincode: '941058',
},
{
name: 'Alice',
password: '12345678',
email: 'alicej@example.com',
phone: '1234567890',
organizationName: 'Solvei8',
organizationId: '003',
designation: 'Full Stack Developer',
birthDate: new Date('1992-03-08'),
city: 'Hyderabad',
pincode: '606013',
},
{
name: 'Bob',
password: '12345678',
phone: '9583429333',
organizationName: 'Google',
organizationId: '004',
designation: 'Software Developer',
birthDate: null,
city: 'Mombai',
pincode: '900015',
},
];

export const allowedOrganizations = [
{ orgId: '001', orgName: 'AccioJob' },
{ orgId: '002', orgName: 'Buyogo' },
{ orgId: '003', orgName: 'Solvei8' },
{ orgId: '004', orgName: 'Google' },
];

export const designations = [
{
id: '1',
name: 'Software Engineer',
},
{
id: '2',
name: 'Frontend Developer',
},
{
id: '3',
name: 'Backend Developer',
},
{
id: '4',
name: 'Full Stack Developer',
},
{
id: '5',
name: 'Software Developer',
},
];
