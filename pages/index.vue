<template>
  <div>
    <div v-if="posts">
      <div v-for="post in posts" :key="post.id">
        <PostListItem :post="post"/>
      </div>
        <NuxtLink :to="{query:{after: pageInfo.endCursor}}">
          Next Page
        </NuxtLink>
    </div>
  </div>
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

  const variables = { limit: 10 }
  let posts = ref([])

  let init = async () => {
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

  let pageInfo = computed(() => { 
    return {
      endCursor: '',
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: '',
    }
  })
  
  useSeoMeta({
    title: 'Gamercafe - Noticias, Reviews y Podcasts',
    description: 'Gamercafe - Noticias, Reviews y Podcasts',
  })
</script>