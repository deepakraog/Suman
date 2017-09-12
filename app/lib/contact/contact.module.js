import ContactConfig from './contact.config';
import ContactController from './contact.controller';
require('./contact.scss');

let contactModule = angular.module('demo.contact', []);

contactModule.config(ContactConfig);
contactModule.controller('ContactController', ContactController);

export default contactModule = contactModule.name
