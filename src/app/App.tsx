import { Route, Routes } from 'react-router-dom';
import Layout from '@/app/Layout/Layout.tsx';
import { useTheme } from '@/shared/hooks';
import './App.scss';
import '@/shared/styles/main.scss';
import {
  HomePage,
  AppPage,
  ServicesPage,
  WebPage,
  NotFoundPage,
  DevelopingPage,
  CoopPage,
  DescriptionPage,
  BlockchainPage,
  BridgePage,
} from '@/pages';
import { ScrollToTop } from '@/shared/ui';

const App = () => {
  useTheme();
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path={'coop'} element={<CoopPage />} />
          <Route path={'coop/description'} element={<DescriptionPage />} />

          <Route path={'services'} element={<ServicesPage />} />
          <Route path={'services/app'} element={<AppPage />} />
          <Route path={'services/web'} element={<WebPage />} />

          <Route path={'developments/defibridge'} element={<BridgePage />} />
          <Route path={'blockchain'} element={<BlockchainPage />} />
        </Route>

        <Route path={'services/promotion'} element={<DevelopingPage />} />

        <Route path={'developments'} element={<DevelopingPage />} />
        <Route path={'developments/economy'} element={<DevelopingPage />} />
        <Route path={'developments/feonyx'} element={<DevelopingPage />} />

        <Route path={'tokenomics'} element={<DevelopingPage />} />
        <Route path={'tokenomics/ifehu'} element={<DevelopingPage />} />
        <Route path={'tokenomics/investor'} element={<DevelopingPage />} />

        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
