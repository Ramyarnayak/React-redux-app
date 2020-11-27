import logo from './logo.svg';
import './App.css';

import MovieList from './Components/MovieList'
import MovieDetails from './Components/MovieDetails';
function App() {
  return (
    <div className="App">
    <h1>Redux Movies</h1>
    <div className="container">
      <MovieList/>
      <MovieDetails/>
    </div>
    
    </div>
  );
}

export default App;
