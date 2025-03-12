# seabizmarking

Follow these steps to get your project up and running:

## 1. Clone the Repository

After cloning the repository, navigate to the project directory and run the following command to install the dependencies:

```
npm install
```

## 2. Dependency Errors

If you encounter a dependency error during installation, try running the following command to bypass the issue:

```
npm install --legacy-peer-deps
```

## 3. Starting the Project

Once dependencies are installed, start the project with:

```
npm run start
```

## 4. Screen Error ("Something Went Wrong")

If you see a screen with the message "Something went wrong", ensure that your Android or iOS device is connected to the same IP address as your system.

## 5. Same IP Address Check

If your device and system are connected to the same IP address, try running the following command to start the project:

```
npx expo start
```

## 6. Reloading the IDE

If the issue persists, try reloading the IDE you're using, and then run the project with:

```
npx expo start --tunnel
```

## 7. Expo Account Login

If scanning the QR code asks for login, create an account on Expo and try logging in.

## 8. Expo Login via Command

If login fails, terminate the current start process and log in using the following command:

```
npx expo login -u <username> -p <password>
```

After logging in, try starting the application again.

```
npx expo start --tunnel
```