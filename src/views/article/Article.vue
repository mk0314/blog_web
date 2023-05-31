<template>
    <div class="article-container">
        <div class="article-top">
            <div class="article-title"><h1>文章</h1></div>
        </div>
        <div class="article-category">
            <div
                :class="`article-item ${
                    selectArticleIndex === index ||
                    (!selectArticleIndex && index === 0)
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
                        <el-icon
                            color="var(--main-text-color,#ff706a)"
                            class="search-icon"
                            :size="40"
                        >
                            <Search />
                        </el-icon>
                    </div>
                </div>
                <div class="content-box">
                    <div class="title">共3篇相关文章</div>
                    <div class="articel-list">
                        <el-timeline>
                            <el-timeline-item
                                timestamp="2018/4/12"
                                placement="top"
                            >
                                <el-card @click="checkArticleDetail">
                                    <h4>Update Github template</h4>
                                    <p>Tom committed 2018/4/12 20:46</p>
                                    <p>Tom committed 2018/4/12 20:46</p>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="2018/4/3"
                                placement="top"
                            >
                                <el-card>
                                    <h4>Update Github template</h4>
                                    <p>Tom committed 2018/4/3 20:46</p>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="2018/4/2"
                                placement="top"
                            >
                                <el-card>
                                    <h4>Update Github template</h4>
                                    <p>Tom committed 2018/4/2 20:46</p>
                                </el-card>
                            </el-timeline-item>
                            <el-timeline-item
                                timestamp="努力追上那个曾今赋予厚望的自己"
                                placement="top"
                            >
                            </el-timeline-item>
                        </el-timeline>
                        <div class="load-more-articel">点击加载更多</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { Search } from '@element-plus/icons-vue';
    import { MoreFilled } from '@element-plus/icons-vue';
    export default {
        component: { Search, MoreFilled },
        setup() {
            const route = useRouter();
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
            const checkArticleDetail = () => {
                route.push({ path: '/article_detail' });
            };

            return {
                categoryList,
                onSelectArticle,
                checkArticleDetail,
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
            height: 500px;
            background: #000;
            background-image: var(
                --blog-header-bg-img,
                url('https://images.unsplash.com/photo-1633113218833-f0b9912cfe1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1920&q=60')
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
                        outline: none;
                        border-bottom: 2px solid
                            var(--main-border-color, #dac1c1);
                        line-height: 2em;
                        font-size: 22px;
                        color: var(--main-color, #111);
                        background: var(--input-bg, #fff);
                    }
                    .search-icon {
                        cursor: pointer;
                        margin-left: 5px;
                    }
                    .search-icon:active {
                        opacity: 0.8;
                    }
                }
            }
            .content-box {
                text-align: left;
                .title {
                    font-size: 20px;
                    color: var(--main-text-color, #ff706a);
                }
                .articel-list {
                    margin: 20px auto;
                    .load-more-articel {
                        cursor: pointer;
                        text-align: center;
                    }
                    .load-more-articel:active {
                        color: #5571ff;
                    }
                }
            }
        }
    }
</style>
