import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";
import * as moment from 'moment';

moment.locale('ru');

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
