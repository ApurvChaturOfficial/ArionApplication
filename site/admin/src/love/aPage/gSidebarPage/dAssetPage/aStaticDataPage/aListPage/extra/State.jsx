const InitialState = {
	A: "Bro... Inside StaticDataListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const StaticDataListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-static-data-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-static-data-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-static-data-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-static-data-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-static-data-list-page',
	ReceivedObject: 'received-object-static-data-list-page',
	RequiredObject: 'required-object-static-data-list-page',
	ExtraObject: 'extra-object-static-data-list-page',
}  

export default StaticDataListPageState