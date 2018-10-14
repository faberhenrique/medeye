import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Test from './pages/testDetail';

const Routes = () => (
    <BrowserRouter>
        <Switch> {/* PERMITE QUE APENAS UMA ROTA SEJA CHAMADA DE CADA VEZ */}
            <Route exact path="/" component={Main} />
            <Route path="/tests/:id" component={Test} />
        </Switch>
    </BrowserRouter>
);

export default Routes;