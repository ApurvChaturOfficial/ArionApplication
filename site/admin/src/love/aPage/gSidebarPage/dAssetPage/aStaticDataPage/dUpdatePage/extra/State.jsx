const InitialState = {
	A: "Bro... Inside StaticDataUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const StaticDataUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-static-data-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-static-data-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-static-data-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-static-data-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-static-data-update-page',
	ReceivedObject: 'received-object-static-data-update-page',
	RequiredObject: 'required-object-static-data-update-page',
	ExtraObject: 'extra-object-static-data-update-page',
}  

export default StaticDataUpdatePageState