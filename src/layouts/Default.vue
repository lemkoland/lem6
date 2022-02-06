<template>
  <div class="layout">
    <header class="header">
      <div class="logosy">
        <g-link to="/posty/"><g-image  alt="ptak chowanec naskicowany z konturem" src="~/assets/chowanec_z-konturem.svg" width="180"/>
<g-image alt="napis lemkoland" src="~/assets/lemkoland-napis.svg" width="180"/></g-link>
</div>
      <nav class="nav">
        <ul class="pages-list">

          <li v-for="edge in $page.allWordPressPage.edges" :key="edge.node.id">
            <g-link :to="edge.node.path">
              <p>{{edge.node.title}}</p>
            </g-link>
          </li>
        </ul>
      </nav>


    </header>
    <!-- <ul class="tag-list">
      <li v-for="edge in $page.allWordPressPostTag.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          <p>{{edge.node.title}}</p>
        </g-link>
      </li>
    </ul> -->
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
