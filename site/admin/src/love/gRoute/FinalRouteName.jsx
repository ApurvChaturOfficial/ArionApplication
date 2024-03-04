import RouteName from "./RouteName";

const FinalRouteName = {
	GlobalRoute: {
		HomeRoute: `/${RouteName.GlobalRoute.HomeRoute}`,
		AboutRoute: `/${RouteName.GlobalRoute.AboutRoute}`,
		ContactRoute: `/${RouteName.GlobalRoute.ContactRoute}`,
	},
	AuthRoute: {
		LoginRoute: `/${RouteName.AuthRoute.LoginRoute}`,
		RegisterRoute: `/${RouteName.AuthRoute.RegisterRoute}`,
		ForgotPasswordRoute: `/${RouteName.AuthRoute.ForgotPasswordRoute}`,
		ResetPasswordRoute: `/${RouteName.AuthRoute.ResetPasswordRoute}`
	},
	ContentRoute: {
		TopbarRoute: {
			ProfileRoute: `/${RouteName.ContentRoute.TopbarRoute.ProfileRetrieveRoute}`,
			ProfileUpdateRoute: `/${RouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute}`,
			ProfilePasswordUpdateRoute: `/${RouteName.ContentRoute.TopbarRoute.ProfilePasswordUpdateRoute}`,
			ProfileDeleteRoute: `/${RouteName.ContentRoute.TopbarRoute.ProfileDeleteRoute}`,
		},
		SidebarRoute: {
			SettingRoute: {
				BaseRoute: {
					ListRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.ListRoute}`,
					CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.CreateRoute}`,
					RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.RetrieveRoute}`,
					UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.UpdateRoute}`,
					DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.DeleteRoute}`,
				},
				AdminHeroRoute: {
					ListRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.ListRoute}`,
					CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.CreateRoute}`,
					RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.RetrieveRoute}`,
					UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.UpdateRoute}`,
					DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.SettingRoute.AdminHeroRoute.DeleteRoute}`,
				},
			},
			AdministrationRoute: {
				UserRoute: {
					ListRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.ListRoute}`,
					CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.CreateRoute}`,
					RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.RetrieveRoute}`,
					UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.UpdateRoute}`,
					DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.DeleteRoute}`,
				},
				RoleRoute: {
					ListRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.ListRoute}`,
					CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.CreateRoute}`,
					RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.RetrieveRoute}`,
					UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.UpdateRoute}`,
					DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.DeleteRoute}`,
				},
				MenuRoute: {
					ListRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.ListRoute}`,
					CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.CreateRoute}`,
					RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.RetrieveRoute}`,
					UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.UpdateRoute}`,
					DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.DeleteRoute}`,
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
								ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}`,
								CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute}`,
								RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}`,
								UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}`,
								DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}`,
							},
							CounterRoute: {
								ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute}`,
								CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute}`,
								RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}`,
								UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}`,
								DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}`,
							},
							ProgramSectionRoute: {
								ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute}`,
								CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.CreateRoute}`,
								RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.RetrieveRoute}`,
								UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.UpdateRoute}`,
								DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.DeleteRoute}`,
							},
							ProgramRoute: {
								ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute}`,
								CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.CreateRoute}`,
								RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.RetrieveRoute}`,
								UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.UpdateRoute}`,
								DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.DeleteRoute}`,
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
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}`,
						},
						CounterRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}`,
						},
						AboutRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.DeleteRoute}`,
						},
						ServiceRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.DeleteRoute}`,
						},
						BranchRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.DeleteRoute}`,
						},
						SubBranchRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.DeleteRoute}`,
						},
						SubSubBranchRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.DeleteRoute}`,
						},
						ProjectSectionRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.DeleteRoute}`,
						},
						ProjectGroupRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.DeleteRoute}`,
						},
						ProjectRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.DeleteRoute}`,
						},
					}) :
					import.meta.env.VITE_APPLICATION === "PinwheelApplication" ||
					import.meta.env.VITE_APPLICATION === "AcruxApplication" ||
					import.meta.env.VITE_APPLICATION === "AnserApplication" ||
					import.meta.env.VITE_APPLICATION === "AquilaApplication" ||
					import.meta.env.VITE_APPLICATION === "BellatrixApplication" ||
					import.meta.env.VITE_APPLICATION === "CapellaApplication" ? ({
						HeroRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}`,
						},
						CounterRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}`,
						},
						AboutRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.DeleteRoute}`,
						},
						ServiceRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.DeleteRoute}`,
						},
						ProjectSectionRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.DeleteRoute}`,
						},
						ProjectGroupRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.DeleteRoute}`,
						},
						ProjectRoute: {
							ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute}`,
							CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.CreateRoute}`,
							RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.RetrieveRoute}`,
							UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.UpdateRoute}`,
							DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.DeleteRoute}`,
						},
					}) : null
				) :
				import.meta.env.VITE_ORGANISATION === "TadpoleOrganisation" ? (
					import.meta.env.VITE_ENTERPRISE === "AquilaEnterprise" ? ({}) :
					import.meta.env.VITE_ENTERPRISE === "BellatrixEnterprise" ? (
						import.meta.env.VITE_FIRM === "TechfolioFirm" ? (
							import.meta.env.VITE_APPLICATION === "TechfolioApplication" ? ({
								HeroRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}`,
								},
								CounterRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}`,
								},
								ProgramSectionRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.DeleteRoute}`,
								},
								ProgramRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.DeleteRoute}`,
								},
							}) :
							import.meta.env.VITE_APPLICATION === "ApurvChaturApplication" ||
							import.meta.env.VITE_APPLICATION === "AnushreeMandapeApplication" ||
							import.meta.env.VITE_APPLICATION === "SofieBerkinApplication" ? ({
								HeroRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}`,
								},
								AboutRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.DeleteRoute}`,
								},
								ExperienceRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.DeleteRoute}`,
								},
								ServiceRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.DeleteRoute}`,
								},
								PortfolioRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.DeleteRoute}`,
								},
								PortfolioCardRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.DeleteRoute}`,
								},
								EventRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.DeleteRoute}`,
								},
								EventCardRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.DeleteRoute}`,
								},
								BlogRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.DeleteRoute}`,
								},
								BlogCardRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.DeleteRoute}`,
								},
							}) : null
						) : 
						import.meta.env.VITE_FIRM === "BlogifyFirm" ? (
							import.meta.env.VITE_APPLICATION === "BlogifyApplication" ? ({
								HeroRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}`,
								},
								CounterRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.DeleteRoute}`,
								},
								ProgramSectionRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.DeleteRoute}`,
								},
								ProgramRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.DeleteRoute}`,
								},
							}) :
							import.meta.env.VITE_APPLICATION === "SrimadBhagwatamApplication" ||
							import.meta.env.VITE_APPLICATION === "BhagwadGitaApplication" ||
							import.meta.env.VITE_APPLICATION === "InterviewQuestionApplication" ? ({
								HeroRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.DeleteRoute}`,
								},
								AboutRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.DeleteRoute}`,
								},
								ExperienceRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.DeleteRoute}`,
								},
								ServiceRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.DeleteRoute}`,
								},
								PortfolioRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.DeleteRoute}`,
								},
								PortfolioCardRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.DeleteRoute}`,
								},
								EventRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.DeleteRoute}`,
								},
								EventCardRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.DeleteRoute}`,
								},
								BlogRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.DeleteRoute}`,
								},
								BlogCardRoute: {
									ListRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.ListRoute}`,
									CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.CreateRoute}`,
									RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.RetrieveRoute}`,
									UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.UpdateRoute}`,
									DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.DeleteRoute}`,
								},
							}) : null
						) : null
					) :
					import.meta.env.VITE_ENTERPRISE === "CapellaEnterprise" ? ({}) : null
				) : null
			) : null,
			AssetRoute: {
				StaticDataRoute: {
					ListRoute: `/${RouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.ListRoute}`,
					CreateRoute: `/${RouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.CreateRoute}`,
					RetrieveRoute: `/${RouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.RetrieveRoute}`,
					UpdateRoute: `/${RouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.UpdateRoute}`,
					DeleteRoute: `/${RouteName.ContentRoute.SidebarRoute.AssetRoute.StaticDataRoute.DeleteRoute}`,
				},
			},
		},
	},
};

export default FinalRouteName;
