<template>
  <Layout>

    <h1 class="tyt">A oto nasze propozycje na dziś:</h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">



        <Post :post="node"/>




      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<page-query>

  query Home ($page: Int) {
    allWordPressPost (page: $page, perPage: 20) @paginate {
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
    const posts = document.querySelectorAll(".post")
    tl.from('.tyt', 1, { opacity: 0})
    .from('.header', 2, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'easeOutQuint'})
    .to(posts, 1, {opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', easing: 'easeOutQuint', stagger: 0.4}, '-=1.1');
  }
}
</script>
<style scoped>
  .post-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    flex: 1 1 1;
  }

  .header, .post {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
</style>
