import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

export default function(Vue, options) {
  if(process.isClient) {
    Sentry.init({
      dsn: options.dsn,
      integrations: [
        new Integrations.Vue({
          Vue,
          attachProps: options.attachProps || true,
        }),
      ],
    })
  }
}
