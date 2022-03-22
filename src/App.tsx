import { Route, Routes } from 'react-router-dom';

import { Home, Login } from 'views';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
