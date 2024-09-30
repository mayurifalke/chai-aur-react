import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";

function App() {
  let arr = ["Dal", "milk", "ghee", "fruits", "roti"];

  return (
    <>
      <Container>
        <h1>Healthy Items</h1>
        <ul className="list-group">
          {arr.map((item) => (
            <li key={item} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </Container>

      <Container>
        <p>The above is the list of healthy items, which we should eat to become a healthy.</p>
      </Container>
    </>
  );
}

export default App;
