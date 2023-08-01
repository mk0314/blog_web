<template>
    <div class="home-container">
        <nav
            v-show="isActiveNav"
            class="navbar navbar-expand-lg fixed-top navbar-light bg-light"
        >
            <div class="container">
                <a class="navbar-brand logo-txt text-left" href="#"
                    ><h5>Quokka</h5></a
                >
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-right text-right">
                        <li class="nav-item margin-left">
                            <a class="nav-link" href="#"><h6>首页</h6></a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-right text-right">
                        <li class="nav-item margin-left">
                            <a class="nav-link" href="#"><h6>首页</h6></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view />

        <div class="recommended-reading">
            <div class="reading-container">
                <h3><span>博客文章</span></h3>
                <div class="read-contanier">
                    <span
                        class="read-item"
                        v-for="(item, index) in blogAticleList"
                        :key="index"
                    >
                        <el-image :src="item.img" class="img"></el-image>
                        <section class="info">
                            <time class="time">{{ item.date }}</time>
                            <h5 class="title">{{ item.title }}</h5>
                        </section>
                    </span>
                </div>
            </div>
        </div>

        <div class="site-wrapper">
            <div class="contact-box">
                <div class="image-list">
                    <div class="circle"></div>
                    <div
                        class="image-list-item"
                        v-for="(item, index) in contactWayList"
                        :key="index"
                    >
                        <span :class="`iconfont ${item.icon}`"></span>
                    </div>
                </div>
                <p class="text">You can contact me throw others ways</p>
            </div>
        </div>
        <div class="footer">
            <div class="main">
                <div
                    class="main-item"
                    v-for="(item, index) in footerMenuList"
                    :key="index"
                >
                    <div class="title">{{ item.firstTitle }}</div>
                    <div class="second-title-box">
                        <div
                            class="second-title-item"
                            v-for="(secondTitleItem, index) in item.secondTitle"
                            :key="index"
                        >
                            {{ secondTitleItem.title }}
                        </div>
                    </div>
                </div>
                <div class="main-item">
                    <div class="web-title">
                        <span class="first-name">Meng</span>
                        <span class="last-name">Kun</span>
                    </div>
                    <p class="copyright-text">❤️ Copyright ©2020-2021</p>
                    <p class="copyright-text">蒙坤的博客</p>
                    <p class="copyright-text">为了您更好的体验</p>
                    <p class="copyright-text">建议您使用Chrome浏览器</p>
                    <p class="copyright-text">桂ICP备2022007219号-1</p>
                    <p class="copyright-text">你是第333225025个访客</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { useRouter } from 'vue-router';
    import { ElMessage } from 'element-plus';
    import { ref, defineComponent, onMounted } from 'vue';
    import { Share } from '@element-plus/icons-vue';
    import {
        banerList,
        skillList,
        navBarList,
        hobbyBgList,
        contactWayList,
        blogAticleList,
        footerMenuList,
    } from './helper';
    import wecahtAvatar from '../assets/wechat_Qrcode.jpg';
    export default defineComponent({
        components: { Share },
        setup() {
            const route = useRouter();
            const avatar = ref(wecahtAvatar);
            const isActiveNav = ref(false);
            onMounted(() => {
                window.addEventListener('scroll', (evt) => {
                    const scrollHeight =
                        document.documentElement.scrollTop ||
                        document.body.scrollTop;
                    isActiveNav.value = scrollHeight > 150;
                });
            });

            const onChangeTheme = () => {
                ElMessage({ type: 'warning', message: '此功能暂未开放噢~' });
            };
            const onBackTop = () => {
                document.documentElement.scrollTop = 0;
            };
            return {
                banerList,
                hobbyBgList,
                avatar,
                skillList,
                isActiveNav,
                blogAticleList,
                contactWayList,
                footerMenuList,
                navBarList,
                onBackTop,
                onChangeTheme,
            };
        },
    });
</script>

