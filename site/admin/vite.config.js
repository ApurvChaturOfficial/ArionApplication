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
        "name":"Beehive Corporation",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Beehive/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;

    case 'AndromedaApplication':
      MANIFEST_DATA = {
        "name":"Andromeda Organisation",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Andromeda/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
    
    case 'PinwheelApplication':
      MANIFEST_DATA = {
        "name":"Pinwheel Organisation",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Pinwheel/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
      
    case 'TadpoleApplication':
      MANIFEST_DATA = {
        "name":"Tadpole Organisation",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Tadpole/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
        
    case 'AcruxApplication':
      MANIFEST_DATA = {
        "name":"Acrux Enterprise",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Acrux/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
          
    case 'AnserApplication':
      MANIFEST_DATA = {
        "name":"Anser Enterprise",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Anser/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
            
    case 'AquilaApplication':
      MANIFEST_DATA = {
        "name":"Aquila Enterprise",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Aquila/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
              
    case 'BellatrixApplication':
      MANIFEST_DATA = {
        "name":"Bellatrix Enterprise",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Bellatrix/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
                
    case 'CapellaApplication':
      MANIFEST_DATA = {
        "name":"Capella Enterprise",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Capella/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
                  
    case 'ArionApplication':
      MANIFEST_DATA = {
        "name":"Arion",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Arion/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
                    
    case 'AnkasApplication':
      MANIFEST_DATA = {
        "name":"Ankas",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Ankas/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
                      
    case 'AbolApplication':
      MANIFEST_DATA = {
        "name":"Abol",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Abol/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
                        
    case 'TechfolioApplication':
      MANIFEST_DATA = {
        "name":"Techfolio Firm",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/Techfolio/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
                          
    case 'ApurvChaturApplication':
      MANIFEST_DATA = {
        "name":"Apurv Chatur",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/ApurvChatur/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
                            
    case 'AnushreeMandapeApplication':
      MANIFEST_DATA = {
        "name":"Anushree Mandape",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/AnushreeMandape/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;
                              
    case 'SofieBerkinApplication':
      MANIFEST_DATA = {
        "name":"Sofie Berkin",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business/SofieBerkin/favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      }
      break;

                                                                                                                                                                                                                                                  
    default:
      MANIFEST_DATA = {
        "name":"",
        "display_override": ["fullscreen", "minimal-ui"],
        "display": "standalone",
        "icons":[
          {
            src: "Business//favicon_io/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
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
