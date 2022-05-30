// import logo from './logo.svg';
import './App.css';
import Navbar from './components/js/Navbar';
import Container from './components/js/Container';
// import TextFrom  from './components/TextFrom';
import About from './components/js/About';
export default function App() {
  return (
    <div>
      <About/>
      <Navbar title="Chandan jain HP" text="Blog" />
      <Container ContainerH="Hey friends!" ContainerP="I'm a designer and full stack web developer |🧑‍💻 
      built attractive digital experience website,
      I designer cool stuff for the web" />
      {/* <TextFrom h1="CONVERTER you world"/> */}
    </div>
  )
}

