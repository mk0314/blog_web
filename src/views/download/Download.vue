<template>
    <div class="article-container">
        <div class="article-top">
            <div class="article-title"><h1>资源下载</h1></div>
        </div>
        <div class="article-category">
            <div
                :class="`article-item ${
                    selectArticleIndex === index
                        ? 'active-article-item'
                        : selectArticleIndex && index === 0
                        ? 'select-other'
                        : ''
                }`"
                v-for="(item, index) in categoryList"
                :key="index"
                @click="onSelectArticle(index)"
            >
                {{ item.name }}
            </div>
            <div class="article-main">
                <div class="article-search-box">
                    <div class="search-box-wrap">
                        <input type="text" class="search-input" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';
    export default {
        setup() {
            const categoryList = ref([
                { name: 'All', value: 'All' },
                { name: 'Vue2', value: 'Vue2' },
                { name: 'Vue3', value: 'Vue3' },
                { name: 'HTML', value: 'HTML' },
                { name: 'Node.js', value: 'Node' },
                { name: 'Uniapp', value: 'Uniapp' },
                { name: 'Express', value: 'Express' },
                { name: 'Koa', value: 'Koa' },
                { name: 'Egg', value: 'Egg' },
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
<style lang="less" scoped>
    .article-container {
        .article-top {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 300px;
            background: #000;
            background-image: var(
                --blog-header-bg-img,
                url('https://resource.dengzhanyong.com/blog/assets/images/blog_header_default.jpg')
            );
            background-position: 50%;
            background-attachment: fixed;

            .article-title h1 {
                font-family: Dancing Script, Warnes, cursive;
                color: #eee;
                font-size: 54px;
            }
        }
        .article-category {
            margin-top: 2em;
            text-align: center;
            .article-item {
                transition: all 0.5s;

                color: #fff;

                background: var(--main-text-color2-light, #abcee8);
                box-shadow: 0.15rem 0.15rem 0.3rem
                        var(--main-box-shadow-color, #999),
                    0.2rem 0.2rem 1rem #dcdcdc inset;
                display: inline-block;
                padding: 1em 1.5em;
                border-radius: 5px;
                margin: 1em;
            }

            .article-item:hover {
                transform: scale(1.1);
            }
            .active-article-item {
                background: var(--main-text-color, #ff706a);
                box-shadow: 0.15rem 0.15rem 0.5rem
                        var(--main-box-shadow-color, #999),
                    0.2rem 0.2rem 0.5rem #f7c8c8 inset;
            }
            .select-other {
                background: var(--main-text-color2, #5571ff) !important;
                color: #fff;
                font-weight: 700;
            }
        }
        .article-main {
            margin: 2rem auto;
            max-width: 1100px;
            .article-search-box {
                padding: 1em;
                text-align: center;
                .search-box-wrap {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 2em;
                    width: 100%;
                    .search-input {
                        width: 80%;
                        border: none;
                        border-bottom: 2px solid
                            var(--main-border-color, #dac1c1);
                        line-height: 2em;
                        font-size: 22px;
                        color: var(--main-color, #111);
                        background: var(--input-bg, #fff);
                    }
                }
            }
        }
    }
</style>
