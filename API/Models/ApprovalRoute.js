const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Users',
			required: true
		}
	},
	{ _id: false }
);

const ApprovalRouteSchema = mongoose.Schema({
	schemeId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Schemes',
		required: true
	},
	authors: {
		type: [UserSchema],
		required: true
	},
	approvers: {
		type: [UserSchema],
		required: true
	},
	requiredApprovals: {
		type: Number,
		required: true
	},
	requiredRejections: {
		type: Number,
		required: true
	}
});

//name and schema to use
module.exports = mongoose.model('ApprovalRoutes', ApprovalRouteSchema);
