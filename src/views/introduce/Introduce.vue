<!--
 * @Author: mengkun822 1197235402@qq.com
 * @Date: 2023-07-27 16:25:26
 * @LastEditors: mengkun822 1197235402@qq.com
 * @LastEditTime: 2023-07-29 16:06:57
 * @FilePath: \blog_web\src\views\introduce\Introduce.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="container text-center">
        <div class="card">
            <img src="..." class="card-img-top" alt="..." />

            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div class="card" aria-hidden="true">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8"></span>
                </p>
                <a
                    href="#"
                    tabindex="-1"
                    class="btn btn-primary disabled placeholder col-6"
                ></a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
</script>

<style lang="scss" scoped>
    .bg {
        width: 100%;
        background: rgba(var(--bs-secondary-bg-rgb), 0.5);
    }
</style>
