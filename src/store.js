import { legacy_createStore as createStore } from 'redux';
import redux from './reducer';

const store = createStore(redux);

export default store;
