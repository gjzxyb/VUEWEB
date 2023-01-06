import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Basic: typeof import('src/components/basic/index.vue')['default']
    ElButton: typeof import('element-plus/es')['ElButton']
    ElRow: typeof import('element-plus/es')['ElRow']
    Login: typeof import('src/components/core/login.vue')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}


