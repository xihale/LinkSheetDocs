import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LinkSheet",
  description: "Restore Pre-Android 12 system link handling behavior",
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Features', link: '/features/' },
          { text: 'Developer', link: '/developer/' }
        ],
        sidebar: [
          {
            text: 'Features',
            items: [
              { text: 'Core Features', link: '/features/' },
              { text: 'Interface & Interaction', link: '/features/interface' },
              { text: 'Privacy & Processing', link: '/features/privacy' },
              { text: 'Advanced & System', link: '/features/advanced' },
              { text: 'Shizuku Integration (WIP)', link: '/features/shizuku' },
              { text: 'Integrations', link: '/features/integrations' }
            ]
          },
          {
            text: 'Developer Guide',
            items: [
              { text: 'Getting Started', link: '/developer/' },
              { text: 'Project Structure', link: '/developer/structure' }
            ]
          }
        ]
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: {
        nav: [
            { text: '首页', link: '/zh/' },
            { text: '功能特性', link: '/zh/features/' },
            { text: '开发者', link: '/zh/developer/' }
        ],
        sidebar: [
          {
            text: '功能特性',
            items: [
              { text: '核心功能', link: '/zh/features/' },
              { text: '界面与交互', link: '/zh/features/interface' },
              { text: '隐私与处理', link: '/zh/features/privacy' },
              { text: '高级与系统', link: '/zh/features/advanced' },
              { text: 'Shizuku 集成 (WIP)', link: '/zh/features/shizuku' },
              { text: '集成', link: '/zh/features/integrations' }
            ]
          },
          {
            text: '开发者指南',
            items: [
              { text: '快速开始', link: '/zh/developer/' },
              { text: '项目结构', link: '/zh/developer/structure' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LinkSheet/LinkSheet' },
      { icon: 'discord', link: 'https://discord.gg/XndZet2pWF' }
    ]
  }
})