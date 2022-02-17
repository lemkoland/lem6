<template>
  <Layout>
    <h1 class="tyt">Wybierz coś dla siebie:</h1>
    <ul class="tag-list">
      <li v-for="edge in $page.allWordPressPostTag.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          <p>{{edge.node.title}}</p>
        </g-link>
      </li>
    </ul>
    <!-- <h1 class="tyt">A oto nasze propozycje na dziś:</h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node"/>
      </li>
    </ul> -->
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<page-query>

  query Home ($page: Int) {
    allWordPressPost (page: $page, perPage: 50) @paginate {
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

  .tag-list {
    max-width: 80vw;
    display: flex;
    flex-wrap: wrap;
    min-height: 10vw;
    margin-bottom: 20vw;
   }
   .tag-list li {
     padding: 1vw 3vh;
     gap: 0;
     margin:0;
   }
   .tag-list li a {
     text-decoration: none;
   }
   .tag-list li:nth-child(1) a {
     color: #784C39;
   }
   .tag-list li:nth-child(1):hover {
        background-color: #784C39;
        transition: .3s;
        color: 202020;
   }
   .tag-list li:nth-child(2) a {
     color: #B07156;
   }
   .tag-list li:nth-child(2):hover {
        background-color: #B07156;
        transition: .3s;
   }
   .tag-list li:nth-child(3) a {
     color: #AE605F;
   }
   .tag-list li:nth-child(3):hover {
        background-color: #AE605F;
        transition: .3s;
   }
   .tag-list li:nth-child(4) a {
     color: #AB4E68;
   }
   .tag-list li:nth-child(4):hover {
        background-color: #AB4E68;
        transition: .3s;
   }
   .tag-list li:nth-child(5) a {
     color: #7F4357;
   }
   .tag-list li:nth-child(5):hover {
        background-color: #7F4357;
        transition: .3s;
   }
   .tag-list li:nth-child(6) a {
     color: #533745;
   }
   .tag-list li:nth-child(6):hover {
        background-color: #533745;
        transition: .3s;
   }
   .tag-list li:nth-child(7) a {
     color: #A8948A;
   }
   .tag-list li:nth-child(7):hover {
        background-color: #A8948A;
        transition: .3s;
   }
   .tag-list li:nth-child(8) a {
     color: #3B302B;
   }
   .tag-list li:nth-child(8):hover {
        background-color: #3B302B;
        transition: .3s;
   }
   .tag-list li:nth-child(9) a {
     color: #9D9171;
   }
   .tag-list li:nth-child(9):hover {
        background-color: #9D9171;
        transition: .3s;
   }
   .tag-list li:nth-child(10) a {
     color: #554B30;
   }
   .tag-list li:nth-child(10):hover {
        background-color: #554B30;
        transition: .3s;
   }
   .tag-list li:nth-child(11) a {
     color: #9E8234;
   }
   .tag-list li:nth-child(11):hover {
        background-color: #9E8234;
        transition: .3s;
   }
   .tag-list li:nth-child(12) a {
     color: #998C69;
   }
   .tag-list li:nth-child(12):hover {
        background-color: #998C69;
        transition: .3s;
   }
   .tag-list li:nth-child(13) a {
     color: #4E4838;
   }
   .tag-list li:nth-child(13):hover {
        background-color: #4E4838;
        transition: .3s;
   }
   .tag-list li:nth-child(14) a {
     color: #845440;
   }
   .tag-list li:nth-child(14):hover {
        background-color: #845440;
        transition: .3s;
   }
   .tag-list li:nth-child(15) a {
     color: #845440;
   }
   .tag-list li:nth-child(15):hover {
        background-color: #845440;
        transition: .3s;
   }
   .tag-list li:nth-child(16) a {
     color: #DB4F4F;
   }
   .tag-list li:nth-child(16):hover {
        background-color: #DB4F4F;
        transition: .3s;
   }
   .tag-list li:nth-child(17) a {
     color: #4B1A1A;
   }
   .tag-list li:nth-child(17):hover {
        background-color: #4B1A1A;
        transition: .3s;
   }
   .tag-list li:nth-child(18) a {
     color: #473527;
   }
   .tag-list li:nth-child(18):hover {
        background-color: #473527;
        transition: .3s;
   }
   .tag-list li:nth-child(19) a {
     color: #552600;
   }
   .tag-list li:nth-child(19):hover {
        background-color: #552600;
        transition: .3s;
   }
   .tag-list li:nth-child(20) a {
     color: #A87E5D;
   }
   .tag-list li:nth-child(20):hover {
        background-color: #A87E5D;
        transition: .3s;
   }
   h1 {
     margin: 10vh auto;
   }

</style>
