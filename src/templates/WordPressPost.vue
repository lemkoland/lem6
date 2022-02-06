<template>
  <Layout>
    <div class="in">
      <div class="inin">
        <img
          v-if="$page.wordPressPost.featuredMedia"
          :src="$page.wordPressPost.featuredMedia.sourceUrl"
          :width="$page.wordPressPost.featuredMedia.mediaDetails.width"
          :alt="$page.wordPressPost.featuredMedia.altText"
        />
      </div>
    </div>

    <h1 v-html="$page.wordPressPost.title"/>
    <div v-html="$page.wordPressPost.content"/>
    <template v-if="$page.wordPressPost.categories.length">
      <hr>
      <h4>Zobacz inne ztej kategorii</h4>
      <ul class="list categories">
        <li v-for="category in $page.wordPressPost.categories" :key="category.id" >
          <g-link :to="category.path">{{ category.title }}</g-link>
        </li>
      </ul>
    </template>
    <template v-if="$page.wordPressPost.tags.length">
      <h4>Zobacz podobnie oznaczone:</h4>
      <ul class="list tags">
        <li v-for="tag in $page.wordPressPost.tags" :key="tag.id" >
          <g-link :to="tag.path">{{ tag.title }}</g-link>
        </li>
      </ul>
    </template>
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    title
    content
    featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        width
      }
    }
    categories {
      id
      title
      path
    }
    tags {
      id
      title
      path
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
  metaInfo () {
    return {
      title: this.$page.wordPressPost.title
    }
  },
  mounted() {
    const tl = new TimelineLite();
    tl.from('.inin', 2, {delay: .6, clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'elastic' })
    .to('.inin', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'elastic'})
    .to('.in', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'easeOutQuint'}, '-=.5')
    .from('.header', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'easeOutQuint'});

  }
}
</script>

<style>

  ul.list {
    list-style: none;
    padding: 0;
  }
  ul.list li {
    display: inline-block;
    margin-right: 0.25em;
  }
  ul.list.tags li a {
    padding: 0.25em 0.5em;
    background-color: lightgray;
  }
  ul.list.categories li:after {
    content: ',';
    display: inline-block;
  }
  ul.list li:last-child:after {
    content: '';
  }
  .post-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    flex: 1 1 1;
  }
  .in {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0; left: 0;
    background-color: #202020;
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
  }
  .inin {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
  }
  .header, .post {
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
  }
</style>
