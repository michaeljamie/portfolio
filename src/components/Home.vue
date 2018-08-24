<template>

  <div id="app">
   <div class="welcome">
      <div class = 'mainTitle'>
        <nav class='homeNav'>
          <a href="#" v-scroll-to="'#div-about'" class = 'link'><h2 class='navLink'>ABOUT</h2></a>
          <a href="#" v-scroll-to="'#div-portfolio'" class = 'link'><h2 class='navLink'>PORTFOLIO</h2></a>
          <a href="#" v-scroll-to="'#div-skills'" class = 'link'><h2 class='navLink'>SKILLS</h2></a>
          <a href="#" v-scroll-to="'#div-contact'" class = 'link'><h2 class='navLink'>CONTACT</h2></a>
        </nav>
        <div class='headContent'>
          <h3 class='headTitle'>Hello, I'm Michael Johnston.</h3>
          <h3 class='headTitle'>I'm a full-stack web developer.</h3>
          <a href="#" v-scroll-to="'#div-portfolio'"><button class='buttonStyle'>View My Work</button></a>
          <a href="#" v-scroll-to="'#div-about'"><img class = 'arrow' src='./../assets/arrow.png' alt=""></a>
         </div>
      </div>
      <div class='particle'>
        <vue-particles
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="2.5"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="4"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
          >
          



        </vue-particles>
      </div>
    </div>
    <div id="div-about"></div>
    <div class='scrollBar'>
      <div class='scrollTop'>
        <div class='scrollBlue'></div>
        <H2 class='scrollTitle'>ABOUT ME</H2>
        
      </div>
        <p class = 'about'>Having worked over 10 years in the tech industry in multiple roles I've really come to appreciate technology and develop a love of learning.  I have an enormous passion for code and for turning ideas into reality.  I am excited to contribute to your team and continue to learn and progress.</p>
    </div>
    <div id="div-portfolio"></div>
    <div class='portfolio'>
      <div class='portfolioTitle'>
        <div class='scrollBlue'></div>
        <H2 class='portfolioTitle1'>PORTFOLIO</H2>
        <p class = 'portfolioSubtitle'>Here is a sample of my work:</p>
        

      </div>
      <div class = 'portfolioBack'>
        <div class='portfolioSide'>
          <h3>Personally Developed Web App</h3>
          <h1>DOODLE NINJA</h1>
          <h4>Collaborative Whiteboard App for Designers, Developers, Managers, and Teachers</h4>
          <h2>TECHNOLOGY USED:</h2>
          <h4>React | Redux | HTML | CSS | Javascript | Node | Express | PostgreSQL | Massive | Socket IO | Nodemailer </h4>
          <p>I created a collaborative whiteboard app where remote teams can sync up and share, visualize, and brainstorm ideas, integrate with all team members simultaneously, and keep everyone involved. UI/UX and design changes can be discussed in real-time with multiple users making and updating the canvas. Teachers can coordinate and interact with students via the digital whiteboard and chat. Managers can review performance with employees remotely, as well as endless other possibilities.</p>
        </div>
        <div class='portfolioSide1'>
          <carousel :per-page="1" :loop="true" :autoplay="true" :autoplayTimeout="3000" paginationActiveColor="#21c2f8" paginationColor="#bdc3c7" class='Carousel'>
            <slide>
              <img src='./../assets/HomePage.png' alt="" class = 'portImg'>
              <p class = 'desc'>Top of Home Page</p>
            </slide>
            <slide>
              <img src='./../assets/HomePage2.png' alt="" class = 'portImg'>
              <p class = 'desc'>Middle of Home Page</p>
            </slide>
            <slide>
              <img src='./../assets/HomePage3.png' alt="" class = 'portImg'>
              <p class = 'desc'>Bottom of Home Page</p>
            </slide>
            <slide>
              <img src='./../assets/Dashboard.png' alt="" class = 'portImg'>
              <p class = 'desc'>Dashboard Page</p>
            </slide>
            <slide>
              <img src='./../assets/Creator.png' alt="" class = 'portImg'>
              <p class = 'desc'>Creator Page</p>
            </slide>
            <slide>
              <img src='./../assets/Canvas.png' alt="" class = 'portImg'>
              <p class = 'desc'>Canvas Page</p>
            </slide>
          </carousel>
          <div class='bottomCar'>
            <a href="https://doodle.ninja/#/" target="_blank"><button class='carbut'>Live Site</button></a>
            <a href="https://github.com/michaeljamie" target="_blank"><button class='carbut'>Github</button></a>
          </div>
        </div>
        
      </div>
      <!-- <div class = 'portfolioBack'>
        <div class='portfolioSide'>
          <h3>Personally Developed Web App</h3>
          <h1>PUPPY FINDER</h1>
          <h4>App to find adoptable </h4>
          <h2>TECHNOLOGY USED:</h2>
          <h4>React | HTML | CSS | Javascript | Node | Express </h4>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class='portfolioSide1'>
          <img src="" alt=""  class = 'portImg'>
        </div>
        
      </div> -->
    </div>
    <div id="div-skills"></div>
    <div class = 'skills'>
      <div class='scrollBlue1'></div>
      <h3 class = 'skillsTitle'>SKILLS</h3>
      <div class='skillsRow'>
        <div class = 'skillCard'>
          <img class = 'skillLogo' src='./../assets/react.png' alt="">
          <p class= 'skillTag'>REACT</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/node.png' alt="">
          <p class= 'skillTag'>NODE.JS</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/javascript.png' alt="">
          <p class= 'skillTag'>JAVASCRIPT</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/express.png' alt="">
          <p class= 'skillTag'>EXPRESS</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/redux.png' alt="">
          <p class= 'skillTag'>REDUX</p>
        </div>
      </div>
      <div class='skillsRow'>
        <div class = 'skillCard'>
          <img class = 'skillLogo' src='./../assets/html.png' alt="">
          <p class= 'skillTag'>HTML</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/css.png' alt="">
          <p class= 'skillTag'>CSS</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/socket.png' alt="">
          <p class= 'skillTag'>SOCKET IO</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/vue.png' alt="">
          <p class= 'skillTag'>VUE.JS</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/postgresql.png' alt="">
          <p class= 'skillTag'>POSTGRESQL</p>
        </div>
      </div>
      <div class='skillsRow'>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/massive.png' alt="">
          <p class= 'skillTag'>MASSIVE</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/git.png' alt="">
          <p class= 'skillTag'>GIT</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/sass.png' alt="">
          <p class= 'skillTag'>SASS</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/postman.png' alt="">
          <p class= 'skillTag'>POSTMAN</p>
        </div>
        <div class = 'skillCard'>
          <img class = 'skillLogo'  src='./../assets/jest.svg' alt="">
          <p class= 'skillTag'>JEST</p>
        </div>

        

      </div>
    </div>
    <div id="div-contact"></div>
    <div class = 'contact'>
      <div class='scrollBlue1'></div>
      <h3 class = 'contactTitle'>GET IN TOUCH</h3>
      <div class='contactMid'>
        <p class = 'portfolioSubtitle1'>I would love to get in touch with you to discuss future opportunities.  Please call, email, or text me at any time convenient to you. <br/> I look forward to hearing from you!</p>
        <p class = 'portfolioSubtitle1'>Email: michaeljamiejohnston@gmail.com</p>
        <p class = 'portfolioSubtitle1'>Phone: (801) 717 - 8250</p>
        
      </div>    
      <div class='contactBottom'>
        <div>
          <input type="text" class = 'input1' placeholder='Name' v-model='name'>
          <input type="text" class = 'input1' placeholder='Email' v-model='email'>
        </div>
        <textarea name="text" class = 'input2' id="" cols="30" rows="20" placeholder='Message' v-model='message'></textarea>
        <button class='buttonStyle1' @click='send'>Submit</button>
      </div>
    </div>
    <div class='footer'>
      <div>
        <a href="https://www.linkedin.com/in/michaeljamiejohnston/" target="_blank"><img class = 'icon' src='./../assets/LinkedIn.png' alt=""></a>
        <a href="https://github.com/michaeljamie" target="_blank"><img class = 'icon' src='./../assets/Github.png' alt=""></a>
        <!-- <a href="https://www.instagram.com/michaeljamie/" target="_blank"><img class = 'icon' src='./../assets/instagram.png' alt=""></a>
        <a href="https://www.facebook.com/michaelandhannahjohnston" target="_blank"><img class = 'icon' src='./../assets/Facebook.png' alt=""></a> -->
        <p class = 'footBottom'>Built in Vue.js. ©All Rights Reserved.</p>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },

  methods: {
    send () {
      console.log(this.name, this.email, this.message)
      const obj = {name: this.name, email: this.email, message: this.message}
      axios.post('http://localhost:9000/api/send', obj).catch(err => {
        console.log(err);
      })
      this.name = '';
      this.email = '';
      this.message = '';
    }
  },
  mounted () {
    let scrollpos = window.scrollY
    const header = document.querySelector("nav")
    const header_height = header.offsetHeight

    const add_class_on_scroll = () => header.classList.add("fade-in")
    const remove_class_on_scroll = () => header.classList.remove("fade-in")

    window.addEventListener('scroll', function() { 
      scrollpos = window.scrollY;

      if (scrollpos >= header_height-50) { add_class_on_scroll() }
      else { remove_class_on_scroll() }

      
})

  }
}
</script>


