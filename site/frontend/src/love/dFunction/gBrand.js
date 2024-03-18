import arion from "@/love/hAsset/business/10.png";

const brand = () => {
	var brandObject

		brandObject = {
			logo: arion,
			name: "Arion",
			app: "https://beehive-frontend.netlify.app/",
			admin: "https://beehive-admin.netlify.app/"
		}
						
	return brandObject
}

export default brand