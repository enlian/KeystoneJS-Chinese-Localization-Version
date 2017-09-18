var keystone = require('keystone');
var Types = keystone.Field.Types;

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	enquiryType: { type: Types.Select, options: [
		{ value: 'message', label: "只是想留个言" },
		{ value: 'question', label: "有个问题想问" },
		{ value: 'other', label: "其它..." },
	], required: true },
	message: { type: Types.Textarea, required: true },
});

Enquiry.track = true;
Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
