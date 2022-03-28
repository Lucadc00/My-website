<template>
 <section id="about" :class="[showA ? 'showAb' : 'hideAb']">
     <h1 class="text-center about-title py-3">About me</h1>
     <div class="section_our_solution py-5 d-flex justify-content-center">
        <div class="row width justify-content-around">
                <div class="solution_cards_box d-flex justify-content-center">
                  <div class="row justify-content-around">
                    <div class="col-12 col-lg-3 py-5 ">
                      <div class="solution_card pr-shadow">
                          <div class="hover_color_bubble"></div>
                          <div class="so_top_icon">
                            <i class="fa-solid fa-graduation-cap fs-3"></i>
                          </div>
                          <div class="solu_title">
                          <h3>My education</h3>
                          </div>
                          <div class="solu_description">
                          <p>
                              I graduated from the scientific high school Margherita Hack in Morlupo (Rm), during these years I have mainly deepened the scientific subjects acquiring good problem solving skills.
                          </p>
                          <!-- <button type="button" class="read_more_btn">Read More</button> -->
                          </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-3 d-flex align-items-center">
                      <div class="astrodivider">
                      <div class="astrodividermask"></div>
                      <span>
                        <i>&#10038;</i>
                      </span>
                    </div>
                    </div>
                    <div class="col-12 col-lg-3 py-5">
                      <div class="solution_card pr-shadow">
                          <div class="hover_color_bubble"></div>
                          <div class="so_top_icon">
                            <i class="fa-solid fa-code fs-3"></i>
                          </div>
                          <div class="solu_title">
                          <h3>My coding expirience</h3>
                          </div>
                          <div class="solu_description">
                          <p>
                              My career as a programmer started at the end of 2021. I took an online programming course from aulab. I have acquired knowledge of front and back end programming.
                          </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--  -->
                <div class="solution_cards_box d-flex justify-content-center">
                  <div class="row justify-content-around">
                    <div class="col-12 col-lg-3 py-5">
                      <div class="solution_card pr-shadow">
                          <div class="hover_color_bubble"></div>
                          <div class="so_top_icon">
                            <i class="fa-solid fa-user fs-3"></i>
                          </div>
                          <div class="solu_title">
                          <h3>About me</h3>
                          </div>
                          <div class="solu_description">
                          <p>
                              I was born in Italy on 08/28/2000.After high school I decided to learn to code because I love to create contents and solve problems.I've now moved to Cork to have an exciting new adventure.
                          </p>
                          </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-3 d-flex align-items-center">
                      <div class="astrodivider">
                      <div class="astrodividermask"></div>
                      <span>
                        <i>&#10038;</i>
                      </span>
                    </div>
                    </div>
                    <div class="col-12 col-lg-3 py-5">
                      <div class="solution_card pr-shadow">
                          <div class="hover_color_bubble"></div>
                          <div class="so_top_icon">
                            <i class="fa-solid fa-music fs-3"></i>
                          </div>
                          <div class="solu_title">
                          <h3>My hobbies</h3>
                          </div>
                          <div class="solu_description">
                          <p>
                              I have been playing the violin for 5 years, I love music because it helps me in all moods. I like playing sudoku chess and all games that have problems to solve or strategies to implement.
                          </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    </div>
 </section>
</template>

<script>
export default {
  data(){
		return{
			showA : false,
		}
	},
	methods: {
        myScrollAbout(){
        	if(window.scrollY >= 750){
				this.showA = true
			}
			else{
				this.showA = false
			}
        },
    },
    created() {
        window.addEventListener("scroll", this.myScrollAbout);
    },
    destroyed() {
        window.removeEventListener("scroll", this.myScrollAbout);
    },
}
</script>

<style>
.showAb{
	transition: all 1s;
}
.hideAb{
	transition: all 1s;
	opacity: 0;
}
/* DIVIDER */
.astrodivider {
  margin: 64px auto;
  width: 400px;
  max-width: 100%;
  position: relative;
}

