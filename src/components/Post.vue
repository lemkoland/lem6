<template>

  <div class="post" >
    <g-link :to="post.path">
      <h2 v-html="post.title" />
    <img
      v-if="post.featuredMedia"
      :src="post.featuredMedia.sourceUrl"
      :width="post.featuredMedia.mediaDetails.width"
      :alt="post.featuredMedia.altText"
    />
    </g-link>

    <ul class="tagi">
      <li v-for="tag in post.tags" :key="tag.id" >
      <g-link :to="tag.path">{{ tag.title }}</g-link>
      </li>
    </ul>
    <div  v-if="excerpt" v-html="post.excerpt" />
    <div v-if="content" v-html="post.content" />


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
      excerpt: true
    }
  },
  methods: {
    poka() {
      // gsap.to('.post', { duration: 1, width: '40vw' })

    }
  }
}
</script>
<style >
  .post {
    max-width: 40vh;
    min-width: 40vh;
    /* border: 3px solid #2b2b2b; */
    /* border-radius: 15px; */
    overflow: hidden;
    margin: 8vh 5vh;
  }
  /* .post:hover {
    background-color: #f7aa4f;
    transition: .9s;
  } */
  .post:hover  img {
    transition: .7s;
    transform: scale(1.8);
  }
  .post:hover .tagi li a {
    background-color: #fff;
    color: #000;
    transition: .7s;
  }
  .post:hover > .post p {
    font-size: 1.1em;
  }
  .post img {
    max-height: 140px;
    object-fit: cover;
    width: 100%;
    z-index: -1;
    position: sticky;
  }

  .post h2 {
    padding: 0 0 0 25px;
    font-size: 1em
  }
  .post p {
    padding: 0 0 0 25px;
    font-size: 0.7em
  }
  .tagi {
    display: flex;
    gap: 1vw;

  }
  .tagi li {
    list-style: none;
  }
  .post a  {
    text-decoration: none;
  }

</style>
