import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://8ac9745a636d07b0206ab3783d06d99b@o4507436210257920.ingest.de.sentry.io/4507436221857872',
  tracesSampleRate: 1,
  debug: false
})
