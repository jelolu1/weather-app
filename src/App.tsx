import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Root } from './components/UI/Root';
import { About } from './pages/AboutPage';
import { Contact } from './pages/ContactPage';
import { NotFound } from './pages/NotFoundPage';
import { WeatherDetailPage } from './pages/WeatherDetailPage';
import { WeatherListPage } from './pages/WeatherListPage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Root />,
			loader: () => null,
			children: [
				{
					element: <Outlet />,
					loader: () => null,
					children: [
						{
							index: true,
							element: <WeatherListPage />,
							loader: () => null,
						},
						{
							path: ':id',
							element: <WeatherDetailPage />,
							loader: () => null,
						},
					],
				},
				{
					path: 'about',
					element: <About />,
					loader: () => null,
				},
				{
					path: 'contact',
					element: <Contact />,
					loader: () => null,
				},
				{
					path: '*',
					element: <NotFound />,
					loader: () => null,
				},
				{
					path: '',
					element: <NotFound />,
					loader: () => null,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
