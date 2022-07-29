import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="homework">
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<>404</>} />
    </Routes>
  );
};