<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Raleway');
/* *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */
.welcome {
  height: 100%;
  width: 100%;
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./../assets/bkgd.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: none;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: stretch;
	align-content: stretch;
  margin: 0;
  position: initial;
  text-align: center;
}

.particle {
  position: absolute;
  height: 100%;
  width: 100%;
}

/* .particles-js {
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70vh;
  margin: 15px;
}  */


.homeNav {
  color: white;
  width: 100%;
  position: fixed;
  z-index: 900;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
  margin: 0;
  top: 0;
}

nav {
  --ease: all 700ms ease;
  transition: var(--ease);
  height: 20%;
}

nav.fade-in {
  background: linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35) );
  height: 25%;
}

.link {
  text-decoration: none;
  outline: none;
  font-family: 'Raleway', sans-serif;

}

.mainTitle {
  color: #fff;
  /* z-index: 999; */
  /* position: absolute; */
  height: 105vh;
  width: 100%;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
  margin: 0;
  
}

.navLink {
  color: #f3f7f8;
  font-size: 30px;
  text-decoration: none;
  transition: all .2s ease-in-out;
  margin: 0;
  position: relative;
}

.navLink:hover {
  color: #f3f7f8;
}

.navLink:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #21c2f8;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.navLink:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

.scrollBar {
  height: 75vh;
  width: 100%;
  background: #202020;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
}

