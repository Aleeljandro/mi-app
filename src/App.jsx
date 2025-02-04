import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const result = await response.json();
    setData(result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Aplicación React con Vite</h1>
      <button onClick={fetchData}>Obtener Datos</button>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
