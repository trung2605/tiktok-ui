import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    // Determine the layout to use
                    let Layout = DefaultLayout; // Default layout
                    if (route.layout === null) {
                        Layout = Fragment; // No layout, use Fragment
                    } else if (route.layout) {
                        Layout = route.layout; // Custom layout
                    } else {
                        Layout = DefaultLayout; // Default layout
                    }
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