.scrollTop {
  width: 100%;
  height: 30vh;
  color: #f3f7f8;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
}

.scrollTitle {
  font-size: 90px;
  font-family: 'Raleway', sans-serif;
  margin-top: 20px;
  margin-left: 20px;
}

.scrollBlue {
  width: 10vw;
  height: 5px;
  border-radius: 15px;
  background: #21c2f8;

}

.about {
  color: #f3f7f8;
  font-family: 'Montserrat', sans-serif;
  font-size: 23px;
  margin-top: 40px;
  width: 70vw;
}

.headContent {
  margin-top: 30vh;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;
}

.headTitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  margin: 15px;
}

.buttonStyle {
  padding: 20px 40px;
  background: none;
  border: none;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
  color: white;
  margin-top: 14vh;
  z-index: 100;
}
.buttonStyle:after, .buttonStyle:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 2px solid white;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}
.buttonStyle:after {
  -webkit-transform: translate(3px, 3px);
          transform: translate(3px, 3px);
}
.buttonStyle:before {
  -webkit-transform: translate(-3px, -3px);
          transform: translate(-3px, -3px);
}
.buttonStyle:hover:after, .buttonStyle:hover:before {
  -webkit-transform: translate(0);
          transform: translate(0);
          cursor: pointer;
}

.buttonStyle:hover {
  cursor: pointer;
}

.arrow {
  height: 48px;
  margin-top: 10vh;
  animation: float 4.5s ease-in-out infinite;
  z-index: 100;
}

.arrow:hover {
  cursor: pointer;
  z-index: 100;
}

