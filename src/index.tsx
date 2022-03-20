import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/redux.store'
import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
)
