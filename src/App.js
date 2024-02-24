import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './calendar/Calendar';
import Main from './Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
