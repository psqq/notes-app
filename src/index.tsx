import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./App";
import * as moment from 'moment';
import Modal from 'react-modal';

moment.locale('ru');

const appEl = document.getElementById('root');

if (appEl) {
    Modal.setAppElement(appEl);

    ReactDOM.render(
        <App/>,
        appEl,
    );
}
