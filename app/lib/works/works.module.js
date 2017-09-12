import WorksConfig from './works.config';
import WorksController from './works.controller';
require('./works.scss');

let worksModule = angular.module('demo.works', []);

worksModule.config(WorksConfig);
worksModule.controller('WorksController', WorksController);

export default worksModule = worksModule.name
