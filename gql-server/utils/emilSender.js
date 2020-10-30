const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
const config = require('../config/config');
const email = process.env.MAILER_EMAIL_ID || config.email_sender_mailid;
const password = process.env.MAILER_PASSWORD || config.email_sender_password;
const constants = require('../config/constants')

var smtpTransport = nodemailer.createTransport({
	service: process.env.MAILER_SERVICE_PROVIDER || config.email_sender_provider,
	auth: {
		user: email,
		pass: password
	}
});

const handlebarOptions = {
	viewEngine: {
		extName: '.hbs',
		partialsDir: './public/templates',
		layoutsDir: './public/templates',
		defaultLayout: 'forgot-password-email.html',
	},
	viewPath: './public/templates/',
	extName: '.html',
};

smtpTransport.use('compile', hbs(handlebarOptions));

function sendEmail(host, user,token,callback) {
    var linkUrl = host;
    if(!(linkUrl.startsWith("http"))){
        linkUrl = config.forgot_password_link + '/' + token;
    }
    var data = {
        to: user.login,
        from: email,
        template: 'forgot-password-email',
        subject: 'Password help has arrived!',
        context: {
            url: linkUrl,
            name: user.fullName.split(' ')[0]
        }
    };

    smtpTransport.sendMail(data, function (err) {
        const message = constants.MESSAGES.MAIL_SENT_MESSAGE;
        if (!err) {
            callback(message);
        } else {
            callback(err);
        }
    });
};

module.exports = {
    sendEmail
}
