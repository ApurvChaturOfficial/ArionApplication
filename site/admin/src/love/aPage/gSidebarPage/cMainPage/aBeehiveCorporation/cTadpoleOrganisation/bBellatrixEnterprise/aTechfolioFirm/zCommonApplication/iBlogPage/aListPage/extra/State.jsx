const InitialState = {
	A: "Bro... Inside BlogListPageState",
	FormObject: {
		FormValue: {},
		FormError: {},
		FormIsValid: false,
	},	
	ReceivedObject: {},
	RequiredObject: {},
	ExtraObject: {},
}

const BlogListPageState = (state=InitialState, action) => {
	switch (action.type) {
		case 'form-object-blog-list-page':
			return {...state, FormObject: action.payload}
		case 'received-object-blog-list-page':
			return {...state, ReceivedObject: action.payload}
		case 'required-object-blog-list-page':
			return {...state, RequiredObject: action.payload}
		case 'extra-object-blog-list-page':
			return {...state, ExtraObject: action.payload}
		default:
			return state
	}
}

export const Action = {
	FormObject: 'form-object-blog-list-page',
	ReceivedObject: 'received-object-blog-list-page',
	RequiredObject: 'required-object-blog-list-page',
	ExtraObject: 'extra-object-blog-list-page',
}  

export default BlogListPageState