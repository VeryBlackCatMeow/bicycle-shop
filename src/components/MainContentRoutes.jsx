import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from './Loading';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Cart = lazy(() => import('../containers/Cart'));
const Gallery = lazy(() => import('./Gallery'));
const Product = lazy(() => import('../containers/Product'));
const Locations = lazy(() => import('../containers/Locations'));
const PageIsNotFound = lazy(() => import('./PageIsNotFound'));

const MainContentRoutes = () => (
    <Suspense fallback={<Loading size="5em"/>}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/search/:query" component={Gallery}/>
            
            <Route exact path="/gallery/:category" component={Gallery}/>
            <Route exact path="/gallery/:category/:id" component={Product}/>

            <Route path="/locations" component={Locations} />

            <Route path="*" component={PageIsNotFound}/>
        </Switch>
    </Suspense>
);

export default MainContentRoutes;