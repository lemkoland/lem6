<template>
  <Layout>
    <div class="page-glass">


    <h1 v-html="$page.wordPressPage.title"/>
    <img
      v-if="$page.wordPressPage.featuredMedia"
      :src="$page.wordPressPage.featuredMedia.sourceUrl"
      :width="$page.wordPressPage.featuredMedia.mediaDetails.width"
      :alt="$page.wordPressPage.featuredMedia.altText"
    />
    <div v-html="$page.wordPressPage.content"/>
    </div>
  </Layout>
</template>

<page-query>
  query WordPressPage ($id: ID!) {
    wordPressPage(id: $id) {
      title
      path
      id
      content
      featuredMedia {
        sourceUrl
        altText
        mediaDetails {
          width
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
export default {
  metaInfo () {
    return {
      title: this.$page.wordPressPage.title
    }
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
