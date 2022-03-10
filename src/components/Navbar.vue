<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg my-background">
        <div class="container-fluid">
            <button @click="changeIcon" class="navbar-toggler my" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-chevron-circle-down transition" :class="{rotate : active}"></i>
            </button>
            <div class="collapse navbar-collapse justify-content-around text-center" id="navbarSupportedContent">
                <div class="col-4 fw-bold nav-item ">
                    <a class="nav-link active my-color" aria-current="page" href="#">Home</a>
                </div>
                <hr class="m-0 my-color">
                <div class="col-4 fw-bold nav-item">
                    <a class="nav-link active my-color" aria-current="page" href="#">Home</a>
                </div>
                <hr class="m-0 my-color">
                <div class="col-4 fw-bold nav-item">
                    <a class="nav-link my-color" href="#">Link</a>
                </div>
                <!-- <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                    
                    </li>
                    <li class="nav-item">
                   
                    </li>
                    <li class="nav-item">
                    
                    </li>
                </ul> -->
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            active: false,
        }
    },
    methods: {
        changeIcon(){
            this.active = !this.active
            console.log(this.active);
        }
    }

}
</script>

<style>
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
.my-background{
    background-color: black !important;
}
hr.my-color{
    color: #FF2687 !important;
}
.my-color{
   color: #FF2687 !important;
}
.my-color:hover{
    color: #ff2688a9 !important;
}
</style>