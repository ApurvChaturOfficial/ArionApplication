const InitialState = {
	A: "Bro... Inside StaticDataCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const StaticDataCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-static-data-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-static-data-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-static-data-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-static-data-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-static-data-create-page',
	ReceivedObject: 'received-object-static-data-create-page',
	RequiredObject: 'required-object-static-data-create-page',
	ExtraObject: 'extra-object-static-data-create-page',
}  

export default StaticDataCreatePageState