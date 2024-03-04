const InitialState = {
	A: "Bro... Inside BlogCardDeletePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogCardDeletePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-card-delete-page':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-card-delete-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-card-delete-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-card-delete-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-card-delete-page',
	ReceivedObject: 'received-object-blog-card-delete-page',
	RequiredObject: 'required-object-blog-card-delete-page',
	ExtraObject: 'extra-object-blog-card-delete-page',
}  

export default BlogCardDeletePageState