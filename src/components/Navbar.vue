<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg my-background">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
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
            small: false,
            value: window.devicePixelRatio,
        }
    }

}
</script>

<style>

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