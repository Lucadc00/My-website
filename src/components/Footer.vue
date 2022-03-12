<template>

<footer id="dk-footer" class="dk-footer mt-5">
        <div class="container">
            <div class="row">
                <!-- End Col -->
                <div class="col-md-6">
                  <div class="row">
                      <!-- End Col -->
                      <div class="col-12">
                          <div class="contact-us contact-us-last">
                              <div class="contact-icon">
                                  <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                              </div>
                              <!-- End contact Icon -->
                              <div class="contact-info">
                                  <h3>95 711 9 5353</h3>
                                  <p class="text-white">Give me a call</p>
                              </div>
                              <!-- End Contact Info -->
                          </div>
                          <!-- End Contact Us -->
                      </div>
                      <!-- End Col -->
                      <div class="col-12 mb-5">
                          <div class="footer-widget footer-left-widget p-0">
                              <div class="section-heading">
                                  <h3>Useful Links</h3>
                                  <span class="animate-border border-black"></span>
                              </div>
                              <ul>
                                  <li>
                                      <a href="#">About us</a>
                                  </li>
                                  <li>
                                      <a href="#">Services</a>
                                  </li>
                                  <li>
                                      <a href="#">Projects</a>
                                  </li>
                                  <li>
                                      <a href="#">Our Team</a>
                                  </li>
                              </ul>
                              <ul>
                                  <li>
                                      <a href="#">Contact us</a>
                                  </li>
                                  <li>
                                      <a href="#">Blog</a>
                                  </li>
                                  <li>
                                      <a href="#">Testimonials</a>
                                  </li>
                                  <li>
                                      <a href="#">Faq</a>
                                  </li>
                              </ul>
                          </div>
                          <!-- End Footer Widget -->
                      </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row">
                      <div class="col-12">
                          <div class="contact-us p-0">
                              <div class="contact-icon">
                                  <i class="fas fa-envelope" aria-hidden="true"></i>
                              </div>
                              <!-- End contact Icon -->
                              <div class="contact-info">
                                  <h3>Email</h3>
                                  <p class="text-white">lucadecesare12@gmail.com</p>
                              </div>
                              <!-- End Contact Info -->
                          </div>
                          <!-- End Contact Us -->
                      </div>
                      
                      <!-- End col -->
                      <div class="col-12">
                          <div class="footer-widget">
                              <div class="section-heading">
                                  <h3>Subscribe</h3>
                                  <span class="animate-border border-black"></span>
                              </div>
                              <p><!-- Don’t miss to subscribe to our new feeds, kindly fill the form below. -->
                              Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
                              <form action="#">
                                  <div class="form-row">
                                      <div class="col dk-footer-form">
                                          <input type="email" class="form-control" placeholder="Email Address">
                                          <button type="submit" class="foot">
                                              <i class="fas fa-paper-plane foot-colo"></i>
                                          </button>
                                      </div>
                                  </div>
                              </form>
                              <!-- End form -->
                          </div>
                          <!-- End footer widget -->
                      </div>
                      <!-- End Col -->
                  </div>
                </div>
                    <!-- End Contact Row -->
                    <!-- End Row -->
                <!-- End Col -->
            </div>
            <!-- End Widget Row -->
        </div>
        <!-- End Contact Container -->
        <!-- Back to top -->
        <div id="back-to-top" class="back-to-top">
            <button @click="topFn"  class="btn btn-dark my my-back" title="Back to Top" style="display: inline-block;">
                <i class="fa fa-angle-up" ></i>
            </button>
        </div>
        <!-- End Back to top -->
</footer>


<!-- Credit to https://bootsnipp.com/snippets/ooa9M -->
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        topFn(){
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    }
}
</script>

<style>
i.foot-colo{
  color: #FF2687;
}
button.foot{
  background-color: #2E2E2E !important;
  border: none !important;
  height: 54px;
}
.my-back:hover{
     background-color:#2e2e2e !important;
 }

.footer-widget p {
    margin-bottom: 27px;
}
p {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 28px;
}

