// import logo from './logo.svg';
import './App.css';

export default function App() 
{
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" href="/">Chandan jain H P</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">blog</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

