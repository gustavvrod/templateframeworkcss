<template>
  <div>
        <v-card class="mx-auto" max-width="100%">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="producto.img"
            >
              <v-card-title> {{producto.name}} </v-card-title>
            </v-img>
            <v-card-text class="text--primary">
              <div> {{producto.descripcion}} </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text> Ver Detalle </v-btn>
            </v-card-actions>
        </v-card>
  </div>
</template>

<script>
export default {
    props:{
        producto: Object,
    }
}
</script>

<style>

</style>