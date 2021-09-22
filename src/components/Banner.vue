<template>
  <v-carousel v-model="model">
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-img
        :color="color"
        height="100%"
        :src="banners.img"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data(){
      
        return{
            banners:[
                {img:"https://images.unsplash.com/photo-1558861122-40aa75d3a841?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: "Oportunidad Unica!"},
                {img:"https://images.unsplash.com/photo-1505694793359-db03fb05659f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dml2ZXJvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: "Arreglos Florales"},
                {img:"https://images.unsplash.com/photo-1599497125609-9efaef54bed6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJib2xlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", title: "Arboles para tu jardin"},
            ],
            model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
        }
    }
}
</script>

<style>

</style>