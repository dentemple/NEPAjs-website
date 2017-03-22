import { render } from 'react-dom'

import './css/bootstrap/bootstrap.min.css'
import './css/index.css'
import routes from './config/routes'

render(
  routes,
  document.getElementById('root')
)
