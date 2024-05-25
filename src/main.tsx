import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import './styles/reset.css';

import { RouterProvider } from 'react-router-dom';
import { routers } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FavoritesProvider } from './providers/FavoritesProvider';
import { ProductsProvider } from './providers/ProductsProvider';
import { ShoppingCartProvider } from './providers/ShoppingCartProvider';

const queryClient = new QueryClient();

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  const { worker } = await import('./mocks/browser');
  return worker.start();
}

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>
          <ShoppingCartProvider>
            <FavoritesProvider>
              <RouterProvider router={routers} />
            </FavoritesProvider>
          </ShoppingCartProvider>
        </ProductsProvider>
      </QueryClientProvider>
    </React.StrictMode>
  )
);
