<template>
    <nav id="nav" class="navbar navbar-dark bg-dark navbar-expand-lg my-background">
        <div class="container-fluid">
            <button @click="changeIcon" class="navbar-toggler my" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-chevron-circle-down transition" :class="{rotate : active}"></i>
            </button>
            <div class="collapse navbar-collapse justify-content-around text-center" id="navbarSupportedContent">
                <div class="col-4 fw-bold nav-item">
                    <a class="nav-link active my-color mx" :class="[center ? 'text-start' : 'text-center']" aria-current="page" href="#projects">Projects</a>
                </div>
                <hr class="m-0 color">
                <div class="col-4 fw-bold nav-item">
                    <a class="nav-link active my-color mx" :class="[center ? 'text-start' : 'text-center']" aria-current="page" href="#about">About me</a>
                </div>
                <hr class="m-0 color">
                <div class="col-4 fw-bold nav-item">
                    <a class="nav-link my-color mx wdt" :class="[center ? 'text-start' : 'text-center']" href="#dk-footer">Contact me</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
    data(){
        return{
            active: false,
            center: false,
        }
    },
    methods: {
        changeIcon(){
            this.active = !this.active
        },
        myEventHandler(){
            if (window.innerWidth <= 992) return this.center = true
            this.center = false
        },
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
    },
}
</script>

<style>
a.wdt{
    min-width: 150px;
}
a.mx{
    margin-left: 0px;
    margin-right: 0px;
    
}

.transition{
    transition: 0.7s;
}
.rotate{
    transform: rotate(180deg);
    transition: 0.7s;
}
button.my{
    border: none !important;
    box-shadow: none !important;
    color: #FF2687 !important;
}
button.my:active{
    box-shadow: none !important;
}
nav.my-background{
    background-color: black !important;
}
hr.color{
    color: #FF2687 !important;
}
.my-color{
   background-color: #FF2687;
    background-image: linear-gradient(45deg, #FF2687, #002687);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    transition: all 0.7s;
}
.my-color:hover{
    background-size: 150%;
}
@media screen and (min-width: 992px) {
  a.mx{
    margin-left: 150px;
    margin-right: 150px;
}
}
</style>