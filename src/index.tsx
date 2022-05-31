import ReactDOM from 'react-dom'
// Axios
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
/**
 * TIP: Replace this style import with dark styles to enable dark mode
 *
 * import './_metronic/assets/sass/style.dark.scss'
 *
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider} from './app/modules/auth'

// setupAxios(axios)

Chart.register(...registerables)

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <MetronicI18nProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </MetronicI18nProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root')
)