.portfolio {
  height: 140vh;
  background:  linear-gradient( rgba(200, 200, 200, 0.603), rgba(200, 200, 200, 0.583) ), url('./../assets/bkgd2.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: none;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
}

.portfolioTitle {
  height: 50vh;
  width: 100%;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
}

.portfolioTitle1 {
  font-size: 75px;
  font-family: 'Raleway', sans-serif;
  margin-top: 35px;
  margin-left: 20px;
  color: #202020;
}

.portfolioSubtitle {
  color: #202020;
  font-family: 'Montserrat', sans-serif;
  margin-top: 40px;
  font-size: 26px;
}

.portfolioBack {
  margin-bottom: 20vh;
  height: 95vh;
  width: 88vw;
  background: #f3f7f8;
  border-radius: 10px;
 	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;
}

.portfolioSide {
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: stretch;
  height: 75vh;
  width: 40vw;
  text-align: left;
  margin-left: 3vw;
}


.portfolioSide>h4 {
  color: #202020;
  font-size: 17.5px;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
}

.portfolioSide>h3 {
  color:#21c2f8;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
}

.portfolioSide>h2 {
  color: #202020;
  font-size: 25px;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 20px;
}

.portfolioSide>h1 {
  color: #202020;
  font-size: 38px;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 20px;
}

.portfolioSide>p {
  color: #202020;
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align:justify;
}

.portfolioSide1 {
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
  height: 94vh;
  width: 40vw;
}

.Carousel {
  margin-top: 60px;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
  text-align: center;
  height: 60vh;
  width: 32vw;
}

.bottomcar {
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
  margin-top: 20px;
}

.carbut {
  background:#21c2f8;
  color: white;
  border: none;
  border-radius: 4px;
  height: 40px;
  width: 120px;
  margin: 30px;
}

.carbut:hover {
  border: 1px solid #21c2f8;
  background: white;
  color: #21c2f8;
  cursor: pointer;
}

.portImg {
  margin: 10px;
  width: 30vw;
  height: 36vh;
  border: .5px solid black;
}

.desc {
  font-family: 'Montserrat', sans-serif;
}

.skills {
  background: #f3f7f8; 
  width: 100%;
  height: 97.5vh;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
}

.skillsTitle {
  font-size: 75px;
  font-family: 'Raleway', sans-serif;
  margin-top: 35px;
  margin-left: 20px;
  color: #202020;
}

.skillsRow {
  margin-top: 15px;
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;
  height: 20vh;
}

.skillLogo {
  height: 80px;
  margin: 0 30px;
}

.skillTag {
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  margin-top: 10px;
}

.skillCard {
  display: flex;
  flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;
  height: 10vh;
  width: 8vw;
}

.scrollBlue1 {
  width: 10vw;
  height: 5px;
  border-radius: 15px;
  background: #21c2f8;
  margin-top: 50px;
}

.contact {
  background: linear-gradient( rgba(200, 200, 200, 0.603), rgba(200, 200, 200, 0.583) ), url('./../assets/bkgd3.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: none;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 117vh;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
  text-align: center;
}

.contactTitle {
  font-size: 75px;
  font-family: 'Raleway', sans-serif;
  margin-top: 35px;
  margin-left: 20px;
  color: #202020;
}

.portfolioSubtitle1 {
  color: #202020;
  font-family: 'Montserrat', sans-serif;
  margin-top: 40px;
  font-size: 26px;
}

.contactMid {
  height: 40vh;
  width: 60vw;
}

.contactBottom {
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
}

.input1 {
  height: 5vh;
  width: 12.4vw;
  margin: 15px;
  border-radius: 3.5px;
  border: none;
}

.input2 {
  height: 20vh;
  width: 27vw;
  margin: 15px;
  border-radius: 5px;
  border: none;
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: stretch;
}

.input1:focus {
  border: 1px solid #21c2f8;
}

.input2:focus {
  border: 1px solid #21c2f8;
}

.input1::placeholder {
  font-family: 'Montserrat', sans-serif;
}

.input2::placeholder {
  font-family: 'Montserrat', sans-serif;
}

.buttonStyle1 {
  padding: 20px 40px;
  background: none;
  border: none;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
  color: #202020;
  margin-top: 25px;
}
.buttonStyle1:after, .buttonStyle1:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: 2px solid #202020;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}
.buttonStyle1:after {
  -webkit-transform: translate(3px, 3px);
          transform: translate(3px, 3px);
}
.buttonStyle1:before {
  -webkit-transform: translate(-3px, -3px);
          transform: translate(-3px, -3px);
}
.buttonStyle1:hover:after, .buttonStyle1:hover:before {
  -webkit-transform: translate(0);
          transform: translate(0);
}

.footer {
  width: 100%;
  height: 35vh;
  background: #202020;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
  text-align: center;
}

.icon {
  height: 35px;
  margin: 0 15px;
  transition: .2s ease-in-out;
}

.icon:hover {
  cursor: pointer;
  transform: scale(1.20)
}

.footBottom {
  color: white;
  font-family: 'Raleway', sans-serif;
  margin-top: 30px;
}

@media (max-width: 500px){


  nav {
    height: 15%;
  }

  nav.fade-in {
    height: 20%;
  }

  .homeNav {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    position: fixed;
  }


  .navLink {
    font-size: 13px;
    margin: 11.5px;
  }

  .particle {
    display: none;
  }

  .buttonStyle {
    margin-top: 2vh;
  }
  
  .arrow {
    height: 28px;
  }

  .mainTitle {
    height: 100vh;
  }

  .headTitle {
    font-size: 28px;
  }

  .scrollTitle {
    font-size: 40px;
    
  }

  .scrollBlue {
    width: 25vw;
  }

  .about {
    font-size: 18px;
    text-align: justify;
    margin-top: 0px;
    margin-bottom: 20px;
  }

  .portfolioTitle1 {
    font-size: 35px;
  }

  .portfolioSubtitle {
    font-size: 20px;
  }

  .Carousel {
    display: none;
  }

  .portfolioBack {
    display: flex;
    flex-direction: column;
  }

  .bottomcar {
    flex-direction: row;
    margin-top: 5px;
    align-content: center;
  }

  .carbut {
    width: 100px;
    height: 50px;
    margin: 5px;
    font-size: 17px;
  }

  .portfolioSide1 {
    height: 10vh;
    width: 80vw;
  }

   .portfolioSide {
    width: 80vw;
  }

  .portfolioSide>h4 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .portfolioSide>h3 {
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .portfolioSide>h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .portfolioSide>h1 {
    font-size: 28px;
    margin-bottom: 5px;
  }

  .portfolioSide>p {
    font-size: 15px;
  }

  .skills {
    text-align: center;
    height: 80vh;
  }
  .skillsTitle {
    font-size: 35px;
    margin-left: 0px;
    margin-top: 15px;
  }

  .skillLogo {
    height: 40px;
    margin: 0 5px;
  }

  .skillTag {
    font-size: 9px;
  }

  .skillsRow {
    width: 90vw;
    margin-top: 10px;
    height: 18vh;
  }

  .contact {
    font-size: 10px;
    
  }

  .scrollBlue1 {
    width: 25vw;
  }

  .contactMid {
    width: 75vw;
    height: 45vh;
  }

  .portfolioSubtitle1 {
    font-size: 17px;
    text-align: center;
  }

  .contactTitle {
    text-align: center;
    font-size: 35px;
  }

  .contactBottom {
    align-content: center;
  }

  .input1 {
    width: 30vw;
    margin-top: 12vh;
  }

  .input2 {
    height: 10vh;
    width: 60vw;
  }

  .icon {
    height: 25px;
  }

  .footBottom {
    font-size: 15px;
  }
}

@media (max-width: 450px) {
    .portfolioSubtitle1 {
    font-size: 15px;
    text-align: center;
  }

  .portfolioSide>p {
    font-size: 14px;
  }

  .portfolioBack {
    height: 200vh;
  }

  .portfolioSide {
    height: 90vh;
    margin-top: 0;
  }
  .portfolioSide1 {
    height: 10vh;
  }

  .contact {
    height: 125vh;
  }

  .about {
    font-size: 16px;
  }

  .portfolioTitle1 {
    margin-top: 8px;
  }

  .footer {
    height: 30vh;
  }

}

@keyframes float {
  0% {
    box-shadow: rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow:  rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
}

</style>
