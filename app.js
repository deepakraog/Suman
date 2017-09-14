var fs = require('fs');
var path = require('path');

var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	service: 'gmail',
	secure: false,
	port: 25,
	auth: {
		user:'suman.123.msd@gmail.com',
		pass: 'sumanmr123'
	},
	tls:{
		rejectUnauthorized: false
	}
});

let HelperOptions = {
	from: '"Suman M R" <suman.123.msd@gmail.com',
	to: 'suman.aqua.srk@gmail.com',
	subject: 'Hello world',
	text: 'WOW this is amazing'
};

transporter.sendMail(HelperOptions,(error, info) =>{
	if(error){
		return console.log("Error "+error);
	}
	else{
		console.log(info);
	}
})