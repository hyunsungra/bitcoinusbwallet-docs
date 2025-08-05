import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CustomLanding from './components/CustomLanding.vue'
import CustomLandingEng from './components/CustomLandingEng.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomLanding', CustomLanding)
    app.component('CustomLandingEng', CustomLandingEng)
  }
}