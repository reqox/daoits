import { Route, Routes } from 'react-router-dom';
import Layout from '@/app/Layout/Layout.tsx';
import { useTheme } from '@/shared/hooks';
import './App.scss';
import '@/shared/styles/main.scss';
import {
  HomePage,
  AppPage,
  PromotionPage,
  ServicesPage,
  WebPage,
  NotFound,
} from '@/pages';

const App = () => {
  useTheme();
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={'coop'} element={<HomePage />} />
        <Route path={'services'} element={<ServicesPage />} />
        <Route path={'services/app'} element={<AppPage />} />
        <Route path={'services/web'} element={<WebPage />} />
        <Route path={'services/promotion'} element={<PromotionPage />} />

        <Route path={'developments'} element={<AppPage />}>
          <Route path={'defibridge'} element={<AppPage />} />
          <Route path={'economy'} element={<AppPage />} />
          <Route path={'feonyx'} element={<AppPage />} />
        </Route>
        <Route path={'tokenomics'} element={<AppPage />}>
          <Route path={'ifehu'} element={<AppPage />} />
          <Route path={'investor'} element={<AppPage />} />
        </Route>
      </Route>
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};

export default App;
