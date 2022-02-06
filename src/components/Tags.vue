
  <template>
    <Layout>
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
    }
  </page-query>

  <script>
  export default {

  }
  </script>
