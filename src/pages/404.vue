
  <template>
    <Layout>
      <h1>Problemy 404</h1>
      <h2>Nie znaleziono czego szukasz</h2>
      <h2>Wybierz coś innego</h2>
      <ul class="tag-list">
        <li v-for="edge in $page.allWordPressPostTag.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">
            <p>{{edge.node.title}}</p>
          </g-link>
        </li>
      </ul>





    </Layout>
  </template>

  <page-query>
    {
      allWordPressPostTag {
        edges {
          node {
            title
            id
            path
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
    }
  </page-query>

  <script>
  export default {

  }
  </script>
