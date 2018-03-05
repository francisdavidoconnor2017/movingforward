const initialState = {
	inputs: [
		{
			id: 0,
			valid: false,
			attempted: false,
			currenterrormessage: '',
			errormessage: 'Please enter a valid first name',
			type: 'text',
			lable: 'First Name',
			placeholder: 'First Name',
			content: '',
			classname: 'Form-inputLine'
		},
		{
			id: 1,
			valid: false,
			attempted: false,
			currenterrormessage: '',
			errormessage: 'Please enter a valid surname',
			type: 'text',
			lable: 'Surname',
			placeholder: 'Surname',
			content: '',
			classname: 'Form-inputLine'
		},
		{
			id: 2,
			valid: false,
			attempted: false,
			currenterrormessage: '',
			errormessage: 'Please enter a valid date of birth',
			type: 'date',
			lable: 'Date Of Birth',
			placeholder: '31/12/1980',
			content: '',
			classname: 'Form-inputLine'
		},
		{
			id: 3,
			valid: false,
			attempted: false,
			currenterrormessage: '',
			errormessage: 'Please enter a valid nationality',
			type: 'text',
			lable: 'Nationality',
			placeholder: 'Irish',
			content: '',
			classname: 'Form-inputLine'
		},
		{
			id: 4,
			valid: false,
			attempted: false,
			currenterrormessage: '',
			errormessage: 'Please enter a valid email address',
			type: 'email',
			lable: 'Email',
			placeholder: 'test@test.ie',
			content: '',
			classname: 'Form-inputLine'
		},
		{
			id: 5,
			valid: false,
			attempted: false,
			currenterrormessage: '',
			errormessage: 'Please enter a valid occupation',
			type: 'text',
			lable: 'Occupation',
			placeholder: 'Your occupation',
			content: '',
			classname: 'Form-inputLine'
		}
	]
};

export const InputReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_INPUTS':
			return action.payload;

		default:
			return state;
	}
};
