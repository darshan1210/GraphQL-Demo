import logo from './logo.svg';
import './App.css';


function App() {
  const { loading, error, data } = useQuery(getCompanydetails);
  console.log(data)
  return (
    <div className="App">
      <h1>Welcome to space X</h1>
    </div>
  );
}

export default App;
