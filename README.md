# Sentry plugin for error tracking in Gridsome projects
Make error tracking in your next Gridsome project easier than ever. 

## Install
* `npm install gridsome-plugin-sentry --save`

## Usage
Add the following to the gridsome.config.js to initallize Sentry error tracking

```javascript
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-sentry',
      options: {
        url: 'sentry.url',
        attachProps: true // defaults to true
      }
    }
  ]
}
```
## Further Info
New to Sentry? Check out [sentry.io](https://sentry.io/welcome/ "Sentry IO")

Configuration options and examples, [docs.sentry.io](https://docs.sentry.io/platforms/javascript/vue/ "Vue config for Sentry IO")
