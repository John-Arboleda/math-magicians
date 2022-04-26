/* eslint-disable class-methods-use-this */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
/* eslint-disable-next-line no-unused-vars */
import NavBar from './components/NavBar';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import HomePage from './pages/HomePage';
// import Calculator from './components/calculator';

class App extends React.Component {
  render() {
    return (
      <div className="appDiv">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      </div>
    );
  }
}

export default App;
