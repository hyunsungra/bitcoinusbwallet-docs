import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  ignoreDeadLinks: true,
  title: 'Bitcoin USB Wallet',
  description: 'Bitcoin USB Wallet 관련 정보를 담은 문서 사이트',
  
  themeConfig: {
    appearance: 'dark',
    localeLinks: true
  },
  
  locales: {

    root: {
      label: 'English',
      lang: 'en',
      // 기본 경로는 / 사용
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/what-is-bitcoin-usb-wallet' },
          { text: 'Download', link: 'https://github.com/hyunsungra/bitcoinusbwallet/releases' }
        ],
        sidebar: {
          '/guide/': [
            { text: 'What is Bitcoin USB Wallet?', link: '/guide/what-is-bitcoin-usb-wallet' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Create Personal Wallet', link: '/guide/create-personal-wallet' },
            { text: 'Load Personal Wallet', link: '/guide/load-personal-wallet' },
            { text: 'Send Bitcoin', link: '/guide/send-bitcoin' },
            { text: 'Binance to Personal Wallet', link: '/guide/binance-to-personal-wallet' },
            { text: 'Personal Wallet to Binance', link: '/guide/personal-wallet-to-binance' },
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/hyunsungra/bitcoinusbwallet' }
        ]        
      }
    },

    ko:{
      label: '한국어',
      lang: 'ko',
      link: '/ko/',
      themeConfig: {
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '가이드', link: '/ko/guide/what-is-bitcoin-usb-wallet' },
          { text: '다운로드', link: 'https://github.com/hyunsungra/bitcoinusbwallet/releases' }
        ],
        sidebar: {
          '/ko/guide/': [
            { text: 'BitCoin USB Wallet이란?', link: '/ko/guide/what-is-bitcoin-usb-wallet' },
            { text: '시작하기', link: '/ko/guide/getting-started' },
            { text: '개인지갑 생성', link: '/ko/guide/create-personal-wallet' },
            { text: '지갑 불러오기', link: '/ko/guide/load-personal-wallet' },
            { text: '비트코인 전송하기', link: '/ko/guide/send-bitcoin' },
            { text: '바이낸스에서 개인지갑으로 이동', link: '/ko/guide/binance-to-personal-wallet' },
            { text: '개인지갑에서 바이낸스로 이동', link: '/ko/guide/personal-wallet-to-binance' },
            { text: '업비트에서 바이낸스로 이동', link: '/ko/guide/upbit-to-binance' },
            { text: '바이낸스에서 업비트로 이동', link: '/ko/guide/binance-to-upbit' }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/hyunsungra/bitcoinusbwallet' }
        ]
      }        
    },

  }
})