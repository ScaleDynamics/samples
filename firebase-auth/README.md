# Sample - Firebase authentication

Use Firebase authentication SDK on browser and check the user rights on server side.

Use Firebase authentication on browser and control rights as server side.

Sample is based on [MongoDB Movies](../mongodb-movies)

Idea is to add Firebase Authentication on client side and check that user is connected as server side.

## Setup

### Install

- Clone the project
- Go to the `warp-samples/firebase-auth` directory
- Run the following commands:

```bash
# install deps
$ npm install

# login to ScaleDynamics
$ npx warp login
```

### Firebase Config

- Go to https://console.firebase.google.com/u/0/?hl=en and add project

#### Configure Firebase Authentication

You need to create web application and configure Firebase Authentication

- Create web application by clicking on icon `</>`
- in `src/index.js` replace by yours:

```js
const firebaseConfig = 'YOUR FIREBASE CONFIG HERE'
```

- in `Authentication` menu, select `Sign-in method` tab and enabled Google sign-in provider.

#### Configure Firebase Admin

In order to check tha user is connected as server side, you have to used `firebase-admin` framework.

- Go to `Project Setting` and select `Service accounts` tab.
- Generate new private key
- Copy file in `server` directory of sample and rename it to `firebase-admin-config.json`

## Run

```bash
# run a dev server
$ npm run dev

# build and deploy to production
$ npm run build
$ npm run deploy
```

After deploying, you have to add your domain to secure your application:

- Go to your [Firebase Console](https://console.firebase.google.com/) and select your project
- In `Authentication` menu, select `Sign-in method` tab and enable the `Google Sign-In` provider
- Click on `Add domain` button and add your domain URL (eg. xxxxxx.scaledynamics.cloud)

You can find your domain in terminal after to execute `npm run deploy`, or go to your
[ScaleDynamics Console](https://console.scaledynamics.com) and copy deployment URL of your project.

## Resources

- [Firebase](https://firebase.google.com/?hl=fr)
- [Firebase Authentication](https://firebase.google.com/products/auth)
- [MongoDB driver for Node.js](https://www.npmjs.com/package/mongodb)
- [Sample Mflix Dataset from MongoDB Atlas](https://docs.atlas.mongodb.com/sample-data/sample-mflix/)
- [ScaleDynamics Documentation](https://docs.scaledynamics.com/)
