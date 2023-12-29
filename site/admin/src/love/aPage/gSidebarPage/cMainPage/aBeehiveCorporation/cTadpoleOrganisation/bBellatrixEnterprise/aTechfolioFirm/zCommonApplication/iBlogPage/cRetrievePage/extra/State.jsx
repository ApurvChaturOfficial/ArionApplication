const InitialState = {
	A: "Bro... Inside BlogRetrievePageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogRetrievePageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-retrieve-page':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-retrieve-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-retrieve-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-retrieve-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-retrieve-page',
	ReceivedObject: 'received-object-blog-retrieve-page',
	RequiredObject: 'required-object-blog-retrieve-page',
	ExtraObject: 'extra-object-blog-retrieve-page',
}  

export default BlogRetrievePageState