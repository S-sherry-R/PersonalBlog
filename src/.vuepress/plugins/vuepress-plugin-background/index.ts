import { getDirname, path } from '@vuepress/utils'
// @ts-ignore
const __dirname = getDirname(import.meta.url)
//全局常量
interface BackOptions {
  zIndex?: number;
  alpha?: number;
  size?: number;
}
const backPlugin =(options?:BackOptions)=>{
  return (app)=>{
    return {
      name: 'vuepress-plugin-background',
      multiple: false,
      define: {
        backgroundOptions: options,
      },
      clientConfigFile: path.resolve(__dirname, './client/background-client-config.ts'),
    }
  }
}
export { backPlugin };
