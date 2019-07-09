# Sentry plugin for error tracking in Gridsome projects
Make error tracking in your next Gridsome project easier than ever. 

## Install
* `npm install gridsome-plugin-sentry --save`
* `yarn add gridsome-plugin-sentry`

## Usage
Add the following to the gridsome.config.js to initallize Sentry error tracking

```javascript
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-sentry',
      options: {
        dsn: 'sentry.url',
        attachProps: true // defaults to true
      }
    }
  ]
}
```
1 For a quick and easy test, add the following to any component that is included in your index page
```javascript
mounted () {
  throw 'testing Sentry connection';
}
```
2 Run `npm run develop` from the root directory
3 Navigate to your Sentry dashboard and confirm the error was captured

## Further Info
New to Sentry? Check out [sentry.io](https://sentry.io/welcome/ "Sentry IO")

Configuration options and examples, [docs.sentry.io](https://docs.sentry.io/platforms/javascript/vue/ "Vue config for Sentry IO")
