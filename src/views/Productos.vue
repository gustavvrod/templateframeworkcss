<template>
  <div>
      <navbar/>
      <h1>Aqui estaran mis productos</h1>
      <v-container>
          <h2 class="mt-12 mb-4">Plantas de interior</h2>
          <v-row>
              <v-col lg="4" xl="4" md="4" cols="12" v-for="producto in productos.plantasInterior" :key="producto.id">
                  <Products :producto="producto"/>
              </v-col>
          </v-row>
            <h2 class="mt-12 mb-4">Plantas de exterior</h2>
          <v-row>
              <v-col lg="4" xl="4" md="4" cols="12" v-for="producto in productos.plantasExterior" :key="producto.id">
                  <Products :producto="producto"/>
              </v-col>
          </v-row>
            <h2 class="mt-12 mb-4">Arboles frutales</h2>
          <v-row>
              <v-col lg="4" xl="4" md="4" cols="12" v-for="producto in productos.arboles" :key="producto.id">
                  <Products :producto="producto"/>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Products from '../components/Products.vue'
import {mapState} from 'vuex'
export default {
    components: {
        Navbar,
        Products,
    },
    computed:{
        ...mapState(['productos'])
    }
}
</script>

<style>

</style>