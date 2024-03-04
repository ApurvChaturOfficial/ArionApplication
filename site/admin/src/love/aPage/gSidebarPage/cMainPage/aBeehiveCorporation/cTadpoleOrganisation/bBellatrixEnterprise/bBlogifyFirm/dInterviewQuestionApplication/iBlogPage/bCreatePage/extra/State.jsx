const InitialState = {
	A: "Bro... Inside BlogCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-create-page',
	ReceivedObject: 'received-object-blog-create-page',
	RequiredObject: 'required-object-blog-create-page',
	ExtraObject: 'extra-object-blog-create-page',
}  

export default BlogCreatePageState