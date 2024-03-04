const InitialState = {
	A: "Bro... Inside StaticDataDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const StaticDataDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-static-data-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-static-data-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-static-data-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-static-data-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-static-data-delete-page',
	ReceivedObject: 'received-object-static-data-delete-page',
	RequiredObject: 'required-object-static-data-delete-page',
	ExtraObject: 'extra-object-static-data-delete-page',
}  

export default StaticDataDeletePageState