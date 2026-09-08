import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { FilmsPage } from './pages/FilmsPage';
import { AddFilmPage } from './pages/AddFilmPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="films" element={<FilmsPage />} />
          <Route path='films/add' element={<AddFilmPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;