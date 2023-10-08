<template>
  <section class="posts-list">
    <PostListItem v-for="post in posts" :key="post.id" :post="post"/>
    <NuxtLink v-if="pagination" :to="{ query: { after: pageInfo.endCursor }}">
      Next Page
    </NuxtLink>
  </section>
</template>

<script setup>
  const query = gql`
    query Posts($limit: Int, $after: String) {
      posts(first: $limit, after: $after, where: {status: PUBLISH}) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        edges {
          cursor
          node {
            id
            title
            slug
            excerpt
            author {
              node {
                name
                uri
              }
            }
            date
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            tags {
              nodes {
                name
                uri
              }
            }
          }
        }
      }
    }
  `  

  let variables = { limit: 1 }
  let posts = ref([])

  const pageInfo = computed(() => { 
    return {
      endCursor: '',
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: '',
    }
  })

  const setPostLimit = () => {
    console.log(props.postType)
    switch(props.postType) {
      case 'header':
        return variables.limit = 6
      case 'featured':
        return variables.limit = 6
      default:
        return variables.limit = 10
    }
    console.log(variables)
  }
  
  const props = defineProps({
    postType: {
      type: String,
      default: 'all',
    },
    pagination: {
      type: Boolean,
      default: false,
    }
  })

  let init = async () => {
    setPostLimit()
    const { data } = await useAsyncQuery(query, variables)
    posts.value = data?.value?.posts?.edges?.map((post) => {
      return {
        id: post?.node?.id,
        title: post?.node?.title,
        slug: post?.node?.slug,
        excerpt: post?.node?.excerpt,
        author: post?.node?.author?.node,
        date: post?.node?.date,
        featuredImage: post?.node?.featuredImage?.node,
        tags: post?.node?.tags?.nodes,
      }
    })
  }
  onMounted(init)
</script>