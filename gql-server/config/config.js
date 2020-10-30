module.exports = {
	database_name:"trinitydemotest",
	database_username:"awspostgres",
	database_password:"awspostgres",
	database_port:5432,
	server_port: 8082,
	server_host_local: 'localhost',
	server_host: 'localhost',
	database_schema:'testing',
	database_host:"pgawsdb.cahx2wkh7raf.us-east-1.rds.amazonaws.com",
	//database_host:"zomsi.czzeceivk9s4.us-east-1.rds.amazonaws.com",
	saltRounds: 2,
	jwtSecret: 'my_secret_key',
	tokenExpireTime: '6h',
	ios_apn_settings: {
		token: {
			key: __dirname + "/AuthKey.p8",
			keyId: "76D22U84H7",
			teamId: "JS9MX52L76"
		},
		production: true
	},
	version:'v1.0',
	app_name:"apis",
	micro_service_name:"auth",
	email_sender_mailid:"zomnsi@gmail.com",
	email_sender_password:"dg6I,zffW[eZ",
	email_sender_provider:"gmail",
	forgot_password_link:"http://localhost:8081/reset-password",
	password_expiry_time:86400000,
	stripe_secret_key:"sk_test_aIiyno0uwloac19P7AvZnbsW00hUQQD3dS",
	server_security_type: "http"

}
//don't store this file in repository, it's unsecure
