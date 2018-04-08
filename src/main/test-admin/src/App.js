import React from 'react';
import { Admin, Resource, jsonServerRestClient} from 'admin-on-rest';

import { PostList } from './posts';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource options={{ label: 'Zmitser' }} name="posts" list={PostList} />
    </Admin>
);

export default App;