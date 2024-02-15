import './App.css';
import Sidebar from "./components/Sidebar";
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import Courses from './components/Courses';

import CeilingPattern from "./assets/ceiling-pattern.svg";

function App() {
  return (
    <div className="app">
      <img src={CeilingPattern} className="ceiling-pattern" alt="Unilectives" />
      <Sidebar />
      <div className='content'>
        <Header />
        <SearchBar />
        <SortDropdown />
        <Courses />
      </div>
    </div>
  );
}

export default App;
