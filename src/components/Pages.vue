
  <template>
    <Layout>
      <h1>strony</h1>
      <ul class="pages-list">
        <li v-for="edge in $page.allWordPressPage.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">
            <p>{{edge.node.title}}</p>
          </g-link>
        </li>
      </ul>





    </Layout>
  </template>

  <page-query>
    {
     allWordPressPage {
       edges {
         node {
           id
           path
           title
         }
       }
     }
   }
  </page-query>

  <script>
  export default {

  }
  </script>