.astrodividermask {
  overflow: hidden;
  height: 20px;
}

.astrodividermask:after {
  content: "";
  display: block;
  margin: -25px auto 0;
  width: 100%;
  height: 25px;
  border-radius: 125px / 12px;
  box-shadow: 0 0 8px #FF2687;
}
.astrodivider span {
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 100%;
  margin-bottom: -25px;
  left: 50%;
  margin-left: -25px;
  border-radius: 100%;
  box-shadow: 0 2px 4px #FF2687;
  background: #fff;
}
.astrodivider i {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  right: 4px;
  border-radius: 100%;
  border: 1px dashed #002687;
  text-align: center;
  line-height: 40px;
  font-style: normal;
  color: #002687;
}
/*  */
div.row{
    width: 100%;
}
h1.about-title{
    
    background-color: #FF2687;
    background-image: linear-gradient(270deg, #FF2687, #002687);
    background-size: 90%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    transition: all 0.7s;
}
h1.about-title:hover{
    background-size: 80%;
}

.solution_cards_box .solution_card {
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(136, 144, 195, 0.2),
    0 5px 15px 0 rgba(37, 44, 97, 0.15);
  border-radius: 15px;
  margin: 8px;
  padding: 10px 15px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  min-height: 265px;
  transition: 0.7s;
}

.solution_cards_box .solution_card:hover {
  background: #002687;
  color: #fff;
  transform: scale(1.1);
  z-index: 9;
}

.solution_cards_box .solution_card:hover::before {
  background: rgb(85 108 214 / 10%);
}

.solution_cards_box .solution_card:hover .solu_title h3,
.solution_cards_box .solution_card:hover .solu_description p {
  color: #fff;
}

.solution_cards_box .solution_card:before {
  content: "";
  position: absolute;
  background: rgb(85 108 214 / 5%);
  width: 170px;
  height: 400px;
  z-index: -1;
  transform: rotate(42deg);
  right: -56px;
  top: -23px;
  border-radius: 35px;
}

.solution_cards_box .solution_card:hover .solu_description button {
  background: #fff !important;
  color: #002687;
}

.solution_card .solu_title h3 {
  color: #212121;
  font-size: 1.3rem;
  margin-top: 13px;
  margin-bottom: 13px;
}

.solution_card .solu_description p {
  font-size: 15px;
  margin-bottom: 15px;
}

.solution_card .solu_description button {
  border: 0;
  border-radius: 15px;
  background: #002687;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  padding: 5px 16px;
}

.our_solution_content h1 {
  text-transform: capitalize;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}
.hover_color_bubble {
  position: absolute;
  background: rgb(54 81 207 / 15%);
  width: 100rem;
  height: 100rem;
  left: 0;
  right: 0;
  z-index: -1;
  top: 16rem;
  border-radius: 50%;
  transform: rotate(-36deg);
  left: -18rem;
  transition: 0.7s;
}

.solution_cards_box .solution_card:hover .hover_color_bubble {
  top: 0rem;
}

.solution_cards_box .solution_card .so_top_icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fff;
  color: black;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.solution_cards_box .solution_card .so_top_icon img {
  width: 40px;
  height: 50px;
  object-fit: contain;
}

/*start media query*/
@media screen and (min-width: 320px) {
  .sol_card_top_3 {
    position: relative;
    top: 0;
  }

  .our_solution_category {
    width: 100%;
    margin: 0 auto;
  }

  .our_solution_category .solution_cards_box {
    flex: auto;
  }
}
@media only screen and (min-width: 768px) {
  .our_solution_category .solution_cards_box {
    flex: 1;
  }
}
@media only screen and (min-width: 1024px) {
  .sol_card_top_3 {
    position: relative;
    top: -3rem;
  }
  .our_solution_category {
    width: 50%;
    margin: 0 auto;
  }
}

</style>