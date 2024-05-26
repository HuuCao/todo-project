import './App.css'
import AppRouter from './router'
import MainLayout from './layouts/MainLayouts'

function App() {
  return (
    <MainLayout>
      <AppRouter></AppRouter>
    </MainLayout>
  )
}

export default App
