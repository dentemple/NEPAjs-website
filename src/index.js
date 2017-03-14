import { render } from 'react-dom'

import './css/bootstrap/bootstrap.min.css'
import './css/index.css'
import router from './config/router'

render(
  router,
  document.getElementById('root')
)
