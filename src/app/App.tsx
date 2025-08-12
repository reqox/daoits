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
  Developing,
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
        <Route path={'services/promotion'} element={<Developing />} />

        <Route path={'developments'} element={<Developing />} />
        <Route path={'developments/defibridge'} element={<Developing />} />
        <Route path={'developments/economy'} element={<Developing />} />
        <Route path={'developments/feonyx'} element={<Developing />} />

        <Route path={'tokenomics'} element={<Developing />} />
        <Route path={'tokenomics/ifehu'} element={<Developing />} />
        <Route path={'tokenomics/investor'} element={<Developing />} />
      </Route>
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};

export default App;
