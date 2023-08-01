<!--
 * @Author: mengkun822 1197235402@qq.com
 * @Date: 2023-05-31 14:13:46
 * @LastEditors: mengkun822 1197235402@qq.com
 * @LastEditTime: 2023-07-22 10:58:30
 * @FilePath: \blog_web\src\views\message\Message.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="article-container">
        <div class="article-top">
            <div class="article-title"><h1>给我留言喔~</h1></div>
        </div>
        <div class="message-box">
            <el-divider border-style="dashed" />
            <div class="title">
                <div class="left">已有61条留言</div>
                <div class="right">我也要留言</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';
    import { Search } from '@element-plus/icons-vue';
    import { MoreFilled } from '@element-plus/icons-vue';
    export default {
        component: { Search, MoreFilled },
        setup() {
            const categoryList = ref([
                { name: 'All', value: 'All' },
                { name: 'Vue2', value: 'Vue2' },
                { name: 'Vue3', value: 'Vue3' },
                { name: 'HTML', value: 'HTML' },
                { name: 'Node', value: 'Node' },
                { name: 'Uniapp', value: 'Uniapp' },
                { name: 'Express', value: 'Express' },
                { name: 'Koa', value: 'Koa' },
                { name: 'Egg', value: 'Egg' },
                { name: 'Gulp', value: 'Gulp' },
                { name: 'Webpack', value: 'Webpack' },
                { name: 'Vit', value: 'Vit' },
                { name: 'CSS', value: 'CSS' },
            ]);
            let selectArticleIndex = ref('');
            const onSelectArticle = (index: any) => {
                selectArticleIndex.value = index;
            };

            return {
                categoryList,
                onSelectArticle,
                selectArticleIndex,
            };
        },
    };
</script>
<style lang="scss" scoped>
    .article-container {
        .article-top {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 800px;
            background: #000;
            background-image: var(
                --blog-header-bg-img,
                url('https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=60')
            );
            background-position: 50%;
            background-attachment: fixed;

            .article-title h1 {
                font-family: Dancing Script, Warnes, cursive;
                color: #eee;
                font-size: 54px;
            }
        }
        .message-box {
            margin: 20px auto;
            max-width: 1100px;
            .title {
                display: flex;
                justify-content: space-between;
                font-size: 16px;
                color: var(--sub-title-color, #555);
            }
        }
    }
</style>
