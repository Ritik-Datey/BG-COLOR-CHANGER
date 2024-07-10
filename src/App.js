import './App.css';

function App() {

  const handleButtonClick = (element) =>{
    document.body.style.backgroundColor=element.target.value;
  }
  return (
    <div >
      <button onClick={handleButtonClick} style={{backgroundColor:'green'}} value='green'>Green</button>
      <button onClick={handleButtonClick} style={{backgroundColor:'red'}}  value='red'>Red</button>
      <button onClick={handleButtonClick} style={{backgroundColor:'yellow'}}  value='yellow'>Yellow</button>
      <button onClick={handleButtonClick} style={{backgroundColor:'orange'}}  value='orange'>Orange</button>
      <button onClick={handleButtonClick} style={{backgroundColor:'purple'}}  value='purple'>Purple</button>
      <button onClick={handleButtonClick} style={{backgroundColor:'gray'}}  value='gray'>Gray</button>
      <button onClick={handleButtonClick} style={{backgroundColor:'black', color:'white'}}  value='black'>Black</button>
      <button onClick={handleButtonClick} style={{backgroundColor:'pink'}}  value='pink'>Pink</button>
    </div>
  );
}

export default App;
