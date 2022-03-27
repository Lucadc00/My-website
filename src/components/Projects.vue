<template>
<h1 id="projects" class="proje-title text-center py-3 my-0 ">My projects</h1>
<div :class="[showP ? 'showPr' : 'hidePr']" class="container py-5 d-flex justify-content-center">
	<div class="row">
		<div class="col-md-4 " v-for="project in projects" :key="project.name">
			<div class="profile-card-4 text-center pr-shadow"><img :src="project.img" class="img img-responsive" width="300" height="200">
				<div class="profile-content pt-5">
					<div class="profile-name">
						{{project.name}}
					</div>
					<div class="profile-description">{{project.description}}</div>
					<div class="row">
						<div class="col-12 col-sm-4 d-flex align-items-center justify-content-center">
							<div class="profile-overview">
								<h4>More</h4>
								<a href="">
									<i class="fa-solid fa-circle-info project-icons pt-2"></i>
								</a>
							</div>
						</div>
						<div class="col-12 col-sm-4">
							<div class="profile-overview">
							</div>
						</div>
						<div class="col-12 col-sm-4">
							<div class="profile-overview">
								<h4>Github</h4>
								<a :href="project.git">
									<i class="fa-brands fa-github project-icons pt-2"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data(){
		return{
			projects : [
				{id: 1,name:'This web site', description:'Questo sito è stato costruito con vue 3', img:'../../img/vue.jpeg', git:'https://github.com/Lucadc00/My-website'},
				{id:2, name:'Laravel', description:'progetti lara', img:'../../img/laravel.png', git:''},
				{id:3, name:'Plain html and js', description:'descrizione progetti semplici',img:'../../img/plain.jpeg', git:''}
			],
			showP : false,
		}
	},
	methods: {
        
        myScroll(){
        	if(window.scrollY >= 150){
				this.showP = true
			}
			else{
				this.showP = false
			}
        },
    },
    created() {
        window.addEventListener("scroll", this.myScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.myScroll);
    },

}
</script>

<style>
.project-icons{
	color: #002687;
	font-size: 30px;
	transition: all 0.5s;
}
.project-icons:hover{
	transition: all 0.5;
	transform: scale(1.3);
	color: #000987;
}
.pr-shadow{
box-shadow: 10px 15px 25px -8px #FF2687 !important;
}
.showPr{
	transition: all 1s;
}
.hidePr{
	transition: all 1s;
	opacity: 0;
}
.proje-title{
    
    background-color: #FF2687;
    background-image: linear-gradient(270deg, #FF2687, #002687);
    background-size: 90%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    transition: all 0.7s;
}
.proje-title:hover{
    background-size: 80%;
}


.card-container {
	padding: 100px 0px;
	-webkit-perspective: 1000;
	perspective: 1000;
}


.profile-card-4 {
	max-width: 300px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	position: relative;
	margin: 10px auto;
	cursor: pointer;
}

.profile-card-4 img {
	transition: all 0.25s linear;
}

.profile-card-4 .profile-content {
	position: relative;
	padding: 15px;
	background-color: #fff;
}

.profile-card-4 .profile-name {
	font-weight: bold;
	position: absolute;
	left: 0px;
	right: 0px;
	top: 5px;
	color: black;
	font-size: 17px;
}

.profile-card-4 .profile-name p {
	font-weight: 600;
	font-size: 13px;
	letter-spacing: 1.5px;
}

.profile-card-4 .profile-description {
	color: #777;
	font-size: 12px;
	padding: 10px;
}

.profile-card-4 .profile-overview {
	padding: 15px 0px;
}

.profile-card-4 .profile-overview p {
	font-size: 20px;
	font-weight: bolder;
	color: #777;
}

.profile-card-4 .profile-overview h4 {
	color: #273751;
	font-weight: bold;
}

.profile-card-4 .profile-content::before {
	content: "";
	position: absolute;
	height: 20px;
	top: -10px;
	left: 0px;
	right: 0px;
	background-color: #fff;
	z-index: 0;
	transform: skewY(3deg);
}

.profile-card-4:hover img {
	transform: rotate(5deg) scale(1.1, 1.1);
	filter: brightness(110%);
}
</style>