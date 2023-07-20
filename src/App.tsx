import './App.scss'
import { Logo } from './assets/components/logo'

function App() {
  return (
    <main>
      <header className='header-container'>
          <Logo />
          <nav className="menu-options">
            <a href="">What we offer</a>
            <a href="">How it works</a>
            <a href="">Portfólio</a>
          </nav>
          <button>Conttact Us</button>
      </header>
    </main>
  )
}

export default App
