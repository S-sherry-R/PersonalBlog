import { defineClientConfig } from '@vuepress/client'
import { onMounted } from "vue";
import square from "../canvas/square";
export default defineClientConfig({
    setup(){
        onMounted(() => {
            // @ts-ignore
            console.log(backgroundOptions)
            square()
        })
    },
})
