import beehive from "src/love/hAsset/business/1.png";
import andromeda from "src/love/hAsset/business/2.png";
import pinwheel from "src/love/hAsset/business/3.png";
import tadpole from "src/love/hAsset/business/4.png";
import acrux from "src/love/hAsset/business/5.png";
import anser from "src/love/hAsset/business/6.png";
import aquila from "src/love/hAsset/business/7.png";
import bellatrix from "src/love/hAsset/business/8.png";
import capella from "src/love/hAsset/business/9.png";
import arion from "src/love/hAsset/business/10.png";
import ankas from "src/love/hAsset/business/11.png";
import abol from "src/love/hAsset/business/12.png";
import techfolio from "src/love/hAsset/business/13.png";
import apurvchatur from "src/love/hAsset/business/14.png";
import anushreemandape from "src/love/hAsset/business/15.png";
import sofieberkin from "src/love/hAsset/business/16.png";


const brand = () => {
	var brandObject

	switch (import.meta.env.VITE_CORPORATION) {
		case 'BeehiveCorporation':

			switch (import.meta.env.VITE_ORGANISATION) {
				case 'AndromedaOrganisation':
						
					switch (import.meta.env.VITE_ENTERPRISE) {
						case 'AcruxEnterprise':

							switch (import.meta.env.VITE_APPLICATION) {
								case 'ArionApplication':
									brandObject = {
										logo: arion,
										name: "Arion",
									}
									break;
								case 'AnkasApplication':
									brandObject = {
										logo: ankas,
										name: "Ankas",
									}
									break;
								case 'AbolApplication':
									brandObject = {
										logo: abol,
										name: "Abol",
									}
									break;
								default:
									break;
							}   
							break;

						case 'AnserEnterprise':
							break;
						default:
							break;
					}   
					break;

				case 'PinwheelOrganisation':

					switch (import.meta.env.VITE_APPLICATION) {
						case 'BeehiveApplication':
							brandObject = {
								logo: beehive,
								name: "Beehive Corporation",
							}
							break;
						case 'AndromedaApplication':
							brandObject = {
								logo: andromeda,
								name: "Andromeda Organisation",
							}
							break;
						case 'PinwheelApplication':
							brandObject = {
								logo: pinwheel,
								name: "Pinwheel Organisation",
							}
							break;
						case 'TadpoleApplication':
							brandObject = {
								logo: tadpole,
								name: "Tadpole Organisation",
							}
							break;
						case 'AcruxApplication':
							brandObject = {
								logo: acrux,
								name: "Acrux Enterprise",
							}
							break;
						case 'AnserApplication':
							brandObject = {
								logo: anser,
								name: "Anser Enterprise",
							}
							break;
						case 'AquilaApplication':
							brandObject = {
								logo: aquila,
								name: "Aquila Enterprise",
							}
							break;
						case 'BellatrixApplication':
							brandObject = {
								logo: bellatrix,
								name: "Bellatrix Enterprise",
							}
							break;
						case 'CapellaApplication':
							brandObject = {
								logo: capella,
								name: "Capella Enterprise",
							}
							break;
						default:
							break;
					}   
					break;

				case 'TadpoleOrganisation':

					switch (import.meta.env.VITE_ENTERPRISE) {
						case 'AquilaEnterprise':
							break;

						case 'BellatrixEnterprise':

							switch (import.meta.env.VITE_FIRM) {
								case 'TechfolioFirm':

									switch (import.meta.env.VITE_APPLICATION) {
										case 'TechfolioApplication':
											brandObject = {
												logo: techfolio,
												name: "Techfolio Firm",
											}
											break;
										case 'ApurvChaturApplication':
											brandObject = {
												logo: apurvchatur,
												name: "Apurv Chatur",
											}
											break;
										case 'AnushreeMandapeApplication':
											brandObject = {
												logo: anushreemandape,
												name: "Anushree Mandape",
											}
											break;
										case 'SofieBerkinApplication':
											brandObject = {
												logo: sofieberkin,
												name: "Sofie Berkin",
											}
											break;
										default:
											break;
									}   
									break;
		
								default:
									break;
							}   
							break;

						case 'CapellaEnterprise':
							break;
						default:
							break;
					}   
					break;
		}  
			break;

		default:
			brandObject = {
				logo: beehive,
				name: "Beehive Corporation",
			}
			break;
	}

	return brandObject
}

export default brand