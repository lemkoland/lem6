<template>

  <div class="post"  @mouseenter="kolor" >

    <g-link :to="post.path">
      <h2 v-html="post.title" />
      <!-- <h3>{{tekst}}</h3> -->
      <ul class="tagi">
        <li v-for="tag in post.tags" :key="tag.id" >
        <g-link :to="tag.path">{{ tag.title }}</g-link>
        </li>
      </ul>
    <img
      v-if="post.featuredMedia"
      :src="post.featuredMedia.sourceUrl"
      :width="post.featuredMedia.mediaDetails.width"
      :alt="post.featuredMedia.altText"
    />
    </g-link>


    <div  v-if="excerpt" v-html="post.excerpt" />
    <!-- <div v-if="content" v-html="post.content" /> -->


  </div>

</template>

<script>

import { TimelineLite, TweenMax, gsap } from 'gsap';

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      content: false,
      excerpt: true,
      tekst: 'BAJLANDO'
    }
  },
  methods: {
    poka() {
      // gsap.to('.post', { duration: 1, width: '40vw' })

    },
    kolor() {
      var color = ['#5d237a', '#d17fb4', '#505ce5', '#62e564', '#6121EB', '#8B00A1', '#834D9B',
      '#D04ED6', '#1CD8D2', '#93EDC7', '#EBB752', '#E16BEB', '#B5CCFF', '#1A3091', '#7594C9',
    '#784C39', '#B07156', '#AE605F', '#AB4E68', '#7F4357', '#533745', '#A8948A', '#3B302B',
  '#9D9171', '#554B30', '#9E8234', '#998C69', '#4E4838', '#845440', '#845440', '#DB4F4F',
  '#4B1A1A', '#473527', '#552600','#A87E5D' ];


      var c1 = Math.floor(Math.random() * color.length);
      var cca = color[c1];
      this.tekst = cca;
      gsap.to('body', .7, { backgroundColor: cca});
      var r1 = Math.floor(Math.random() * 360);
      var rot = 'hue-rotate(' + r1 + 'deg)'
      gsap.to('.chow', .7, { filter: rot});



    }
  }
}
</script>
<style >
  .post {
    max-width: 18em;
    height: 33em;
    overflow: hidden;
    margin: 8vh 1vh;
    transition: 1.7;




    /* From https://css.glass  */
    background: rgba(255, 255, 255, .03);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    border: 1px solid rgba(255, 255, 255, 0.32);
  }
  .post:hover {
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .8);
    background: rgba(0, 0, 0, .41);
  }

  .post:hover  img {
    clip-path: circle(150% at 100% 100%);
  }
  .post:hover .tagi li a {
    background-color: #fff;
    color: #000;
    transition: .3s;
  }
  .post:hover > .post p {
    font-size: 1.1em;
  }
  .post img {
    transition: clip-path .3s ease-in;
    clip-path: circle(75% at 100% 100%);
    height: 17em;
    object-fit: cover;
    width: 100%;
    z-index: -1;
    position: sticky;
  }

  .post h2 {
    padding: 0 0 0 25px;
    font-size: 1.6rem;
    min-height: 4rem;
  }
  .post p {
    padding: 0 0 0 25px;
    font-size: 0.8em
  }
  .tagi {
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin: 6em 0 -9em 1em;
    padding: 0;
    width: auto;
    min-height: 4rem;

  }
  .tagi li {
    list-style: none;
    font-size: 0.8em;
      z-index: 5;
  }
  .post a  {
    text-decoration: none;
  }


</style>
