# Movie Catalog App

This is a **React Native** project that fetches movie data from an API and displays a catalog of films.

![App Screenshot](path/to/your/image.png)  
(*Replace with the actual path to your app image*)

## Features

- Fetches a list of movies from an external API.
- Displays movies with title, poster, and details.
- Allows searching for specific movies.
- Responsive design for both Android and iOS.

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Step 1: Clone the Repository

```sh
git clone https://github.com/your-username/movie-catalog.git
cd movie-catalog
```

### Step 2: Install Dependencies

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

### Step 3: Start Metro

Metro is the JavaScript bundler for React Native. Run the following command:

```sh
npm start  # OR yarn start
```

### Step 4: Build and Run the App

#### Android

```sh
npm run android  # OR yarn android
```

#### iOS

First, install CocoaPods dependencies (only needed on first run or after updating native dependencies):

```sh
bundle install
bundle exec pod install
```

Then, run the app:

```sh
npm run ios  # OR yarn ios
```

## API Usage

This app fetches movies from an external API. Ensure you have the correct API URL and keys configured in your environment file (`.env`). Example:

```
API_BASE_URL=https://api.example.com
API_KEY=your_api_key_here
```

## Customization

Modify `src/services/api.js` to configure API requests.
Modify `src/components/MovieCard.js` to customize movie display.

## Troubleshooting

If you encounter issues, refer to the [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

## Learn More

For more details, check out:
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Official React Native GitHub](https://github.com/facebook/react-native)

