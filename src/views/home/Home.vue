<template>
    <div class="home-container">
        <div class="g-container">
            <div class="word" v-for="(conent, index) in tipTxtArr" :key="index">
                {{ conent }}
            </div>
        </div>

        <div class="introduce" id="introduce">
            <div class="introduce-left">
                <div class="text">
                    <p>
                        本人科班出身，自学前端，于2020年毕业，毕业后一直从事前端开发工作
                    </p>
                    <p>主要使用框架为 VUE + React</p>
                    <div
                        class="technology-list"
                        v-for="(item, index) in skillList"
                        :key="index"
                    >
                        <span class="label">{{ item.name }}</span>
                        <el-progress
                            :show-text="false"
                            :percentage="item.proficiency"
                            class="progress"
                            :color="item.color"
                        />
                    </div>
                </div>
            </div>
            <div class="introduce-right">
                <div class="name">
                    <span class="last-name">Meng</span>
                    <span class="first-name">Kun</span>
                </div>
                <div class="person-info">
                    <p>
                        哈喽大家好，我叫蒙坤，一名前端工程师，这是我的个人博客，主要分享和大家前端但不限于前端的内容。
                    </p>
                    <p>
                        欢迎关注我的博客，让我们一起在前端的道路上相互学习，共同成长,努力追上那个曾经赋予厚望的自己！
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { ref, onMounted } from 'vue';
    import { Share } from '@element-plus/icons-vue';
    import { banerList, hobbyBgList, skillList } from './initData';
    import wecahtAvatar from '../../assets/wechat_Qrcode.jpg';
    export default {
        components: { Share },
        setup() {
            const avatar = ref(wecahtAvatar);
            const tipTxtArr = ref(['Hey,Boy', 'Welcom to', 'Quokka’s Blog']);
            onMounted(() => {
                scrollToDiv();
            });
            function scrollToDiv() {
                setTimeout(() => {
                    const targetDiv = document.getElementById('introduce');
                    targetDiv?.scrollIntoView({ behavior: 'smooth' });
                }, 8000);
            }
            return {
                banerList,
                hobbyBgList,
                avatar,
                skillList,
                tipTxtArr,
            };
        },
    };
</script>

<style lang="scss" scoped>
    $speed: 8s;
    $wordCount: 5;
    $mobile-max-width: 768px;

    .g-container {
        position: relative;
        // width: 100vw;
        height: 100vh;
        background: #000;
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        font-size: 120px;
        filter: contrast(15);
        @media (max-width: $mobile-max-width) {
            font-size: 30px; // 移动设备上的字体大小
        }
    }
    .word {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: change $speed infinite ease-in-out;

        @for $i from 0 to $wordCount {
            &:nth-child(#{$i + 1}) {
                animation-delay: ($speed / ($wordCount + 1) * $i) - $speed;
            }
        }
    }

    @keyframes change {
        0%,
        5%,
        100% {
            filter: blur(0px);
            opacity: 1;
        }
        50%,
        80% {
            filter: blur(80px);
            opacity: 0;
        }
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
        .information {
            margin: 30px 0;
            max-width: 1100px;
            margin: 50px auto;
            .information-title {
                background-image: var(
                    --information-title-bg-img,
                    url('https://www.dengzhanyong.com/xiaomanju/sources/information_title_default.jpg')
                );
                border-radius: 8px;
                box-shadow: 0 0 3px var(--main-box-shadow-color, #999);
                margin-bottom: 30px;
                background-position-y: 90%;
                h2 {
                    font-weight: 600;
                    line-height: 2em;
                    margin-left: 1em;
                    color: var(--main-color, #111);
                }
            }
            .content-layout {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                .card {
                    width: 48%;
                    overflow: hidden;
                    border: 1px solid #ebeef5;
                    box-shadow: 0 0 3px var(--main-box-shadow-color, #999);
                    border-radius: 8px;
                    background-color: var(--panel-bg, #fff) !important;
                    .card-title {
                        padding: 18px 20px;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        border-bottom: 1px solid #ebeef5;
                    }
                    .info-list {
                        max-height: 400px;
                        overflow: hidden;
                        overflow-y: scroll;
                        width: 100%;
                        padding: 0 16px;
                        .info {
                            padding: 0.5rem;
                            font-size: 15px;
                            a {
                                display: inline-block;
                                width: 98%;
                                color: #3b6694;
                                position: relative;
                                padding-left: 1em;
                                word-break: keep-all;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                text-decoration: none;
                            }
                        }
                    }
                }
            }
        }
        .footer {
            .main {
                display: flex;
                justify-content: space-between;
                margin: 80px auto 20px;
                height: 400px;
                width: 1140px;
                .main-item {
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
