<template>
  <Layout>
    <h1>{{ $page.wordPressPostTag.title }} </h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.wordPressPostTag.belongsTo.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.wordPressPostTag.belongsTo.pageInfo"/>
  </Layout>
</template>

<page-query>
query WordPressPostTag ($id: ID!, $page: Int) {
  wordPressPostTag(id: $id) {
    title
    belongsTo(page: $page, perPage: 10) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
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
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo () {
    return {
      title: this.$page.wordPressPostTag.title
    }
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
<style>
.post-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
  flex: 1 1 1;
}

.post-list li{
  margin:0;
  padding: 0;
  border:0;
}




</style>