<style lang="scss" scoped>
    .logo-txt {
        color: var(--main-text-color, #ff706a);
    }
    .home-container {
        position: relative;
        width: 100%;
        .navLg-wrapper {
            position: fixed;
            display: flex;
            top: 0;
            width: 100%;
            height: 0;
            border-bottom: 1px solid var(--sub-border-color, #dac1c1);
            box-shadow: 0 1px 3px var(--main-box-shadow-color, #999);
            overflow: hidden;
            background: var(--main-bg, #fcfcfc);
            color: var(--main-color, #111);
            z-index: 9990;
            .logo-text {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                padding-left: 50px;
                transition: all 0.5s;
                font-size: 28px;
                font: italic 2em Georgia, serif;
                font-weight: 600;
                .last-name {
                    color: var(--main-text-color, #ff706a);
                }
                .first-name {
                    margin-left: 0.5em;
                    color: var(--main-text-color2, #5571ff);
                }
            }
            .right-option {
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-left: auto;
                margin-right: 100px;
                font-size: 20px;
                width: 400px;
                .nav-text {
                    cursor: pointer;
                }
                .nav-text:hover {
                    color: #5571ff;
                    transform: scale(1.2);
                }
            }
        }
        .active-nav {
            height: 80px;
        }
        .tip-box {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            margin-top: -80px;
            padding: 30px;
            display: flex;
            justify-content: space-between;
            width: 1200px;
            background-color: white;
            box-shadow: var(--el-box-shadow-light);
            z-index: 999;
            border-radius: 16px;
            .left {
                height: 100px;
                width: 70%;
                .welcome-text {
                    margin-bottom: 40px;
                    font-size: 28px;
                    font-weight: bold;
                    color: #5571ff;
                }
                .notice {
                    .text {
                        color: var(--main-text-color, #ff706a);
                    }
                }
            }
            .right {
                display: flex;
                width: 30%;
                .author-image {
                    width: 100px;
                    height: 100px;
                }
            }
        }
        .wave-gif {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            mix-blend-mode: screen;
        }
        .my-hobby {
            height: 400px;
            .title {
                margin: 140px 0 60px;
                text-align: center;
                font-weight: 300;
                font-size: 26px;
                line-height: 1.8;
                color: var(--main-color, #111);
            }

            .hobby-group {
                margin: auto;
                display: flex;
                justify-content: space-around;
                width: 1200px;
                .item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 220px;
                    height: 220px;
                    box-shadow: var(--el-box-shadow-light);
                    border-radius: 50%;
                    overflow: hidden;
                    .bg-image {
                        width: 90%;
                        height: 90%;
                    }
                    .bg-image:hover {
                        transform: scale(1.5);
                        opacity: 0.5;
                    }
                }
                .item:hover {
                    overflow: visible;
                }
            }
        }
        .introduce {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(https://www.dengzhanyong.com/PHP/images/1579507056.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right 20%;
            background-attachment: fixed;
            padding: 60px 0;
            .introduce-left {
                width: 500px;
                .text {
                    line-height: 2em;
                    font-weight: 300;
                    margin: 16px 0;
                    color: #fff;
                }
                .technology-list {
                    display: flex;
                    justify-content: right;
                    padding: 5px;
                    width: 100%;

                    .label {
                        margin-right: 20px;
                    }
                    .progress {
                        margin-right: 30px;
                        width: 300px;
                    }
                }
            }
            .introduce-right {
                padding-left: 60px;
                width: 500px;
                color: #fff;
                .name {
                    font-size: 40px;
                    font-weight: 600;
                    font: italic 2em Georgia, serif;

                    .last-name {
                        color: var(--main-text-color, #ff706a);
                    }
                    .first-name {
                        margin-left: 0.5em;
                        color: var(--main-text-color2, #5571ff);
                    }
                }
                .person-info {
                    margin-top: 1em;
                }
            }
        }
        .recommended-reading {
            position: relative;
            padding: 20px 5px 20px;
            overflow: hidden;
            background-color: var(--sub-bg, #faf5fd);
            .reading-container {
                position: relative;
                max-width: 1140px;
                margin: 0 auto 80px;
                h3:before {
                    position: relative;
                    display: inline-block;
                    content: '';
                    width: 5px;
                    height: 1.5em;
                    background: var(--main-text-color, #ff706a);
                    left: -1em;
                    top: 5px;
                }
                .read-contanier {
                    position: relative;
                    padding-bottom: 20px;
                    .read-item {
                        position: relative;
                        display: block;
                        box-sizing: border-box;
                        width: 24%;
                        float: left;
                        top: 0;
                        height: 280px;
                        margin: 1rem 0.5%;
                        transition: all 0.2s ease;
                        opacity: 0.8;
                        border-radius: 4px;
                        box-shadow: 0 1px 1px
                                var(
                                    --sub-box-shadow-inset-color,
                                    rgba(0, 0, 0, 0.4)
                                ),
                            0 2px 2px
                                var(
                                    --sub-box-shadow-inset-color,
                                    rgba(0, 0, 0, 0.4)
                                );
                        overflow: hidden;
                        cursor: pointer;
                        background: var(--main-bg, #fcfcfc);
                        .img {
                            width: 100%;
                            height: 60%;
                        }
                        .info {
                            position: absolute;
                            top: 60%;
                            left: 0;
                            right: 0;
                            text-align: left;
                            padding: 1rem;
                            .time {
                                font-size: 13px;
                                color: var(--info-text-color, #999);
                            }
                            .title {
                                text-align: left;
                                line-height: 0.1em;
                                padding: 0.2em 0;
                                font-size: 1rem;
                                color: var(--main-text-color2, #5571ff);
                            }
                        }
                    }
                    .read-item:hover {
                        opacity: 1;
                        transform: translate(0, -20px);
                        box-shadow: 0 5px 5px
                                var(
                                    --sub-box-shadow-inset-color,
                                    rgba(0, 0, 0, 0.4)
                                ),
                            0 4px 4px
                                var(
                                    --sub-box-shadow-inset-color,
                                    rgba(0, 0, 0, 0.4)
                                );
                    }
                }
            }
        }
        .site-wrapper {
            position: relative;
            overflow: hidden;
            height: 500px;
            text-align: center;
            background: var(
                --site-bg,
                linear-gradient(90deg, #8e54e9, #4776e6)
            );
            color: #fff;
            .circle {
                position: absolute;
            }
            .circle:first-child {
                bottom: 30%;
                left: 60%;
            }
            .contact-box {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                .image-list {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    .image-list-item {
                        margin: 0 20px;
                        line-height: 80px;
                        width: 80px;
                        border-radius: 8px;
                        span {
                            font-size: 40px;
                        }
                    }
                    .image-list-item:hover {
                        background: #fff;
                        span {
                            color: #8e54e9;
                        }
                    }
                }
                .text {
                    font-size: 28px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri,
                        'Trebuchet MS', sans-serif;
                }
            }
        }
        .footer {
            .main {
                display: flex;
                flex-wrap: wrap;
                margin: 80px auto 20px;
                height: 400px;
                width: 60%;
                .main-item {
                    flex: 0 0 33.3%;
                    margin: auto;
                    text-align: left;
                    .title {
                        font-size: 18px;
                    }
                    .second-title-box {
                        margin-top: 30px;
                        .second-title-item {
                            margin-top: 20px;
                            font-size: 16px;
                            color: #b2b2b2;
                            cursor: pointer;
                        }
                        .second-title-item:hover {
                            color: #5571ff;
                        }
                    }
                    .web-title {
                        margin-top: 30px;
                        font: italic 2em Georgia, serif;
                        .first-name {
                            margin-right: 20px;
                            color: var(--main-text-color, #ff706a);
                        }
                        .last-name {
                            margin-right: 20px;
                            color: #8e54e9;
                        }
                    }
                    .copyright-text {
                        font-size: 12px;
                    }
                }
            }
        }
        .el-carousel__item {
            .carousel-image {
                width: 100%;
                height: 100%;
            }
        }
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
</style>
