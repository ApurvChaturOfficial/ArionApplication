const InitialState = {
	A: "Bro... Inside BlogDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-delete-page',
	ReceivedObject: 'received-object-blog-delete-page',
	RequiredObject: 'required-object-blog-delete-page',
	ExtraObject: 'extra-object-blog-delete-page',
}  

export default BlogDeletePageState