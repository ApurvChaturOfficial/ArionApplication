const InitialState = {
	A: "Bro... Inside BlogCardUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogCardUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-card-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-card-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-card-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-card-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-card-update-page',
	ReceivedObject: 'received-object-blog-card-update-page',
	RequiredObject: 'required-object-blog-card-update-page',
	ExtraObject: 'extra-object-blog-card-update-page',
}  

export default BlogCardUpdatePageState