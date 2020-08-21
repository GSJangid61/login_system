<template>
  <q-page class="flex flex-center">
     <ul>
     	<li v-for="pages in page">{{pages}}</li>
     </ul>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
  	return {
  		page:['one','two','three','four','five']
  	}
  	

  }
}
</script>
