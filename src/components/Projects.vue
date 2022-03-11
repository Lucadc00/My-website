<template>
<h1 class="proje-title text-center py-3 my-0 ">My projects</h1>
<div class="container py-5 " id="projects">
	<div class="row">
		<div class="col-md-4">
			<div class="profile-card-4 text-center"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-responsive">
				<div class="profile-content">
					<div class="profile-name">John Doe
						<p>@johndoedesigner</p>
					</div>
					<div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
					<div class="row">
						<div class="col-12 col-sm-4">
							<div class="profile-overview">
								<p>TWEETS</p>
								<h4>1300</h4>
							</div>
						</div>
						<div class="col-12 col-sm-4">
							<div class="profile-overview">
								<p>FOLLOWERS</p>
								<h4>250</h4>
							</div>
						</div>
						<div class="col-12 col-sm-4">
							<div class="profile-overview">
								<p>FOLLOWING</p>
								<h4>168</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="profile-card-4 text-center"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-responsive">
				<div class="profile-content">
					<div class="profile-name">John Doe
						<p>@johndoedesigner</p>
					</div>
					<div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
					<div class="row">
						<div class="col-12 col-sm-4">
							<div class="profile-overview">
								<p>TWEETS</p>
								<h4>1300</h4>
							</div>
						</div>
						<div class="col-12 col-sm-4">
							<div class="profile-overview">
								<p>FOLLOWERS</p>
								<h4>250</h4>
							</div>
						</div>
						<div class="col-12 col-sm-4">
							<div class="profile-overview">
								<p>FOLLOWING</p>
								<h4>168</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="profile-card-4 text-center"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" class="img img-responsive">
				<div class="profile-content">
					<div class="profile-name">John Doe
						<p>@johndoedesigner</p>
					</div>
					<div class="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
					<div class="row">
						<div class="col-12 col-sm-4">
							<div class="profile-overview">
								<p>TWEETS</p>
								<h4>1300</h4>
							</div>
						</div>
						<div class="col-12 col-sm-4">
							<div class="profile-overview">
								<p>FOLLOWERS</p>
								<h4>250</h4>
							</div>
						</div>
						<div class="col-12 col-sm-4">
							<div class="profile-overview">
								<p>FOLLOWING</p>
								<h4>168</h4>
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

}
</script>

<style>

.proje-title{
    margin-left: 400px;
    margin-right: 400px;
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
	top: -70px;
	color: #fff;
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
	font-size: 10px;
	font-weight: 600;
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