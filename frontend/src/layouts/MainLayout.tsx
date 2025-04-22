// src/layouts/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-8 max-w-screen-xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
