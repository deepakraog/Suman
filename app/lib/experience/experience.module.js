import ExperienceConfig from './experience.config';
import ExperienceController from './experience.controller';
require('./experience.scss');

let experienceModule = angular.module('demo.experience', []);

experienceModule.config(ExperienceConfig);
experienceModule.controller('ExperienceController', ExperienceController);

export default experienceModule = experienceModule.name
