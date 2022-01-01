# Mainteny-Uni

Mainteny Uni is an application for the administrators of the University to manage courses offered by students.

### Project Description

With the application, only administrators can make changes to the student data at any particular time. The administrators can view all students data, add new students to the database , get edit courses offered by students and remove students from the school's database.

![Mainteny-Uni](https://user-images.githubusercontent.com/28057919/147680932-f15a7954-4da9-45bf-a933-31edc37cec17.JPG)

[Live Project](https://mainteny-uni.vercel.app/ "Live Project")
[Repo](https://github.com/winpeed/mainteny-app "Repo")

### Installation

1. Clone this repo
   ```sh
   git clone https://github.com/winpeed/mainteny-uni.git
   ```
2. Install all NPM packages
   ```sh
   npm install
   ```
3. For the application to work in your local environment, the following environment variables have to be created in your .env.local file.
   Create a `.env.local` file in the root of your project and insert
   your key/value pairs in the following format of `KEY=VALUE`:

```js
MONGODB_URL="YOUR MONGO DATABASE URL"
MONGODB_DB="YOUR MONGODB DATABASE NAME"
NEXTAUTH_URL=http://localhost:3000
```

If you experience any issues with the MONGODB_URL and MONGODB_BY, you can shoot me an [email.](mailto:praiseobende@yahoo.com?subject=Hi% "Hi!")

4. In the project directory, you can run:

```js
"npm run dev";
```

to start the development server on http://localhost:3000.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

5. Run

```js
"npm run build";
```

#### Docker Compose

```js
"docker-compose up --build";
```

This will build and run your container locally 🚀

Now that your container is built, you can test it locally:

```js
"docker run -p 3000:3000 mainteny-app_mainteny";
```

### Usage

1. Enter the Live/Production URL [http://mainteny-uni.vercel.app/](http://mainteny-uni.vercel.app/) or development URL [http://localhost:3000/](http://localhost:3000/) into your browser.

#### Sign In

2. Click the button to sign in as an administrator to access the student's database.

![sign-in](https://user-images.githubusercontent.com/28057919/147681043-6eeb6ccb-3af9-4a28-8b2d-872eccf49a37.JPG)

3. Use the following details to sign in.

```sh
Username: admin
Password: testing1234
```

4. Upon signing in successfully, you are redirected to the students dashboard with pre-populated data from the database.

![student-dashboard](https://user-images.githubusercontent.com/28057919/147681089-e5582f58-c939-46ca-8dc1-1425125e2015.JPG)

#### Add New Student

5. To create a new student, click the" Add Student" button. Fill in the form and click submit. The new student's data is successfully created.

![add-courses](https://user-images.githubusercontent.com/28057919/147681117-41f9f22c-04c2-4176-923d-87585f2300f5.JPG)

#### View Student Biodata

6. To view a student's complete biodata, click on any of the rows. This takes you to another page with the student's data.

![student's biodata](https://user-images.githubusercontent.com/28057919/147681139-43efe80d-8c3e-4f14-8fd0-3f4b26825589.JPG)

#### Edit Course

7. To edit a student's course, click the "Edit Course" button. The courses are updated upon selecting and submitting the courses offered from the modal.

![edit-courses](https://user-images.githubusercontent.com/28057919/147681161-f24d98d0-763c-4f8b-93b7-9d8737bd56b6.JPG)

#### Delete Course

8. To delete a student's data from the database, click the "Delete Student Data" button.

![delete data](https://user-images.githubusercontent.com/28057919/147681178-9004c076-e456-48a9-9da9-7fa5f3750b89.JPG)

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
