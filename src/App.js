import './App.css';


const Device = ({name}) => {
  return(
    
    <p>{name} </p>
    
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Device name="TV"></Device>
      </header>
    </div>
  );
}

export default App;
