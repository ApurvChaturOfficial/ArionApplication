const InitialState = {
	A: "Bro... Inside BlogCardCreatePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogCardCreatePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-card-create-page':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-card-create-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-card-create-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-card-create-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-card-create-page',
	ReceivedObject: 'received-object-blog-card-create-page',
	RequiredObject: 'required-object-blog-card-create-page',
	ExtraObject: 'extra-object-blog-card-create-page',
}  

export default BlogCardCreatePageState