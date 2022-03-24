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

    <div class="page-glass">
    <h1 v-html="$page.wordPressPost.title"/>
    <div v-html="$page.wordPressPost.content"/>
    <!-- <template v-if="$page.wordPressPost.categories.length">
      <hr>
      <h1 class="tyt">Teraz wybierz coś innego:</h1>
      <ul class="tag-list">
        <li v-for="edge in $page.allWordPressPostTag.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">
            <p>{{edge.node.title}}</p>
          </g-link>
        </li>
      </ul>
    </template> -->

    <!-- <template v-if="$page.wordPressPost.tags.length">
      <h4>Zobacz podobnie oznaczone:</h4>
      <ul class="list tags">
        <li v-for="tag in $page.wordPressPost.tags" :key="tag.id" >
          <g-link :to="tag.path">{{ tag.title }}</g-link>
        </li>
      </ul>
    </template> -->
    </div>
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
    z-index: 6;
  }
  .inin {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
        z-index: 6;
  }
  .header, .post {
    clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
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
          transition: .3s ease-in-out;
          color: 202020;
     }
     .tag-list li:nth-child(2) a {
       color: #B07156;
     }
     .tag-list li:nth-child(2):hover {
          background-color: #B07156;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(3) a {
       color: #AE605F;
     }
     .tag-list li:nth-child(3):hover {
          background-color: #AE605F;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(4) a {
       color: #AB4E68;
     }
     .tag-list li:nth-child(4):hover {
          background-color: #AB4E68;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(5) a {
       color: #7F4357;
     }
     .tag-list li:nth-child(5):hover {
          background-color: #7F4357;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(6) a {
       color: #533745;
     }
     .tag-list li:nth-child(6):hover {
          background-color: #533745;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(7) a {
       color: #A8948A;
     }
     .tag-list li:nth-child(7):hover {
          background-color: #A8948A;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(8) a {
       color: #3B302B;
     }
     .tag-list li:nth-child(8):hover {
          background-color: #3B302B;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(9) a {
       color: #9D9171;
     }
     .tag-list li:nth-child(9):hover {
          background-color: #9D9171;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(10) a {
       color: #554B30;
     }
     .tag-list li:nth-child(10):hover {
          background-color: #554B30;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(11) a {
       color: #9E8234;
     }
     .tag-list li:nth-child(11):hover {
          background-color: #9E8234;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(12) a {
       color: #998C69;
     }
     .tag-list li:nth-child(12):hover {
          background-color: #998C69;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(13) a {
       color: #4E4838;
     }
     .tag-list li:nth-child(13):hover {
          background-color: #4E4838;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(14) a {
       color: #845440;
     }
     .tag-list li:nth-child(14):hover {
          background-color: #845440;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(15) a {
       color: #845440;
     }
     .tag-list li:nth-child(15):hover {
          background-color: #845440;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(16) a {
       color: #DB4F4F;
     }
     .tag-list li:nth-child(16):hover {
          background-color: #DB4F4F;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(17) a {
       color: #4B1A1A;
     }
     .tag-list li:nth-child(17):hover {
          background-color: #4B1A1A;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(18) a {
       color: #473527;
     }
     .tag-list li:nth-child(18):hover {
          background-color: #473527;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(19) a {
       color: #552600;
     }
     .tag-list li:nth-child(19):hover {
          background-color: #552600;
          transition: .3s ease-in-out;
     }
     .tag-list li:nth-child(20) a {
       color: #A87E5D;
     }
     .tag-list li:nth-child(20):hover {
          background-color: #A87E5D;
          transition: .3s ease-in-out;
     }
     h1 {
       margin: 10vh auto;
     }
     .page-glass {

     /* From https://css.glass  */
     background: rgba(255, 255, 255, .03);
     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
     backdrop-filter: blur(4.5px);
     -webkit-backdrop-filter: blur(4.5px);
     border: 1px solid rgba(255, 255, 255, 0.32);
     max-width: 55rem;
   }

</style>
