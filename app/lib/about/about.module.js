import AboutConfig from './about.config';
import AboutController from './about.controller';
require('./about.scss');

let aboutModule = angular.module('demo.about', []);

aboutModule.config(AboutConfig);
aboutModule.controller('AboutController', AboutController);

export default aboutModule = aboutModule.name
