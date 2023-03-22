import './App.css';
import { TestButton } from './Components/Buttons'
import FormExample from './Components/Forms';
import "./Components/Buttons/style.css";
import { BodyShorthandExample, CardExample } from './Components/Cards'
import Container from 'react-bootstrap/Container'


function App() {
  return (
    
    <div className="App">
      <Container>
      My react demo
      <TestButton buttonName={"Login"}/>
      <TestButton buttonName={"Sign Up"}/>
      <BodyShorthandExample text={"Welcome to our website"}/>
      <CardExample/>
      <FormExample></FormExample>
      </Container>
    </div>
  );
}

export default App;
