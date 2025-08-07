import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@/app/Layout/Layout.tsx';
import { AppPage, CoopPage, HomePage, ServicesPage } from '@/pages';
import { useTheme } from '@/shared/hooks';
import './App.scss';
import '@/shared/styles/main.scss';

const App = () => {
  useTheme();
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={'coop'} element={<CoopPage />} />
        <Route path={'services'} element={<ServicesPage />}>
          <Route path={'app'} element={<AppPage />} />
          <Route path={'web'} element={<AppPage />} />
          <Route path={'promotion'} element={<AppPage />} />
        </Route>

        <Route path={'developments'} element={<AppPage />}>
          <Route path={'defibridge'} element={<AppPage />} />
          <Route path={'economy'} element={<AppPage />} />
          <Route path={'feonyx'} element={<AppPage />} />
        </Route>
        <Route path={'tokenomics'} element={<AppPage />}>
          <Route path={'ifehu'} element={<AppPage />} />
          <Route path={'investor'} element={<AppPage />} />
        </Route>

        <Route path={'*'} element={<Navigate to={'/'} replace={true} />} />
      </Route>
    </Routes>
  );
};

export default App;
