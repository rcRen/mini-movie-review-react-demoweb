// import {
// 	createBrowserRouter,
// 	createRoutesFromElements,
// 	Route,
// 	RouterProvider,
// } from 'react-router-dom';

// import IndexPage from './App';
// import IdentityPage from './pages/Identity';
// import ChangePassword from './pages/ChangePassword';

// // const router = createBrowserRouter(
// // 	createRoutesFromElements(
// // 		<Route path="/" element={<IndexPage />}>
// // 			<Route path="identity" element={<IdentityPage />}>
// // 				<Route path="change-password" element={<ChangePassword />} />
// // 			</Route>
// // 		</Route>
// // 	)
// // );

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <IndexPage />,
// 		// loader: rootLoader,
// 		children: [
// 			{
// 				path: 'change-password',
// 				element: <ChangePassword />,
// 				// loader: teamLoader,
// 			},
// 		],
// 	},
// ]);

// export default () => <RouterProvider router={router} />;

// import * as React from 'react';
// import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

// import UserProvider from './contexts/user';

// import App from './App';
// import IdentityPage from './pages/Identity';
// import ChangePassword from './pages/ChangePassword';

// function Layout() {
// 	return (
// 		<div>
// 			<nav>
// 				<ul>
// 					<li>
// 						<Link to="/">Home</Link>
// 					</li>
// 					<li>
// 						<Link to="/identity/change-password">Change Password</Link>
// 					</li>
// 				</ul>
// 			</nav>

// 			<hr />

// 			<Outlet />
// 		</div>
// 	);
// }

// function About() {
// 	return (
// 		<div>
// 			<h1>About</h1>
// 		</div>
// 	);
// }

// export default () => {
// 	return (
// 		<UserProvider serviceProvider="facebook">
// 			<BrowserRouter>
// 				<Routes>
// 					<Route path="/" element={<Layout />}>

// 					</Route>
// 					<Route path="/identity" element={<IdentityPage />}>
// 							<Route
// 								path="change-password"
// 								element={<ChangePassword />}
// 							></Route>
// 							<Route path="about" element={<About />} />
// 						</Route>
// 				</Routes>
// 			</BrowserRouter>
// 		</UserProvider>
// 	);
// };

import * as React from 'react';
import {
	Routes,
	Route,
	Link
} from 'react-router-dom';

import IndexPage from './App';
import IdentityPage from './pages/Identity';
import ChangePassword from './pages/ChangePassword';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />}>
				<Route path="identity" element={<IdentityPage />}>
					<Route path="change-password" element={<About />} />
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Route>
		</Routes>
	);
}

function About() {
	return (
		<div>
			<h1>About</h1>
		</div>
	);
}

function NoMatch() {
	return (
		<div>
			<h1>Nothing to see here!</h1>
			<p>
				<Link to="/">Go to the home page</Link>
			</p>
		</div>
	);
}
