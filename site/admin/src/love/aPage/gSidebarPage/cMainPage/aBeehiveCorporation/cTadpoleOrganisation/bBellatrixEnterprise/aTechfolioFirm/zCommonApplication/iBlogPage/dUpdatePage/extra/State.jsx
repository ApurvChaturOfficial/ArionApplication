const InitialState = {
	A: "Bro... Inside BlogUpdatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogUpdatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-update-page':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-update-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-update-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-update-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-update-page',
	ReceivedObject: 'received-object-blog-update-page',
	RequiredObject: 'required-object-blog-update-page',
	ExtraObject: 'extra-object-blog-update-page',
}  

export default BlogUpdatePageState