.animate-border {
  position: relative;
  display: block;
  width: 115px;
  height: 3px;
  background: #002687; }

.animate-border:after {
  position: absolute;
  content: "";
  width: 35px;
  height: 3px;
  left: 0;
  bottom: 0;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
  -webkit-animation: animborder 2s linear infinite;
  animation: animborder 2s linear infinite; }

@-webkit-keyframes animborder {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px); }
  100% {
    -webkit-transform: translateX(113px);
    transform: translateX(113px); } }

@keyframes animborder {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px); }
  100% {
    -webkit-transform: translateX(113px);
    transform: translateX(113px); } }

.animate-border.border-white:after {
  border-color: #fff; }

.animate-border.border-yellow:after {
  border-color: #F5B02E; }

.animate-border.border-orange:after {
  border-right-color: #002687;
  border-left-color: #002687; }

.animate-border.border-ash:after {
  border-right-color: #EEF0EF;
  border-left-color: #EEF0EF; }

.animate-border.border-offwhite:after {
  border-right-color: #F7F9F8;
  border-left-color: #F7F9F8; }

/* Animated heading border */

.dk-footer {
  padding: 75px 0 0;
  background-color: #151414;
  position: relative;
  z-index: 2; }
  .dk-footer .contact-us {
    margin-top: 0;
    margin-bottom: 30px;
    padding-left: 80px; }
    .dk-footer .contact-us .contact-info {
      margin-left: 50px; }
    .dk-footer .contact-us.contact-us-last {
      margin-left: -80px; }
  .dk-footer .contact-icon i {
    font-size: 24px;
    top: -15px;
    position: relative;
    color:#FF2687; }



.footer-left-widget {
  padding-left: 80px; }

.footer-widget .section-heading {
  margin-bottom: 35px; }

.footer-widget h3 {
  font-size: 24px;
  color: #fff;
  position: relative;
  margin-bottom: 15px;
  max-width: -webkit-fit-content;
  max-width: -moz-fit-content;
  max-width: fit-content; }

.footer-widget ul {
  width: 50%;
  float: left;
  list-style: none;
  margin: 0;
  padding: 0; }

.footer-widget li {
  margin-bottom: 18px; }

.footer-widget p {
  margin-bottom: 27px; }

.footer-widget a {
  color: #878787;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s; }
  .footer-widget a:hover {
    color: #007bff; }

.footer-widget:after {
  content: "";
  display: block;
  clear: both; }

.dk-footer-form {
  position: relative; }
  .dk-footer-form input[type=email] {
    padding: 14px 28px;
    border-radius: 50px;
    background: #2E2E2E;
    border: 1px solid #2E2E2E; }
  .dk-footer-form input::-webkit-input-placeholder, .dk-footer-form input::-moz-placeholder, .dk-footer-form input:-ms-input-placeholder, .dk-footer-form input::-ms-input-placeholder, .dk-footer-form input::-webkit-input-placeholder {
    color: #878787;
    font-size: 14px; }
  .dk-footer-form input::-webkit-input-placeholder, .dk-footer-form input::-moz-placeholder, .dk-footer-form input:-ms-input-placeholder, .dk-footer-form input::-ms-input-placeholder, .dk-footer-form input::placeholder {
    color: #878787;
    font-size: 14px; }
  .dk-footer-form button[type=submit] {
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px 24px 12px 17px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border: 1px solid #007bff;
    background: #007bff;
    color: #fff; }
  .dk-footer-form button:hover {
    cursor: pointer; }

/* ==========================

    Contact

=============================*/
.contact-us {
  position: relative;
  z-index: 2;
  margin-top: 65px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center; }

.contact-icon {
  position: absolute; }
  .contact-icon i {
    font-size: 36px;
    top: -5px;
    position: relative;
    color: #007bff; }

.contact-info {
  margin-left: 75px;
  color: #fff; }
  .contact-info h3 {
    font-size: 20px;
    color: #fff;
    margin-bottom: 0; }

.back-to-top {
  position: relative;
  z-index: 2; }
  .back-to-top .btn-dark {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    padding: 0;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #2e2e2e;
    border-color: #2e2e2e;
    display: none;
    z-index: 999;
    -webkit-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear; }
    .back-to-top .btn-dark:hover {
      cursor: pointer;
      background: #FA6742;
      border-color: #FA6742; }

  /* Credit to https://bootsnipp.com/snippets/ooa9M  */    
</style>