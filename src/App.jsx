import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Sistema from './pages/Sistema'
import Empresa from './pages/Empresa'
import TiposCupins from './pages/TiposCupins'
import Contato from './pages/Contato'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sistema" element={<Sistema />} />
        <Route path="empresa" element={<Empresa />} />
        <Route path="tipos-cupins" element={<TiposCupins />} />
        <Route path="contato" element={<Contato />} />
      </Route>
    </Routes>
  )
}

export default App
