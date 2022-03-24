<template>
  <div class="layout">
    <div class="wzorki"></div>
    <g-image class="menu-icon" v-if="menu" alt="menu" src="~/assets/menu.png"  @click="pokaMenu" />

    <header class="header">
      <div class="logosy">
        <g-link to="/posty/"><g-image class="chow" alt="ptak chowanec naskicowany z konturem" src="~/assets/chowanec_z-konturem.svg" width="180"/>
<g-image class="napis-lemkoland" alt="napis lemkoland" src="~/assets/lemkoland-napis.svg" width="180"/></g-link>
</div>


    </header>
    <nav class="nav" >
      <g-image class="cancel-icon" alt="menu" src="~/assets/cancel.png"  @click="niePokaMenu" />

      <div class="logosy">
        <g-link to="/posty/"><g-image class="chow" alt="ptak chowanec naskicowany z konturem"
          src="~/assets/chowanec_z-konturem.svg" width="180"/>
</g-link>
</div>

<h2>Dowiedz się więcej:</h2>
      <ul class="pages-list">
        <li v-for="edge in $page.allWordPressPage.edges" :key="edge.node.id"  @click="niePokaMenu" >
          <g-link :to="edge.node.path">
            <p>{{edge.node.title}}</p>
          </g-link>
        </li>

      </ul>
      <h2>Lub wybierz jedną z kategorii</h2>
      <ul class="cat-list">
        <li v-for="edge in $page.allWordPressCategory.edges" :key="edge.node.id"  @click="niePokaMenu" >
          <g-link :to="edge.node.path">
            <p>{{edge.node.title}}</p>
          </g-link>
        </li>
      </ul>
    </nav>
    <slot/>
    <hr>
<footer class="footer">
  <div class="">
    <p>Лемколянд - лемківска сторінка для діти</p>
    <p>© 2014 – 2022 Fundacja Stara Droga. Wszelkie prawa zastrzeżone.</p>
  </div>
<div class="">
  <p>Zrealizowano dzięki dotacji Ministra Spraw Wewnętrznych i Administracji</p>
  <g-image alt="napis lemkoland" src="~/assets/mswia-logo-1.jpg" width="180"/></g-link>
</div>

</footer>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  background-color: #202020;
  color: #f3f3f3;

}

a {
  color: #f3f3f3;
}
h1 {
  /* display: none; */
  text-align: center;
}
.pages-list {
  display: flex;

}
.pages-list li {
  list-style: none;
  margin: 0 1vw;
}
.tag-list {
  display: flex;

}
.tag-list li {
  list-style: none;
  margin: 0 1vw;
}
img {
  max-width: 100%;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1.0em 0.75em 2.0em;
}

.layout {
  max-width: 80vw;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
iframe {
  width: 100%!important;

}
.wp-block-embed, .wp-block-image {
  margin: 0;
  padding: 0!important;
  height: auto!important;
}
.footer {
  display: flex;
  flex-wrap: wrap;
  gap: 5vw;
}
.footer div {
  width: 35vw;
  margin: 0;
  padding: 0;
}
.pages-list {
  display: flex;
  flex-wrap: wrap;
}
.logosy {
  display: flex;
  flex-wrap: nowrap;
}
.wzorki {
  background-color: transparent;

  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0; left: 0;
  z-index: -6;
}
.cat-list li {
  list-style: none;
}

.nav {
  /* From https://css.glass  */
  background: rgba(255, 255, 255, .93);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.32);
  width: 98vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 22;
  padding: 1vw 1vh;
  clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8em;

}
.cat-list a, .pages-list a {
  color: #000;
}
.menu-icon {
  width: 70px!important;
  height: 70px!important;
  margin: 1rem;
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 23;
}
 .cancel-icon {
  width: 70px!important;
  height: 70px!important;
  margin: 1rem;
  position: fixed;
  right: 1rem;
  top: 1rem;
  transform: rotate(360deg);
  z-index: 44;
}
.nav h2 {
  color: #000!important;
}

 @media screen and (orientation:portrait) {
   .napis-lemkoland {
     display: none;
   }
  }


</style>
<page-query>
  {
   allWordPressPage {
     edges {
       node {
         id
         path
         title
       }
     }
   }
   allWordPressPostTag {
     edges {
       node {
         title
         id
         path
       }
     }
   }
 }
</page-query>
<script>
import { TimelineLite, TweenMax, gsap } from 'gsap';

export default {
  data() {
    return {
      sciezkaWzorkow: 'czytaj',
      menu: true
    }
  },
  mounted() {
    var wl = Math.floor(Math.random() * 27);
    var wlNR = wl + 1;
    var wlx = "https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/wl" + wlNR + ".svg";
    this.sciezkaWzorkow = wlx;
    gsap.to('.wzorki', 0.7, { backgroundImage:'url(' + wlx + ')' });

  },
  methods: {
    pokaMenu() {
      gsap.to('.nav', 0.7, {clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'});
      this.menu = false;

    },
    niePokaMenu() {
      gsap.to('.nav', 0.7, {clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'});
      this.menu = true;
    }
  }
}

</script>
