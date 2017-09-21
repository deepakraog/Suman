import UploadConfig from './upload.config';
import UploadController from './upload.controller';
require('./upload.scss');

let uploadModule = angular.module('demo.upload', []);

uploadModule.config(UploadConfig);
uploadModule.controller('UploadController', UploadController);

export default uploadModule = uploadModule.name
