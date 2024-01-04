import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import VitePluginHtmlEnv from 'vite-plugin-html-env'


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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
        "display_override": ["minimal-ui"],
        "display": "standalone",
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
      VitePluginHtmlEnv(),
      VitePWA({
        manifest: MANIFEST_DATA 
      })
    ],
    resolve: {
      alias: {
        src: "/src",
      },
    },
  }
})
