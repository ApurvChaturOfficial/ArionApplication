const RouteName = {
	GlobalRoute: {
		HomeRoute: "",
		AboutRoute: "about",
		ContactRoute: "contact",
	},
	AuthRoute: {
		LoginRoute: "login",
		RegisterRoute: "register",
		ForgotPasswordRoute: "forgot-password",
		ResetPasswordRoute: "reset-password"
	},
	ContentRoute: {
		TopbarRoute: {
			ProfileRetrieveRoute: "profile-retrieve",
			ProfileUpdateRoute: "profile-update",
			ProfilePasswordUpdateRoute: "profile-password-update",
			ProfileDeleteRoute: "profile-delete",
		},
		SidebarRoute: {
			SettingRoute: {
				BaseRoute: {
					ListRoute: "base-list",
					CreateRoute: "base-create",
					RetrieveRoute: "base-retrieve",
					UpdateRoute: "base-update",
					DeleteRoute: "base-delete",
				},
				AdminHeroRoute: {
					ListRoute: "admin-hero-list",
					CreateRoute: "admin-hero-create",
					RetrieveRoute: "admin-hero-retrieve",
					UpdateRoute: "admin-hero-update",
					DeleteRoute: "admin-hero-delete",
				},
			},
			AdministrationRoute: {
				UserRoute: {
					ListRoute: "user-list",
					CreateRoute: "user-create",
					RetrieveRoute: "user-retrieve",
					UpdateRoute: "user-update",
					DeleteRoute: "user-delete",
				},
				RoleRoute: {
					ListRoute: "role-list",
					CreateRoute: "role-create",
					RetrieveRoute: "role-retrieve",
					UpdateRoute: "role-update",
					DeleteRoute: "role-delete",
				},
				MenuRoute: {
					ListRoute: "menu-list",
					CreateRoute: "menu-create",
					RetrieveRoute: "menu-retrieve",
					UpdateRoute: "menu-update",
					DeleteRoute: "menu-delete",
				},
			},
			MainRoute: 
			import.meta.env.VITE_CORPORATION === "BeehiveCorporation" ? (
				import.meta.env.VITE_ORGANISATION === "AndromedaOrganisation" ? (
					import.meta.env.VITE_ENTERPRISE === "AcruxEnterprise" ? (
						import.meta.env.VITE_APPLICATION === "ArionApplication" || 
						import.meta.env.VITE_APPLICATION === "AnkasApplication" || 
						import.meta.env.VITE_APPLICATION === "AbolApplication" ? ({
							HeroRoute: {
								ListRoute: "hero-list",
								CreateRoute: "hero-create",
								RetrieveRoute: "hero-retrieve",
								UpdateRoute: "hero-update",
								DeleteRoute: "hero-delete",
							},
							CounterRoute: {
								ListRoute: "counter-list",
								CreateRoute: "counter-create",
								RetrieveRoute: "counter-retrieve",
								UpdateRoute: "counter-update",
								DeleteRoute: "counter-delete",
							},
							ProgramSectionRoute: {
								ListRoute: "program-section-list",
								CreateRoute: "program-section-create",
								RetrieveRoute: "program-section-retrieve",
								UpdateRoute: "program-section-update",
								DeleteRoute: "program-section-delete",
							},
							ProgramRoute: {
								ListRoute: "program-list",
								CreateRoute: "program-create",
								RetrieveRoute: "program-retrieve",
								UpdateRoute: "program-update",
								DeleteRoute: "program-delete",
							},
						}) : null
					) :
					import.meta.env.VITE_ENTERPRISE === "AnserEnterprise" ? ({}) : null
				) :
				import.meta.env.VITE_ORGANISATION === "PinwheelOrganisation" ? (
					import.meta.env.VITE_APPLICATION === "BeehiveApplication" ||
					import.meta.env.VITE_APPLICATION === "AndromedaApplication" ||
					import.meta.env.VITE_APPLICATION === "TadpoleApplication" ? ({
						HeroRoute: {
							ListRoute: "hero-list",
							CreateRoute: "hero-create",
							RetrieveRoute: "hero-retrieve",
							UpdateRoute: "hero-update",
							DeleteRoute: "hero-delete",
						},
						CounterRoute: {
							ListRoute: "counter-list",
							CreateRoute: "counter-create",
							RetrieveRoute: "counter-retrieve",
							UpdateRoute: "counter-update",
							DeleteRoute: "counter-delete",
						},
						AboutRoute: {
							ListRoute: "about-list",
							CreateRoute: "about-create",
							RetrieveRoute: "about-retrieve",
							UpdateRoute: "about-update",
							DeleteRoute: "about-delete",
						},
						ServiceRoute: {
							ListRoute: "service-list",
							CreateRoute: "service-create",
							RetrieveRoute: "service-retrieve",
							UpdateRoute: "service-update",
							DeleteRoute: "service-delete",
						},
						BranchRoute: {
							ListRoute: "branch-list",
							CreateRoute: "branch-create",
							RetrieveRoute: "branch-retrieve",
							UpdateRoute: "branch-update",
							DeleteRoute: "branch-delete",
						},
						SubBranchRoute: {
							ListRoute: "sub-branch-list",
							CreateRoute: "sub-branch-create",
							RetrieveRoute: "sub-branch-retrieve",
							UpdateRoute: "sub-branch-update",
							DeleteRoute: "sub-branch-delete",
						},
						SubSubBranchRoute: {
							ListRoute: "sub-sub-branch-list",
							CreateRoute: "sub-sub-branch-create",
							RetrieveRoute: "sub-sub-branch-retrieve",
							UpdateRoute: "sub-sub-branch-update",
							DeleteRoute: "sub-sub-branch-delete",
						},
						ProjectSectionRoute: {
							ListRoute: "project-section-list",
							CreateRoute: "project-section-create",
							RetrieveRoute: "project-section-retrieve",
							UpdateRoute: "project-section-update",
							DeleteRoute: "project-section-delete",
						},
						ProjectGroupRoute: {
							ListRoute: "project-group-list",
							CreateRoute: "project-group-create",
							RetrieveRoute: "project-group-retrieve",
							UpdateRoute: "project-group-update",
							DeleteRoute: "project-group-delete",
						},
						ProjectRoute: {
							ListRoute: "project-list",
							CreateRoute: "project-create",
							RetrieveRoute: "project-retrieve",
							UpdateRoute: "project-update",
							DeleteRoute: "project-delete",
						},
					}) :
					import.meta.env.VITE_APPLICATION === "PinwheelApplication" ||
					import.meta.env.VITE_APPLICATION === "AcruxApplication" ||
					import.meta.env.VITE_APPLICATION === "AnserApplication" ||
					import.meta.env.VITE_APPLICATION === "AquilaApplication" ||
					import.meta.env.VITE_APPLICATION === "BellatrixApplication" ||
					import.meta.env.VITE_APPLICATION === "CapellaApplication" ? ({
						HeroRoute: {
							ListRoute: "hero-list",
							CreateRoute: "hero-create",
							RetrieveRoute: "hero-retrieve",
							UpdateRoute: "hero-update",
							DeleteRoute: "hero-delete",
						},
						CounterRoute: {
							ListRoute: "counter-list",
							CreateRoute: "counter-create",
							RetrieveRoute: "counter-retrieve",
							UpdateRoute: "counter-update",
							DeleteRoute: "counter-delete",
						},
						AboutRoute: {
							ListRoute: "about-list",
							CreateRoute: "about-create",
							RetrieveRoute: "about-retrieve",
							UpdateRoute: "about-update",
							DeleteRoute: "about-delete",
						},
						ServiceRoute: {
							ListRoute: "service-list",
							CreateRoute: "service-create",
							RetrieveRoute: "service-retrieve",
							UpdateRoute: "service-update",
							DeleteRoute: "service-delete",
						},
						ProjectSectionRoute: {
							ListRoute: "project-section-list",
							CreateRoute: "project-section-create",
							RetrieveRoute: "project-section-retrieve",
							UpdateRoute: "project-section-update",
							DeleteRoute: "project-section-delete",
						},
						ProjectGroupRoute: {
							ListRoute: "project-group-list",
							CreateRoute: "project-group-create",
							RetrieveRoute: "project-group-retrieve",
							UpdateRoute: "project-group-update",
							DeleteRoute: "project-group-delete",
						},
						ProjectRoute: {
							ListRoute: "project-list",
							CreateRoute: "project-create",
							RetrieveRoute: "project-retrieve",
							UpdateRoute: "project-update",
							DeleteRoute: "project-delete",
						},
					}) : null
				) :
				import.meta.env.VITE_ORGANISATION === "TadpoleOrganisation" ? (
					import.meta.env.VITE_ENTERPRISE === "AquilaEnterprise" ? ({}) :
					import.meta.env.VITE_ENTERPRISE === "BellatrixEnterprise" ? (
						import.meta.env.VITE_FIRM === "TechfolioFirm" ? (
							import.meta.env.VITE_APPLICATION === "TechfolioApplication" ? ({
								HeroRoute: {
									ListRoute: "hero-list",
									CreateRoute: "hero-create",
									RetrieveRoute: "hero-retrieve",
									UpdateRoute: "hero-update",
									DeleteRoute: "hero-delete",
								},
								CounterRoute: {
									ListRoute: "counter-list",
									CreateRoute: "counter-create",
									RetrieveRoute: "counter-retrieve",
									UpdateRoute: "counter-update",
									DeleteRoute: "counter-delete",
								},
								ProgramSectionRoute: {
									ListRoute: "program-section-list",
									CreateRoute: "program-section-create",
									RetrieveRoute: "program-section-retrieve",
									UpdateRoute: "program-section-update",
									DeleteRoute: "program-section-delete",
								},
								ProgramRoute: {
									ListRoute: "program-list",
									CreateRoute: "program-create",
									RetrieveRoute: "program-retrieve",
									UpdateRoute: "program-update",
									DeleteRoute: "program-delete",
								},
							}) :
							import.meta.env.VITE_APPLICATION === "ApurvChaturApplication" ||
							import.meta.env.VITE_APPLICATION === "AnushreeMandapeApplication" ||
							import.meta.env.VITE_APPLICATION === "SofieBerkinApplication" ? ({
								HeroRoute: {
									ListRoute: "hero-list",
									CreateRoute: "hero-create",
									RetrieveRoute: "hero-retrieve",
									UpdateRoute: "hero-update",
									DeleteRoute: "hero-delete",
								},
								AboutRoute: {
									ListRoute: "about-list",
									CreateRoute: "about-create",
									RetrieveRoute: "about-retrieve",
									UpdateRoute: "about-update",
									DeleteRoute: "about-delete",
								},
								ExperienceRoute: {
									ListRoute: "experience-list",
									CreateRoute: "experience-create",
									RetrieveRoute: "experience-retrieve",
									UpdateRoute: "experience-update",
									DeleteRoute: "experience-delete",
								},
								ServiceRoute: {
									ListRoute: "service-list",
									CreateRoute: "service-create",
									RetrieveRoute: "service-retrieve",
									UpdateRoute: "service-update",
									DeleteRoute: "service-delete",
								},
								PortfolioRoute: {
									ListRoute: "portfolio-list",
									CreateRoute: "portfolio-create",
									RetrieveRoute: "portfolio-retrieve",
									UpdateRoute: "portfolio-update",
									DeleteRoute: "portfolio-delete",
								},
								PortfolioCardRoute: {
									ListRoute: "portfolio-card-list",
									CreateRoute: "portfolio-card-create",
									RetrieveRoute: "portfolio-card-retrieve",
									UpdateRoute: "portfolio-card-update",
									DeleteRoute: "portfolio-card-delete",
								},
								EventRoute: {
									ListRoute: "event-list",
									CreateRoute: "event-create",
									RetrieveRoute: "event-retrieve",
									UpdateRoute: "event-update",
									DeleteRoute: "event-delete",
								},
								EventCardRoute: {
									ListRoute: "event-card-list",
									CreateRoute: "event-card-create",
									RetrieveRoute: "event-card-retrieve",
									UpdateRoute: "event-card-update",
									DeleteRoute: "event-card-delete",
								},
								BlogRoute: {
									ListRoute: "blog-list",
									CreateRoute: "blog-create",
									RetrieveRoute: "blog-retrieve",
									UpdateRoute: "blog-update",
									DeleteRoute: "blog-delete",
								},
								BlogCardRoute: {
									ListRoute: "blog-card-list",
									CreateRoute: "blog-card-create",
									RetrieveRoute: "blog-card-retrieve",
									UpdateRoute: "blog-card-update",
									DeleteRoute: "blog-card-delete",
								},
							}) : null
						) : 
						import.meta.env.VITE_FIRM === "BlogifyFirm" ? (
							import.meta.env.VITE_APPLICATION === "BlogifyApplication" ? ({
								HeroRoute: {
									ListRoute: "hero-list",
									CreateRoute: "hero-create",
									RetrieveRoute: "hero-retrieve",
									UpdateRoute: "hero-update",
									DeleteRoute: "hero-delete",
								},
								CounterRoute: {
									ListRoute: "counter-list",
									CreateRoute: "counter-create",
									RetrieveRoute: "counter-retrieve",
									UpdateRoute: "counter-update",
									DeleteRoute: "counter-delete",
								},
								ProgramSectionRoute: {
									ListRoute: "program-section-list",
									CreateRoute: "program-section-create",
									RetrieveRoute: "program-section-retrieve",
									UpdateRoute: "program-section-update",
									DeleteRoute: "program-section-delete",
								},
								ProgramRoute: {
									ListRoute: "program-list",
									CreateRoute: "program-create",
									RetrieveRoute: "program-retrieve",
									UpdateRoute: "program-update",
									DeleteRoute: "program-delete",
								},
							}) :
							import.meta.env.VITE_APPLICATION === "SrimadBhagwatamApplication" ||
							import.meta.env.VITE_APPLICATION === "BhagwadGitaApplication" ||
							import.meta.env.VITE_APPLICATION === "InterviewQuestionApplication" ? ({
								HeroRoute: {
									ListRoute: "hero-list",
									CreateRoute: "hero-create",
									RetrieveRoute: "hero-retrieve",
									UpdateRoute: "hero-update",
									DeleteRoute: "hero-delete",
								},
								AboutRoute: {
									ListRoute: "about-list",
									CreateRoute: "about-create",
									RetrieveRoute: "about-retrieve",
									UpdateRoute: "about-update",
									DeleteRoute: "about-delete",
								},
								ExperienceRoute: {
									ListRoute: "experience-list",
									CreateRoute: "experience-create",
									RetrieveRoute: "experience-retrieve",
									UpdateRoute: "experience-update",
									DeleteRoute: "experience-delete",
								},
								ServiceRoute: {
									ListRoute: "service-list",
									CreateRoute: "service-create",
									RetrieveRoute: "service-retrieve",
									UpdateRoute: "service-update",
									DeleteRoute: "service-delete",
								},
								PortfolioRoute: {
									ListRoute: "portfolio-list",
									CreateRoute: "portfolio-create",
									RetrieveRoute: "portfolio-retrieve",
									UpdateRoute: "portfolio-update",
									DeleteRoute: "portfolio-delete",
								},
								PortfolioCardRoute: {
									ListRoute: "portfolio-card-list",
									CreateRoute: "portfolio-card-create",
									RetrieveRoute: "portfolio-card-retrieve",
									UpdateRoute: "portfolio-card-update",
									DeleteRoute: "portfolio-card-delete",
								},
								EventRoute: {
									ListRoute: "event-list",
									CreateRoute: "event-create",
									RetrieveRoute: "event-retrieve",
									UpdateRoute: "event-update",
									DeleteRoute: "event-delete",
								},
								EventCardRoute: {
									ListRoute: "event-card-list",
									CreateRoute: "event-card-create",
									RetrieveRoute: "event-card-retrieve",
									UpdateRoute: "event-card-update",
									DeleteRoute: "event-card-delete",
								},
								BlogRoute: {
									ListRoute: "blog-list",
									CreateRoute: "blog-create",
									RetrieveRoute: "blog-retrieve",
									UpdateRoute: "blog-update",
									DeleteRoute: "blog-delete",
								},
								BlogCardRoute: {
									ListRoute: "blog-card-list",
									CreateRoute: "blog-card-create",
									RetrieveRoute: "blog-card-retrieve",
									UpdateRoute: "blog-card-update",
									DeleteRoute: "blog-card-delete",
								},
							}) : null
						) : null
					) :
					import.meta.env.VITE_ENTERPRISE === "CapellaEnterprise" ? ({}) : null
				) : null
			) : null,
			AssetRoute: {
				StaticDataRoute: {
					ListRoute: "static-data-list",
					CreateRoute: "static-data-create",
					RetrieveRoute: "static-data-retrieve",
					UpdateRoute: "static-data-update",
					DeleteRoute: "static-data-delete",
				},
			},
		},
	},
};

export default RouteName;

