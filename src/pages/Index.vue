<template>
  <Layout>
    <div class="in">
      <div class="inin">
        <g-image alt="ptak chowaniec naskicowany z konturem" src="~/assets/chowanec_z-konturem.svg" />
      </div>
    </div>
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
    tl.from('.inin', 2, {delay: .6, clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'elastic' })
    .to('.inin', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'elastic'})
    .to('.in', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'easeOutQuint'}, '-=.5')
    .from('.tyt', 1, { opacity: 0})
    .from('.header', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'easeOutQuint'})
    .to(posts, 1, {opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', easing: 'easeOutQuint', stagger: 0.4}, '-=.7');
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
  .in {
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
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
</style>
