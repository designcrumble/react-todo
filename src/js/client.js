import React from "react";
import ReactDOM from "react-dom";
// import { 
// 	BrowserRouter as Router, 
// 	Route,
// 	IndexRoute,
// 	hashHistory
// } from 'react-router-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/">
			<IndexRoute component={Layout} />
			<Route path="settings" component={Settings} />
		</Route>
	</Router>,
	app,
);
