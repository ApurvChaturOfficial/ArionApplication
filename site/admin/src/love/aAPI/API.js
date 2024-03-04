import APIBase from "./APIBase"

const API = {
	GlobalAPI: {
		HomeAPI: {
			ListAPI: (props) => {
				return (
					APIBase({
						method: "GET",
						url: `/api/v1/home/list`,
					})
				)
			}, 
			CreateAPI: (props) => {
				return (
					APIBase({
						method: "POST",
						url: `/api/v1/home/create`,
						data: props.data,
					})
				)
			}, 
			RetrieveAPI: (props) => {
				return (
					APIBase({
						method: "GET",
						url: `/api/v1/home-page/retrieve`,
					})
				)
			}, 
			UpdateAPI: (props) => {
				return (
					APIBase({
						method: "PUT",
						url: `/api/v1/home/update/${props.id}`,
						data: props.data,
					})
				)
			}, 
			DeleteAPI: (props) => {
				return (
					APIBase({
						method: "DELETE",
						url: `/api/v1/home/delete/${props.id}`,
					})
				)
			}, 
		},
		AboutAPI: {
			ListAPI: (props) => {
				return (
					APIBase({
						method: "GET",
						url: `/api/v1/about/list`,
					})
				)
			}, 
			CreateAPI: (props) => {
				return (
					APIBase({
						method: "POST",
						url: `/api/v1/about/create`,
						data: props.data,
					})
				)
			}, 
			RetrieveAPI: (props) => {
				return (
					APIBase({
						method: "GET",
						url: `/api/v1/about/retrieve/${props.id}`,
					})
				)
			}, 
			UpdateAPI: (props) => {
				return (
					APIBase({
						method: "PUT",
						url: `/api/v1/about/update/${props.id}`,
						data: props.data,
					})
				)
			}, 
			DeleteAPI: (props) => {
				return (
					APIBase({
						method: "DELETE",
						url: `/api/v1/about/delete/${props.id}`,
					})
				)
			}, 
		},
		ContactAPI: {
			ListAPI: (props) => {
				return (
					APIBase({
						method: "GET",
						url: `/api/v1/contact/list`,
					})
				)
			}, 
			CreateAPI: (props) => {
				return (
					APIBase({
						method: "POST",
						url: `/api/v1/contact/create`,
						data: props.data,
					})
				)
			}, 
			RetrieveAPI: (props) => {
				return (
					APIBase({
						method: "GET",
						url: `/api/v1/contact/retrieve/${props.id}`,
					})
				)
			}, 
			UpdateAPI: (props) => {
				return (
					APIBase({
						method: "PUT",
						url: `/api/v1/contact/update/${props.id}`,
						data: props.data,
					})
				)
			}, 
			DeleteAPI: (props) => {
				return (
					APIBase({
						method: "DELETE",
						url: `/api/v1/contact/delete/${props.id}`,
					})
				)
			}, 
		},
	},
	AuthAPI: {
		LoginAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/user/login`,
					data: props.data,
				})
			)
		},    
		RegisterAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/user/register`,
					data: props.data,
				})
			)
		}, 
		ForgotPasswordAPI: (props) => {
			return (
				APIBase({
					method: "POST",
					url: `/api/v1/user/forgot-password`,
					data: props.data,
				})
			)
		},    
		ResetPasswordAPI: (props) => {
			return (
				APIBase({
					method: "PUT",
					url: `/api/v1/user/reset-password/${props.token}`,
					data: props.data,
				})
			)
		},   
	},
	ContentAPI: {
		TopbarAPI: {
			ProfileAPI: {
				RetrieveAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/user/profile-retrieve`,
						})
					)
				}, 
				UpdateAPI: (props) => {
					return (
						APIBase({
							method: "POST",
							url: `/api/v1/user/profile-update`,
							data: props.data,
						})
					)
				}, 
				UpdatePasswordAPI: (props) => {
					return (
						APIBase({
							method: "POST",
							url: `/api/v1/user/profile-update-password`,
							data: props.data,
						})
					)
				}, 
				DeleteAPI: (props) => {
					return (
						APIBase({
							method: "POST",
							url: `/api/v1/user/profile-delete`,
						})
					)
				}, 
			},
			Logout: {
				LogoutAPI: (props) => {
					return (
						APIBase({
							method: "GET",
							url: `/api/v1/user/logout`,
						})
					)
				},  
			},	
		},
		SidebarAPI: {
			SettingAPI: {
				BaseAPI: {
					ListAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/base/list`,
							})
						)
					}, 
					CreateAPI: (props) => {
						return (
							APIBase({
								method: "POST",
								url: `/api/v1/base/create`,
								data: props.data,
							})
						)
					}, 
					RetrieveAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/base/retrieve/${props.id}`,
							})
						)
					}, 
					UpdateAPI: (props) => {
						return (
							APIBase({
								method: "PUT",
								url: `/api/v1/base/update/${props.id}`,
								data: props.data,
							})
						)
					}, 
					DeleteAPI: (props) => {
						return (
							APIBase({
								method: "DELETE",
								url: `/api/v1/base/delete/${props.id}`,
							})
						)
					}, 
				},		
				AdminHeroAPI: {
					ListAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/admin-hero/list`,
							})
						)
					}, 
					CreateAPI: (props) => {
						return (
							APIBase({
								method: "POST",
								url: `/api/v1/admin-hero/create`,
								data: props.data,
							})
						)
					}, 
					RetrieveAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/admin-hero/retrieve/${props.id}`,
							})
						)
					}, 
					UpdateAPI: (props) => {
						return (
							APIBase({
								method: "PUT",
								url: `/api/v1/admin-hero/update/${props.id}`,
								data: props.data,
							})
						)
					}, 
					DeleteAPI: (props) => {
						return (
							APIBase({
								method: "DELETE",
								url: `/api/v1/admin-hero/delete/${props.id}`,
							})
						)
					}, 
				},		
			},
			AdministrationAPI: {
				UserAPI: {
					ListAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/user/list`,
							})
						)
					}, 
					CreateAPI: (props) => {
						return (
							APIBase({
								method: "POST",
								url: `/api/v1/user/create`,
								data: props.data,
							})
						)
					}, 
					RetrieveAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/user/retrieve/${props.id}`,
							})
						)
					}, 
					UpdateAPI: (props) => {
						return (
							APIBase({
								method: "PUT",
								url: `/api/v1/user/update/${props.id}`,
								data: props.data,
							})
						)
					}, 
					UpdatePasswordAPI: (props) => {
						return (
							APIBase({
								method: "PUT",
								url: `/api/v1/user/update-password/${props.id}`,
								data: props.data,
							})
						)
					}, 
					DeleteAPI: (props) => {
						return (
							APIBase({
								method: "DELETE",
								url: `/api/v1/user/delete/${props.id}`,
							})
						)
					}, 
				},		
				RoleAPI: {
					ListAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/role/list`,
							})
						)
					}, 
					CreateAPI: (props) => {
						return (
							APIBase({
								method: "POST",
								url: `/api/v1/role/create`,
								data: props.data,
							})
						)
					}, 
					RetrieveAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/role/retrieve/${props.id}`,
							})
						)
					}, 
					UpdateAPI: (props) => {
						return (
							APIBase({
								method: "PUT",
								url: `/api/v1/role/update/${props.id}`,
								data: props.data,
							})
						)
					}, 
					DeleteAPI: (props) => {
						return (
							APIBase({
								method: "DELETE",
								url: `/api/v1/role/delete/${props.id}`,
							})
						)
					}, 
				},		
				MenuAPI: {
					ListAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/menu/list`,
							})
						)
					}, 
					CreateAPI: (props) => {
						return (
							APIBase({
								method: "POST",
								url: `/api/v1/menu/create`,
								data: props.data,
							})
						)
					}, 
					RetrieveAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/menu/retrieve/${props.id}`,
							})
						)
					}, 
					UpdateAPI: (props) => {
						return (
							APIBase({
								method: "PUT",
								url: `/api/v1/menu/update/${props.id}`,
								data: props.data,
							})
						)
					}, 
					DeleteAPI: (props) => {
						return (
							APIBase({
								method: "DELETE",
								url: `/api/v1/menu/delete/${props.id}`,
							})
						)
					}, 
				},		
			},
			MainAPI: 
			import.meta.env.VITE_CORPORATION === "BeehiveCorporation" ? (
				import.meta.env.VITE_ORGANISATION === "AndromedaOrganisation" ? (
					import.meta.env.VITE_ENTERPRISE === "AcruxEnterprise" ? (
						import.meta.env.VITE_APPLICATION === "ArionApplication" || 
						import.meta.env.VITE_APPLICATION === "AnkasApplication" || 
						import.meta.env.VITE_APPLICATION === "AbolApplication" ? ({
							HeroAPI: {
								ListAPI: (props) => {
									return (
										APIBase({
											method: "GET",
											url: `/api/v1/hero/list`,
										})
									)
								}, 
								CreateAPI: (props) => {
									return (
										APIBase({
											method: "POST",
											url: `/api/v1/hero/create`,
											data: props.data,
										})
									)
								}, 
								RetrieveAPI: (props) => {
									return (
										APIBase({
											method: "GET",
											url: `/api/v1/hero/retrieve/${props.id}`,
										})
									)
								}, 
								UpdateAPI: (props) => {
									return (
										APIBase({
											method: "PUT",
											url: `/api/v1/hero/update/${props.id}`,
											data: props.data,
										})
									)
								}, 
								DeleteAPI: (props) => {
									return (
										APIBase({
											method: "DELETE",
											url: `/api/v1/hero/delete/${props.id}`,
										})
									)
								}, 
							},		
							CounterAPI: {
								ListAPI: (props) => {
									return (
										APIBase({
											method: "GET",
											url: `/api/v1/counter/list`,
										})
									)
								}, 
								CreateAPI: (props) => {
									return (
										APIBase({
											method: "POST",
											url: `/api/v1/counter/create`,
											data: props.data,
										})
									)
								}, 
								RetrieveAPI: (props) => {
									return (
										APIBase({
											method: "GET",
											url: `/api/v1/counter/retrieve/${props.id}`,
										})
									)
								}, 
								UpdateAPI: (props) => {
									return (
										APIBase({
											method: "PUT",
											url: `/api/v1/counter/update/${props.id}`,
											data: props.data,
										})
									)
								}, 
								DeleteAPI: (props) => {
									return (
										APIBase({
											method: "DELETE",
											url: `/api/v1/counter/delete/${props.id}`,
										})
									)
								}, 
							},		
							ProgramSectionAPI: {
								ListAPI: (props) => {
									return (
										APIBase({
											method: "GET",
											url: `/api/v1/program-section/list`,
										})
									)
								}, 
								CreateAPI: (props) => {
									return (
										APIBase({
											method: "POST",
											url: `/api/v1/program-section/create`,
											data: props.data,
										})
									)
								}, 
								RetrieveAPI: (props) => {
									return (
										APIBase({
											method: "GET",
											url: `/api/v1/program-section/retrieve/${props.id}`,
										})
									)
								}, 
								UpdateAPI: (props) => {
									return (
										APIBase({
											method: "PUT",
											url: `/api/v1/program-section/update/${props.id}`,
											data: props.data,
										})
									)
								}, 
								DeleteAPI: (props) => {
									return (
										APIBase({
											method: "DELETE",
											url: `/api/v1/program-section/delete/${props.id}`,
										})
									)
								}, 
							},		
							ProgramAPI: {
								ListAPI: (props) => {
									return (
										APIBase({
											method: "GET",
											url: `/api/v1/program/list`,
										})
									)
								}, 
								CreateAPI: (props) => {
									return (
										APIBase({
											method: "POST",
											url: `/api/v1/program/create`,
											data: props.data,
										})
									)
								}, 
								RetrieveAPI: (props) => {
									return (
										APIBase({
											method: "GET",
											url: `/api/v1/program/retrieve/${props.id}`,
										})
									)
								}, 
								UpdateAPI: (props) => {
									return (
										APIBase({
											method: "PUT",
											url: `/api/v1/program/update/${props.id}`,
											data: props.data,
										})
									)
								}, 
								DeleteAPI: (props) => {
									return (
										APIBase({
											method: "DELETE",
											url: `/api/v1/program/delete/${props.id}`,
										})
									)
								}, 
							},					
						}) : null
					) :
					import.meta.env.VITE_ENTERPRISE === "AnserEnterprise" ? ({}) : null
				) :
				import.meta.env.VITE_ORGANISATION === "PinwheelOrganisation" ? (
					import.meta.env.VITE_APPLICATION === "BeehiveApplication" ||
					import.meta.env.VITE_APPLICATION === "AndromedaApplication" ||
					import.meta.env.VITE_APPLICATION === "TadpoleApplication" ? ({
						HeroAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/hero/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/hero/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/hero/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/hero/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/hero/delete/${props.id}`,
									})
								)
							}, 
						},		
						CounterAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/counter/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/counter/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/counter/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/counter/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/counter/delete/${props.id}`,
									})
								)
							}, 
						},		
						AboutAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/about/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/about/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/about/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/about/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/about/delete/${props.id}`,
									})
								)
							}, 
						},		
						ServiceAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/service/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/service/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/service/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/service/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/service/delete/${props.id}`,
									})
								)
							}, 
						},		
						BranchAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/branch/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/branch/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/branch/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/branch/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/branch/delete/${props.id}`,
									})
								)
							}, 
						},		
						SubBranchAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/sub-branch/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/sub-branch/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/sub-branch/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/sub-branch/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/sub-branch/delete/${props.id}`,
									})
								)
							}, 
						},		
						SubSubBranchAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/sub-sub-branch/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/sub-sub-branch/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/sub-sub-branch/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/sub-sub-branch/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/sub-sub-branch/delete/${props.id}`,
									})
								)
							}, 
						},		
						ProjectSectionAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project-section/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/project-section/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project-section/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/project-section/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/project-section/delete/${props.id}`,
									})
								)
							}, 
						},		
						ProjectGroupAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project-group/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/project-group/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project-group/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/project-group/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/project-group/delete/${props.id}`,
									})
								)
							}, 
						},		
						ProjectAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/project/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/project/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/project/delete/${props.id}`,
									})
								)
							}, 
						},				
					}) :
					import.meta.env.VITE_APPLICATION === "PinwheelApplication" ||
					import.meta.env.VITE_APPLICATION === "AcruxApplication" ||
					import.meta.env.VITE_APPLICATION === "AnserApplication" ||
					import.meta.env.VITE_APPLICATION === "AquilaApplication" ||
					import.meta.env.VITE_APPLICATION === "BellatrixApplication" ||
					import.meta.env.VITE_APPLICATION === "CapellaApplication" ? ({
						HeroAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/hero/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/hero/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/hero/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/hero/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/hero/delete/${props.id}`,
									})
								)
							}, 
						},		
						CounterAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/counter/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/counter/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/counter/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/counter/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/counter/delete/${props.id}`,
									})
								)
							}, 
						},		
						AboutAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/about/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/about/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/about/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/about/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/about/delete/${props.id}`,
									})
								)
							}, 
						},		
						ServiceAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/service/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/service/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/service/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/service/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/service/delete/${props.id}`,
									})
								)
							}, 
						},		
						ProjectSectionAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project-section/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/project-section/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project-section/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/project-section/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/project-section/delete/${props.id}`,
									})
								)
							}, 
						},		
						ProjectGroupAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project-group/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/project-group/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project-group/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/project-group/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/project-group/delete/${props.id}`,
									})
								)
							}, 
						},		
						ProjectAPI: {
							ListAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project/list`,
									})
								)
							}, 
							CreateAPI: (props) => {
								return (
									APIBase({
										method: "POST",
										url: `/api/v1/project/create`,
										data: props.data,
									})
								)
							}, 
							RetrieveAPI: (props) => {
								return (
									APIBase({
										method: "GET",
										url: `/api/v1/project/retrieve/${props.id}`,
									})
								)
							}, 
							UpdateAPI: (props) => {
								return (
									APIBase({
										method: "PUT",
										url: `/api/v1/project/update/${props.id}`,
										data: props.data,
									})
								)
							}, 
							DeleteAPI: (props) => {
								return (
									APIBase({
										method: "DELETE",
										url: `/api/v1/project/delete/${props.id}`,
									})
								)
							}, 
						},				
					}) : null
				) :
				import.meta.env.VITE_ORGANISATION === "TadpoleOrganisation" ? (
					import.meta.env.VITE_ENTERPRISE === "AquilaEnterprise" ? ({}) :
					import.meta.env.VITE_ENTERPRISE === "BellatrixEnterprise" ? (
						import.meta.env.VITE_FIRM === "TechfolioFirm" ? (
							import.meta.env.VITE_APPLICATION === "TechfolioApplication" ? ({
								HeroAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/hero/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/hero/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/hero/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/hero/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/hero/delete/${props.id}`,
											})
										)
									}, 
								},		
								CounterAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/counter/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/counter/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/counter/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/counter/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/counter/delete/${props.id}`,
											})
										)
									}, 
								},		
								ProgramSectionAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/program-section/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/program-section/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/program-section/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/program-section/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/program-section/delete/${props.id}`,
											})
										)
									}, 
								},		
								ProgramAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/program/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/program/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/program/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/program/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/program/delete/${props.id}`,
											})
										)
									}, 
								},					
							}) :
							import.meta.env.VITE_APPLICATION === "ApurvChaturApplication" ||
							import.meta.env.VITE_APPLICATION === "AnushreeMandapeApplication" ||
							import.meta.env.VITE_APPLICATION === "SofieBerkinApplication" ? ({
								HeroAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/hero/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/hero/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/hero/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/hero/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/hero/delete/${props.id}`,
											})
										)
									}, 
								},		
								AboutAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/about/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/about/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/about/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/about/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/about/delete/${props.id}`,
											})
										)
									}, 
								},		
								ExperienceAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/experience/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/experience/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/experience/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/experience/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/experience/delete/${props.id}`,
											})
										)
									}, 
								},		
								ServiceAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/service/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/service/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/service/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/service/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/service/delete/${props.id}`,
											})
										)
									}, 
								},		
								PortfolioAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/portfolio/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/portfolio/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/portfolio/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/portfolio/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/portfolio/delete/${props.id}`,
											})
										)
									}, 
								},		
								PortfolioCardAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/portfolio-card/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/portfolio-card/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/portfolio-card/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/portfolio-card/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/portfolio-card/delete/${props.id}`,
											})
										)
									}, 
								},		
								EventAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/event/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/event/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/event/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/event/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/event/delete/${props.id}`,
											})
										)
									}, 
								},		
								EventCardAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/event-card/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/event-card/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/event-card/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/event-card/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/event-card/delete/${props.id}`,
											})
										)
									}, 
								},		
								BlogAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/blog/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/blog/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/blog/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/blog/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/blog/delete/${props.id}`,
											})
										)
									}, 
								},		
								BlogCardAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/blog-card/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/blog-card/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/blog-card/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/blog-card/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/blog-card/delete/${props.id}`,
											})
										)
									}, 
								},		
							}) : null
						) : 
						import.meta.env.VITE_FIRM === "BlogifyFirm" ? (
							import.meta.env.VITE_APPLICATION === "BlogifyApplication" ? ({
								HeroAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/hero/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/hero/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/hero/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/hero/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/hero/delete/${props.id}`,
											})
										)
									}, 
								},		
								CounterAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/counter/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/counter/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/counter/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/counter/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/counter/delete/${props.id}`,
											})
										)
									}, 
								},		
								ProgramSectionAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/program-section/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/program-section/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/program-section/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/program-section/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/program-section/delete/${props.id}`,
											})
										)
									}, 
								},		
								ProgramAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/program/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/program/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/program/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/program/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/program/delete/${props.id}`,
											})
										)
									}, 
								},					
							}) :
							import.meta.env.VITE_APPLICATION === "SrimadBhagwatamApplication" ||
							import.meta.env.VITE_APPLICATION === "BhagwadGitaApplication" ||
							import.meta.env.VITE_APPLICATION === "InterviewQuestionApplication" ? ({
								HeroAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/hero/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/hero/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/hero/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/hero/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/hero/delete/${props.id}`,
											})
										)
									}, 
								},		
								AboutAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/about/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/about/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/about/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/about/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/about/delete/${props.id}`,
											})
										)
									}, 
								},		
								ExperienceAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/experience/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/experience/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/experience/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/experience/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/experience/delete/${props.id}`,
											})
										)
									}, 
								},		
								ServiceAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/service/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/service/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/service/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/service/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/service/delete/${props.id}`,
											})
										)
									}, 
								},		
								PortfolioAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/portfolio/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/portfolio/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/portfolio/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/portfolio/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/portfolio/delete/${props.id}`,
											})
										)
									}, 
								},		
								PortfolioCardAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/portfolio-card/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/portfolio-card/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/portfolio-card/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/portfolio-card/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/portfolio-card/delete/${props.id}`,
											})
										)
									}, 
								},		
								EventAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/event/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/event/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/event/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/event/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/event/delete/${props.id}`,
											})
										)
									}, 
								},		
								EventCardAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/event-card/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/event-card/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/event-card/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/event-card/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/event-card/delete/${props.id}`,
											})
										)
									}, 
								},		
								BlogAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/blog/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/blog/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/blog/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/blog/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/blog/delete/${props.id}`,
											})
										)
									}, 
								},		
								BlogCardAPI: {
									ListAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/blog-card/list`,
											})
										)
									}, 
									CreateAPI: (props) => {
										return (
											APIBase({
												method: "POST",
												url: `/api/v1/blog-card/create`,
												data: props.data,
											})
										)
									}, 
									RetrieveAPI: (props) => {
										return (
											APIBase({
												method: "GET",
												url: `/api/v1/blog-card/retrieve/${props.id}`,
											})
										)
									}, 
									UpdateAPI: (props) => {
										return (
											APIBase({
												method: "PUT",
												url: `/api/v1/blog-card/update/${props.id}`,
												data: props.data,
											})
										)
									}, 
									DeleteAPI: (props) => {
										return (
											APIBase({
												method: "DELETE",
												url: `/api/v1/blog-card/delete/${props.id}`,
											})
										)
									}, 
								},		
							}) : null
						) : null
					) :
					import.meta.env.VITE_ENTERPRISE === "CapellaEnterprise" ? ({}) : null
				) : null
			) : null,
			AssetAPI: {
				StaticDataAPI: {
					ListAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/static-data/list`,
							})
						)
					}, 
					CreateAPI: (props) => {
						return (
							APIBase({
								method: "POST",
								url: `/api/v1/static-data/create`,
								data: props.data,
							})
						)
					}, 
					RetrieveAPI: (props) => {
						return (
							APIBase({
								method: "GET",
								url: `/api/v1/static-data/retrieve/${props.id}`,
							})
						)
					}, 
					UpdateAPI: (props) => {
						return (
							APIBase({
								method: "PUT",
								url: `/api/v1/static-data/update/${props.id}`,
								data: props.data,
							})
						)
					}, 
					DeleteAPI: (props) => {
						return (
							APIBase({
								method: "DELETE",
								url: `/api/v1/static-data/delete/${props.id}`,
							})
						)
					}, 
				},		
			},

		}
	}
}

export default API