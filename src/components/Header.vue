<template>
  <header class="my-header my-back">
      <div class="container-fluid my-back p-0 my-header">
          <div class="row my-header align-items-center">
              <div class="col-6">
                <h1 class="block-effect" style="--td: 1.2s">
                    <div class="block-reveal" style="--bc: #002687; --d: .1s">Luca</div>
                    <div class="block-reveal" style="--bc: #FF2687; --d: .5s">De Cesare</div>
                </h1>
              </div>
              <div class="col-6">
                  <h2>Full-stack web developer fond of vue </h2>
                  <h2>!Work in progres!</h2>
                  <a href="file/resume.pdf" download=""><button class="btn head-btn mt-3 me-5 ">My resume </button></a>
                  <a href="file/aulab.pdf" download=""><button button class="btn head-btn mt-3">Aulab certification</button></a>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
    /* reset */
.head-btn{
  border-style: solid;
  border-color: #FF2687 !important;
  color: #FF2687;
}
.head-btn:hover{
  background-color: #FF2687;
  color: white;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* other */
.info {
  margin: 20px 0;
  text-align: center;
}

p {
  color: #2e2e2e;
  margin-bottom: 20px;
}


/* block-$ */
.block-effect {
  font-size: calc(8px + 6vw);
}

.block-reveal {
  --t: calc(var(--td) + var(--d));

  color: transparent;
  padding: 4px;

  position: relative;
  overflow: hidden;

  animation: revealBlock 0s var(--t) forwards;
}

.block-reveal::after {
  content: '';

  width: 0%;
  height: 100%;
  padding-bottom: 4px;

  position: absolute;
  top: 0;
  left: 0;

  background: var(--bc);
  animation: revealingIn var(--td) var(--d) forwards, revealingOut var(--td) var(--t) forwards;
}


/* animations */
@keyframes revealBlock {
  100% {
    color: #FF2687;
  }
}

@keyframes revealingIn {

  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

@keyframes revealingOut {

  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }

}

.abs-site-link {
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: hsla(0, 0%, 0%, .6);
  font-size: 16px;
}
.my-header{
    height: 70vh;
    width: 100%;
    margin: 0px !important;
}
.my-back{
    background-image: linear-gradient(to top,rgba(0, 0, 0, 0.849), rgba(0, 0, 0, 0.548)), url('../../public/img/Header.png');
    background-size: cover;
    color: #FF2687;
}
</style>