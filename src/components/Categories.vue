
  <template>
    <Layout>

      <ul class="categories-list">
        <li v-for="edge in $page.allWordPressCategory.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">
            <p>{{edge.node.title}}</p>
          </g-link>
        </li>
      </ul>





    </Layout>
  </template>

  <page-query>
    {
      allWordPressCategory {
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
