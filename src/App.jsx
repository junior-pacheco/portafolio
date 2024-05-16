import { Navigate, Route, Routes } from 'react-router-dom'
import About from './components/about/index';


const App = () => {
  return (
      <div className='h-[100vh] bg-gray-900'>
        <main>
        <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path='/*' element={<Navigate to={'/'}/>} />
        </Routes>
        </main>
      </div>
  );
};

export default App;
