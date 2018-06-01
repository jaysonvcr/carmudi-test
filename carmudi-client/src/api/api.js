import MockAPI from './mockAPI';
import ProductionAPI from './productionAPI';

const API = process.env.NODE_ENV === 'production'
  ? ProductionAPI
  : MockAPI;

export default new API();
