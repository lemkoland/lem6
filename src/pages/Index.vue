<template>
  <Layout>
    <div class="in">
      <div class="inin">
        <g-image alt="ptak chowaniec naskicowany z konturem" src="~/assets/chowanec_z-konturem.svg" />
      </div>
    </div>

    <div class="oNas">

<p>Strona, na której się znaleźliście, została stworzona z myślą o naszych najmłodszych.
  Pomysł ten narodził się już dość dawno i rósł razem z naszymi dziećmi.
  To właśnie one pomogły nam najwięcej w stworzeniu LEMKOLANDU.
  Było przy tym dużo radochy i śmiechu,
  a my – rodzice – mogliśmy choć na chwilkę przenieść się do lat dzieciństwa.
  Choć wyglądało ono trochę inaczej, przecież nie było komputerów i internetu,
  ale pamiętamy, że najlepiej było uczyć się przy dobrej zabawie.
  LEMKOLAND to pierwsza łemkowska stronka dla dzieci,
  która interaktywnie jednocześnie uczy i bawi,
  na którą każdy może wejść i poznać kawałek swojej kultury,
  bez względu na to, czy wychowuje się na Łemkowszczyźnie,
  czy przyszło mu żyć daleko od niej.
  LEMKOLAND to świat gier i zabaw, po którym oprowadzi was wesoły Chowaniec
  (a tutaj możecie poznać historię Chowańca).
  Razem z nim dzieci będą poznawać łemkowski język i kulturę.
  Od nas dowiecie się o dziecięcych akcjach, publikacjach i konkursach,
  które będziemy organizować. Zaglądajcie do nas,
  stronka będzie rozbudowywana i co jakiś czas będziemy zamieszczać coś nowego.
  Serdecznie Was zapraszamy!
      </p>
  <h2>Zobacz nasze ostatnie komunikaty:</h2>
    </div>

    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node"/>

      </li>
    </ul>

    <h1 class="tyt">Wybierz coś dla siebie:</h1>
    <ul class="tag-list">
      <li v-for="edge in $page.allWordPressPostTag.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          <p>{{edge.node.title}}</p>
        </g-link>
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<page-query>

  query Home ($page: Int) {
    allWordPressPost (page: $page, perPage: 3)  {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          path
          excerpt
          tags {
            title
            path
            id
          }
          content
          featuredMedia {
            sourceUrl
            altText
            mediaDetails {
              width
            }
          }
        }
      }
    }

    allWordPressPage {
      edges {
        node {
          title
          path
        }
      }
    }
    allWordPressPostTag (sortBy: "name", order: ASC) {
      edges {
        node {
          title
          id
          path
        }
      }
    }
    allWordPressCategory (sortBy: "name", order: ASC) {
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
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import { TimelineLite, TweenMax, gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
gsap.registerPlugin(ScrollToPlugin );





export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Lemkiwska storinka dla dity'
  },
  mounted() {
    const tl = new TimelineLite();
        const posts = document.querySelectorAll(".post");
    tl.from('.inin', 2, {delay: .6, clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'elastic' })
    .to('.inin', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'elastic'})
    .to('.in', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'easeOutQuint'}, '-=.5')
    .from('.tyt', 1, { opacity: 0})
    .from('.header', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'easeOutQuint'})
    .to('.header', 1, { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', easing: 'easeOutQuint'})
    .to(posts, 1, {opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', easing: 'easeOutQuint', stagger: 0.4}, '-=.7');

    var color = ['#5d237a', '#d17fb4', '#505ce5', '#62e564', '#6121EB', '#8B00A1', '#834D9B',
    '#D04ED6', '#1CD8D2', '#93EDC7', '#EBB752', '#E16BEB', '#B5CCFF', '#1A3091', '#7594C9',
  '#784C39', '#B07156', '#AE605F', '#AB4E68', '#7F4357', '#533745', '#A8948A', '#3B302B',
'#9D9171', '#554B30', '#9E8234', '#998C69', '#4E4838', '#845440', '#845440', '#DB4F4F',
'#4B1A1A', '#473527', '#552600','#A87E5D' ];


    var c1 = Math.floor(Math.random() * color.length);
    var cca = color[c1];
    gsap.to('body', .7, { backgroundColor: cca});

  }
}
</script>
<style>
  .post-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    flex: 1 1 1;
  }
  .in {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0; left: 0;
    background-color: #202020;
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
    z-index: 122;
  }
  .inin {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
    z-index: 122;
  }

  .header, .post {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    z-index: 7;
  }

  .tag-list {
    max-width: 80vw;
    display: flex;
    flex-wrap: wrap;
    min-height: 10vw;
    margin-bottom: 20vw;
    padding: 10rem 10rem;

    /* From https://css.glass  */
    background: rgba(255, 255, 255, .03);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    border: 1px solid rgba(255, 255, 255, 0.32);
   }
   .tag-list li {
     padding: 1vw 3vh;
     gap: 0;
     margin:0;
   }
   .tag-list li a {
     text-decoration: none;
     padding: 0;
     margin: 0;
     width: 100%;
     height: 100%;

   }

   .tag-list li:nth-child(1) {

     background-color: #784C39;
   }
   .tag-list li:nth-child(1):hover {
        background-color: #784C39;
        transition: .3s;
        color: 202020;

   }
   .tag-list li:nth-child(2)  {

                   background-color: #B07156;
   }

   .tag-list li:nth-child(2):hover {
        background-color: #B07156;
        transition: .3s;

   }
   .tag-list li:nth-child(3) {
  background-color: #AE605F;
   }
   .tag-list li:nth-child(3):hover {
        background-color: #AE605F;
        transition: .3s;
   }
   .tag-list li:nth-child(4)  {

     background-color: #AB4E68;
   }
   .tag-list li:nth-child(4):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(5)  {

     background-color: #7F4357;
   }
   .tag-list li:nth-child(5):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(6) {

     background-color: #533745;
   }
   .tag-list li:nth-child(6):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(7)  {

     background-color: #A8948A;
   }
   .tag-list li:nth-child(7):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(8) {
     background-color: #3B302B;
   }
   .tag-list li:nth-child(8):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(9) {
     background-color: #9D9171;
   }
   .tag-list li:nth-child(9):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(10) {
     background-color: #554B30;
   }
   .tag-list li:nth-child(10):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(11)  {
     background-color: #9E8234;
   }
   .tag-list li:nth-child(11):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(12)  {
     background-color: #998C69;
   }
   .tag-list li:nth-child(12):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(13) {
     background-color: #4E4838;
   }
   .tag-list li:nth-child(13):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(14) {
     background-color: #845440;
   }
   .tag-list li:nth-child(14):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(15) {
     background-color: #845480;
   }
   .tag-list li:nth-child(15):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(16)  {
     background-color: #DB4F4F;
   }
   .tag-list li:nth-child(16):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(17)  {
     background-color: #4B1A1A;
   }
   .tag-list li:nth-child(17):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(18)  {
     background-color: #473527;
   }
   .tag-list li:nth-child(18):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(19)  {
     background-color: #552600;
   }
   .tag-list li:nth-child(19):hover {
        transition: .3s;
   }
   .tag-list li:nth-child(20)  {
     background-color: #A87E5D;
   }
   .tag-list li:nth-child(20):hover {
        transition: .3s;
   }
   h1 {
     margin: 10vh auto;
   }
   .oNas p, .oNas h2 {
     /* From https://css.glass  */
     background: rgba(255, 255, 255, .03);
     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
     backdrop-filter: blur(4.5px);
     -webkit-backdrop-filter: blur(4.5px);
     border: 1px solid rgba(255, 255, 255, 0.32);
     padding: 7rem;
     font-size: 2.4em;
     max-width: 55rem;
   }
   @media screen and (orientation:portrait) {
     .oNas p, .oNas h2 {
       font-size: 1.2em;
       padding: 1rem;
     }
    }

</style>
