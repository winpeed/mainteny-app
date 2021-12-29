# Mainteny-Uni

Mainteny Uni is an application for the administrators of the University to manage courses offered by students.

### Project Description

With the application, only administrators can make changes to the student data at any particular time. The administrators can view all students data, add new students to the database , get edit courses offered by students and remove students from the school's database.

[![Mainteny-Uni](https://drive.google.com/uc?id=mpumbFT6x8y0EYnnx3gM2l3VUeULzSS/")](https://drive.google.com/uc?id=mpumbFT6x8y0EYnnx3gM2l3VUeULzSS/")

[Live Project](https://mainteny-uni.vercel.app/ "Live Project")
[Repo](https://github.com/winpeed/mainteny-app "Repo")

### Installation

In the project directory, you can run:

```sh
"npm run dev"
```

to start the development server on http://localhost:3000.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

```sh
"npm run build"
```

to build the application for production usage. It correctly bundles the Next app in production mode and optimizes the build for the best performance.

For the application to work in your local environment, the following environment variables have to be created in your .env.local file.

Create a `.env.local` file in the root of your project and insert
your key/value pairs in the following format of `KEY=VALUE`:

```sh
MONGODB_URL=mongodb+srv://m001-student:mainteny01@cluster0.teqdf.mongodb.net/mainteny-uni?retryWrites=true&w=majority
MONGODB_DB=mainteny-uni
NEXTAUTH_URL=http://localhost:3000
```

### Usage

1. Enter the Live/Production URL [http://mainteny-uni.vercel.app/](http://mainteny-uni.vercel.app/) or development URL [http://localhost:3000/](http://localhost:3000/) into your browser.

#### Sign In

2. Click the button to sign in as an administrator to access the student's database.

3. Use the following details to sign in.

```sh
Username: admin
Password: testing1234
```

4. Upon signing in successfully, you are redirected to the students dashboard with pre-populated data from the database.

#### Add New Student

5. To create a new student, click the" Add Student" button. Fill in the form and click submit. The new student's data is successfully created.

#### View Student Biodata

6. To view a student's complete biodata, click on any of the rows. This takes you to another page with the student's data.

#### Edit Course

7. To edit a student's course, click the "Edit Course" button. The courses are updated upon selecting and submitting the courses offered from the modal.

#### Delete Course

8. To delete a student's data from the database, click the "Delete Student Data" button.

### Built with

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [ChakraUI](https://chakra-ui.com/)

### Author

**Praise Obende**

- [Github Profile](https://github.com/winpeed "winpeed")
- [Email](mailto:praiseobende@yahoo.com?subject=Hi% "Hi!")
- [Website](https://winpeed.com "Welcome")
