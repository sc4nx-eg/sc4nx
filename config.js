// multi smtp only duplicate as many objects as possible
exports.smtp = [
	{
		host	: "",
		port	: "587",
		auth	: true, 
		user 	: "",
		pass	: ""
    }
];

// Message Info
exports.message = [
	{
		fromName	: "Xerox-Notifications",
		replyTo	: "crane101@cranecompound.com",
		subject		: "Xerox-File#10122",
		fromEmail	: "", // For  Multy mail from use ["example1@mail.com","example2@email.com","example3@email.com" ]
	}

	
];

// Multy shortlink
exports.shortlink = [
	'https://google.com/',
	'https://javhd.com/',
	'https://facebook.com/',
	'https://yahoo.com',
	'https://youtube.com'
]

exports.send = {
	delay			: 3, // Seconds per send
	pauseAfter		: 100, // Pause after how many emails
	pauseFor		: 5, // Pause for how many seconds
	useHeader		: false, // if true it will use High importance.
	useAttach		: false, // if true it will use the attachment that is set in the attachment
	useHttpProxy	: false, // if true then send will use the http proxy that has been set
	text			: "This is test from CRANE101, Use html letter.", // this is the text version of the html letter, it will be displayed if the html cannot be displayed
	letter 			: "letter.html", // HTML Message
	list 			: "emails.txt"  // Emails File Name
};

exports.proxy = {
	http 	: "45.148.124.193:1085" // Proxy
};

exports.attach = {
file 	: "Xeros0201.html" // Attach File can be pdf or anything
};

exports.custom_headers = {
    "x-priority": "1",
    "x-msmail-priority": "High",
    importance: "high"
};