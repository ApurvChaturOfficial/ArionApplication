const InitialState = {
	A: "Bro... Inside EventListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const EventListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-event-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-event-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-event-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-event-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-event-list-page',
	ReceivedObject: 'received-object-event-list-page',
	RequiredObject: 'required-object-event-list-page',
	ExtraObject: 'extra-object-event-list-page',
}  

export default EventListPageState