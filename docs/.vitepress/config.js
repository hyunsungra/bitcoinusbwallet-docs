import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/bitcoinusbwallet/' : '/',
  title: 'Bitcoin USB Wallet',
  description: 'Bitcoin USB Wallet 관련 정보를 담은 문서 사이트',
  
  themeConfig: {
    appearance: false,
    localeLinks: true
  },
  
  locales: {
    root: {
      label: '한국어',
      lang: 'ko',
      // 기본 경로는 / 사용
      themeConfig: {
        nav: [
          { text: '홈', link: '/' },
          { text: '가이드', link: '/guide/what-is-bitcoin-usb-wallet' },
          { text: '다운로드', link: '/download' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: '소개',
              items: [
                { text: 'Bitcoin USB Wallet이란?', link: '/guide/what-is-bitcoin-usb-wallet' },
                { text: '시작하기', link: '/guide/getting-started' }
              ]
            },
            {
              text: '기본 개념',
              items: [
                { text: 'Bitcoin 기초', link: '/guide/bitcoin-basics' },
                { text: '블록체인 이해하기', link: '/guide/understanding-blockchain' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yourusername/bitcoin-usb-wallet' }
        ]        
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/what-is-bitcoin-usb-wallet' },
          { text: 'Download', link: '/en/download' }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'What is Bitcoin USB Wallet?', link: '/en/guide/what-is-bitcoin-usb-wallet' },
                { text: 'Getting Started', link: '/en/guide/getting-started' }
              ]
            },
            {
              text: 'Core Concepts',
              items: [
                { text: 'Bitcoin Basics', link: '/en/guide/bitcoin-basics' },
                { text: 'Understanding Blockchain', link: '/en/guide/understanding-blockchain' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/yourusername/bitcoin-usb-wallet' }
        ]
      }
    }
  }
})