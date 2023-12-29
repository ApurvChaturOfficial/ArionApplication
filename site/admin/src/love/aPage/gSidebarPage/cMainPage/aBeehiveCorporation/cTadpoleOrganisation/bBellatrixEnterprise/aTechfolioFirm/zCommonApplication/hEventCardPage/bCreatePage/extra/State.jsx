const InitialState = {
	A: "Bro... Inside EventCardCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventCardCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-card-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-event-card-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-card-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-card-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-card-create-page',
	ReceivedObject: 'received-object-event-card-create-page',
	RequiredObject: 'required-object-event-card-create-page',
	ExtraObject: 'extra-object-event-card-create-page',
}  

export default EventCardCreatePageState