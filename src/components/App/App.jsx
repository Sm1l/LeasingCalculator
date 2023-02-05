import "./app.scss";
import "../../base/font.scss";
import "../../base/custom.scss";

import Form from "../Form/Form";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__title">
          Рассчитайте стоимость <br />
          автомобиля в лизинг
        </h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
