import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x053Ccf7A509BD2c7fafC0F15431588807D343a4D'
);

export default instance;
