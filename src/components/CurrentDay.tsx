import * as React from 'react';
import * as moment from 'moment';

const CurrentDay: React.FC = () => {
    return (
        <>
            <h1>{moment().format('LL')}</h1>
            <p>Hello, World!</p>
        </>
    );
}

export default CurrentDay;
