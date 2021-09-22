<template>
  <v-container>
        <v-app-bar
      app
      color="teal darken-1"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text><span class="mr-2">Inicio</span><v-icon>mdi-home</v-icon></v-btn>
      <v-btn to="/productos" text><span class="mr-2">Productos</span><v-icon>mdi-flower</v-icon></v-btn>
      <v-btn to="/contacto" text><span class="mr-2">Contacto</span><v-icon>mdi-wechat</v-icon></v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: 'Navbar',

    data: () => ({

    }),
  }
</script>
