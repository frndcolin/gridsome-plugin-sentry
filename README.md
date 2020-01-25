<p style="text-align: center">
  <a href="https://www.npmjs.com/package/gridsome-plugin-sentry">
    <img src="https://img.shields.io/npm/dt/gridsome-plugin-sentry.svg?color=orange&style=for-the-badge" alt="Downloads">
  </a>
</p>

# Sentry plugin for error tracking in Gridsome projects
Make error tracking in your next Gridsome project easier than ever.

## Install
* `npm install gridsome-plugin-sentry --save`
* `yarn add gridsome-plugin-sentry`

## Usage
Add the following to the gridsome.config.js to initalize Sentry error tracking

```javascript
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-sentry',
      options: {
        dsn: 'sentry.url',
        attachProps: true // defaults to true
        logErrors: process.env.NODE_ENV === 'development' // defaults to false, see below for further info
      }
    }
  ]
}
```
1. For a quick and easy test, add the following to any component that is included in your index page
```javascript
mounted () {
  throw 'testing Sentry connection';
}
```
2. Run `npm run develop` from the root directory
3. Navigate to your Sentry dashboard and confirm the error was captured

## Further Info
New to Sentry? Check out [sentry.io](https://sentry.io/welcome/ "Sentry IO")

### logErrors option
By default Sentry will not call the internal logError function of Vue and will not be seen in the developers console. You can enable logging errors in the browsers development console with any statement that evaluates to a boolean. See [Vue integration docs for more info](https://docs.sentry.io/platforms/javascript/vue/)

### Silencing errors from `localhost`
If you want Sentry to ignore events from `localhost` or any specific IP address you can do so from your Sentry dashboard with inbound filters.
From you dashboard, `Settings -> Projects -> 'Project Name' -> Inbound Filters`

Configuration options and examples, [docs.sentry.io](https://docs.sentry.io/platforms/javascript/vue/ "Vue config for Sentry IO")
