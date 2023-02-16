import { Container } from "react-bootstrap";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  return (
    <Container className="text-center mt-4 p-4">
      <Header />
      <Card />
    </Container>
  );
}

export default App;
