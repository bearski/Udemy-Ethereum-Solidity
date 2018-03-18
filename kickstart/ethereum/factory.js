import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x453576f1832ec2F62F94106F59477913f677bEa3'
);

export default instance;
