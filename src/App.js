import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WithoutReduxApp from './pages/Without-Redux-App'
import WithReduxApp from './pages/With-Redux-App'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WithReduxApp />} />
        <Route path='/without-redux-app' element={<WithoutReduxApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App