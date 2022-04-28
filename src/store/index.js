import { createStore } from 'easy-peasy';
import storeModel from 'bets-model';

const store = createStore(storeModel);
export { store };
export default store;
