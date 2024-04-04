# VGym Client Application

The VGym Client is a React-based application designed to provide a seamless and interactive experience for virtual gym enthusiasts. This application is built using Webpack, a powerful module bundler that compiles and bundles JavaScript modules, along with other assets like stylesheets and images, into a single or multiple bundles that can be loaded by a web browser.

## Getting Started

To get started with the VGym Client application, you need to have Node.js installed on your system. Once Node.js is installed, you can initialize the project and install its dependencies.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the necessary node modules:

```bash
npm install
```

This command reads the `package.json` file and installs the dependencies listed under `devDependencies` and `dependencies`.

## Building and Running the Application

The VGym Client application comes with three predefined scripts in the `package.json` file to facilitate development, testing, and production builds. These scripts utilize different Webpack configurations to suit each environment.

### Development Build

To start the application in development mode, which includes features like hot module replacement for easier development, run:

```bash
npm run start:dev
```

This command uses `webpack.config.dev.js` for development-specific configurations.


### Production Build

To create a production build, which optimizes the application for deployment, run:

```bash
npm run build
```

This command uses `webpack.config.prod.js` to generate an optimized build in the `dist` directory, ready for deployment.


### Running Production Build Locally

If you wish to test the production build on your local machine, you can run:

```bash
npm run start:prod
```

This command serves the production build using Webpack configurations defined in `webpack.config.prod.js`.

## Environment Configurations

The application supports different environments through the use of `.env` files. There are `.env.dev` for development and `.env.prod` for production environments. These files are used to set environment-specific variables that can be accessed within the application. 

## Config Files
there is a base web.config.js file that is used by all enviroments and has common configurations: creating the dist folder from source code index.js to later be served to the browser(this is the html the browser actually reads along with js and css). then there are config files per enviroment, development and production, they use the webpack merge to take the base config and add the specific config file for that enviroment together and the webpack builds the dist folder accordingly. 
base config file has also rules on how to transpile differnt assets such as css,scss,png,jpg etc. using loaders so that they are compatible to the browser. without these rules and loaders these assetes wont work when the app runs. 
## Conclusion

The VGym Client application leverages Webpack and npm scripts to provide a flexible and efficient development workflow. By following the instructions above, you can easily build and run the application in different environments, ensuring that your development and production builds are optimized and tailored to your needs.
