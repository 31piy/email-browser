# Email Archive Browser

This is a simple Angular app to help browsing an archive of emails. This
app allows the users to do the following:

1. Browse a list of email archive
1. Plain-text search on emails' subject and body
1. See the results in multiple pages

# Getting started

Make sure you have the following installed on your system.

1. NodeJS (latest LTS version)
1. Git

You need to clone this repository on your system using the `git clone` command.

## Installing dependencies

Run `npm install` from the app's directory to install the necessary NPM
dependencies.

## Running locally (development)

Run `npm start` to start the Angular server. This server by default runs on
port 4200. Once the server has started, simply navigate to http://localhost:4200
in your browser to see the app.

## Building for production

Run `npm run build` to build the production assets for this app. These will be
placed in the `dist` folder. You can then serve these assets using a normal
web server like Apache or Nginx to see the app in the browser

# Future Plans

1. Adding unit tests and integration tests
1. Responsive layout (catering to smaller/larger screens)
1. Customizability
1. Stats about the results
1. Query caching
