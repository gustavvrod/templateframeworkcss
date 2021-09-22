<template>
  <div>
    <navbar/>
    <Banner/>
    <v-row justify="center" class="mt-12">
      <v-col cols="11">

        <h1>Nuestro productos</h1>
        <v-row>
              <v-col lg="2" xl="2" md="2" cols="12" v-for="producto in productos.plantasInterior" :key="producto.id">
                  <Products :producto="producto"/>
              </v-col>
              <v-col lg="2" xl="2" md="2" cols="12" v-for="producto in productos.plantesExterior" :key="producto.id">
                  <Products :producto="producto"/>
              </v-col>
        </v-row>
        <v-row>
              <v-col lg="2" xl="2" md="2" cols="12" v-for="producto in productos.arboles" :key="producto.id">
                  <Products :producto="producto"/>
              </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import Products from '../components/Products'
  import Banner from '../components/Banner'
  import {mapState} from 'vuex'

  export default {
    name: 'Home',
    components: {
      Navbar,
      Products,
      Banner,
    },
    computed:{
        ...mapState(['productos'])
    }
  }
</script>
