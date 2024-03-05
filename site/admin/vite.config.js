import path from "path"
import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  // Manifest Data
  let MANIFEST_DATA

  switch (env.VITE_APPLICATION) {
    case 'BeehiveApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Beehive Corporation Admin",
        "short_name":"Beehive Admin",
        "display": "standalone",
        "background_color": "#071952",
        "theme_color": "#071952",
        "icons":[
          {
            src: "Business/Beehive/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Beehive/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;

    case 'AndromedaApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Andromeda Organisation Admin",
        "short_name":"Andromeda Admin",
        "display": "standalone",
        "background_color": "#22092C",
        "theme_color": "#22092C",
        "icons":[
          {
            src: "Business/Andromeda/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Andromeda/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
    
    case 'PinwheelApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Pinwheel Organisation Admin",
        "short_name":"Pinwheel Admin",
        "display": "standalone",
        "background_color": "#241468",
        "theme_color": "#241468",
        "icons":[
          {
            src: "Business/Pinwheel/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Pinwheel/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
      
    case 'TadpoleApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Tadpole Organisation Admin",
        "short_name":"Tadpole Admin",
        "display": "standalone",
        "background_color": "#3D0C11",
        "theme_color": "#3D0C11",
        "icons":[
          {
            src: "Business/Tadpole/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Tadpole/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
        
    case 'AcruxApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Acrux Enterprise Admin",
        "short_name":"Acrux Admin",
        "display": "standalone",
        "background_color": "#451952",
        "theme_color": "#451952",
        "icons":[
          {
            src: "Business/Acrux/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Acrux/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
          
    case 'AnserApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Anser Enterprise Admin",
        "short_name":"Anser Admin",
        "display": "standalone",
        "background_color": "#004225",
        "theme_color": "#004225",
        "icons":[
          {
            src: "Business/Anser/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Anser/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
            
    case 'AquilaApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Aquila Enterprise Admin",
        "short_name":"Aquila Admin",
        "display": "standalone",
        "background_color": "#141E46",
        "theme_color": "#141E46",
        "icons":[
          {
            src: "Business/Aquila/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Aquila/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
              
    case 'BellatrixApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Bellatrix Enterprise Admin",
        "short_name":"Bellatrix Admin",
        "display": "standalone",
        "background_color": "#35155D",
        "theme_color": "#35155D",
        "icons":[
          {
            src: "Business/Bellatrix/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Bellatrix/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                
    case 'CapellaApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Capella Enterprise Admin",
        "short_name":"Capella Admin",
        "display": "standalone",
        "background_color": "#4C4B16",
        "theme_color": "#4C4B16",
        "icons":[
          {
            src: "Business/Capella/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Capella/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                  
    case 'ArionApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Arion Admin",
        "short_name":"Arion Admin",
        "display": "standalone",
        "background_color": "#420516",
        "theme_color": "#420516",
        "icons":[
          {
            src: "Business/Arion/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Arion/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                    
    case 'AnkasApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Ankas Admin",
        "short_name":"Ankas Admin",
        "display": "standalone",
        "background_color": "#352F44",
        "theme_color": "#352F44",
        "icons":[
          {
            src: "Business/Ankas/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Ankas/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                      
    case 'AbolApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Abol Admin",
        "short_name":"Abol Admin",
        "display": "standalone",
        "background_color": "#072227",
        "theme_color": "#072227",
        "icons":[
          {
            src: "Business/Abol/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Abol/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                        
    case 'TechfolioApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Techfolio Firm Admin",
        "short_name":"Techfolio Admin",
        "display": "standalone",
        "background_color": "#0F2167",
        "theme_color": "#0F2167",
        "icons":[
          {
            src: "Business/Techfolio/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Techfolio/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                          
    case 'ApurvChaturApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Apurv Chatur Admin",
        "short_name":"Apurv Admin",
        "display": "standalone",
        "background_color": "#4db5ff",
        "theme_color": "#4db5ff",
        "icons":[
          {
            src: "Business/ApurvChatur/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/ApurvChatur/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                            
    case 'AnushreeMandapeApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Anushree Mandape Admin",
        "short_name":"Anushree Admin",
        "display": "standalone",
        "background_color": "#C8A2C8",
        "theme_color": "#C8A2C8",
        "icons":[
          {
            src: "Business/AnushreeMandape/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/AnushreeMandape/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                              
    case 'SofieBerkinApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Sofie Berkin Admin",
        "short_name":"Sofie Admin",
        "display": "standalone",
        "background_color": "#06b7b7",
        "theme_color": "#06b7b7",
        "icons":[
          {
            src: "Business/SofieBerkin/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/SofieBerkin/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;

    case 'BlogifyApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Blogify Firm Admin",
        "short_name":"Blogify Admin",
        "display": "standalone",
        "background_color": "#0F2167",
        "theme_color": "#0F2167",
        "icons":[
          {
            src: "Business/Techfolio/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/Techfolio/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                          
    case 'SrimadBhagwatamApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Srimad Bhagwatam Admin",
        "short_name":"Srimad Bhagwatam Admin",
        "display": "standalone",
        "background_color": "#4db5ff",
        "theme_color": "#4db5ff",
        "icons":[
          {
            src: "Business/ApurvChatur/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/ApurvChatur/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                            
    case 'BhagwadGitaApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Bhagwad Gita Admin",
        "short_name":"Bhagwad Gita Admin",
        "display": "standalone",
        "background_color": "#C8A2C8",
        "theme_color": "#C8A2C8",
        "icons":[
          {
            src: "Business/AnushreeMandape/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/AnushreeMandape/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                              
    case 'InterviewQuestionApplication':
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"Interview Question Admin",
        "short_name":"Interview Question Admin",
        "display": "standalone",
        "background_color": "#06b7b7",
        "theme_color": "#06b7b7",
        "icons":[
          {
            src: "Business/SofieBerkin/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business/SofieBerkin/favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
                                                                                                                                                                                                                                            
    default:
      MANIFEST_DATA = {
        "registerType": 'autoUpdate',
        "name":"",
        "short_name":"",
        "display": "standalone",
        "background_color": "#fff",
        "theme_color": "#fff",
        "icons":[
          {
            src: "Business//favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Business//favicon_io/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
      break;
  }

  // Vite Config
  return {
    plugins: [
      react(),
      VitePWA({
        manifest: MANIFEST_DATA
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
