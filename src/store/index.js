import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productos: {
            plantasInterior: [
                { name: 'Filodendro', id: 1, descripcion: 'Esta es la descripcion del filodendro', img: 'https://images.unsplash.com/photo-1613764225343-8dbd91f26098?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmlsb2RlbmRyb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
                { name: 'Palo de agua', id: 2, descripcion: 'Esta es la descripcion del Palo de agua', img: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
                { name: 'Petunias', id: 3, descripcion: 'Esta es la descripcion del petunias', img: 'https://images.unsplash.com/photo-1558502187-68acb21ae9b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGV0dW5pYXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            ],
            plantasExterior: [
                { name: 'Cerezo', id: 4, descripcion: 'Esta es la descripcion del cerezo', img: 'https://images.unsplash.com/photo-1619894295430-a649d2ebabcf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2VyZXpvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
                { name: 'Aloe vera', id: 5, descripcion: 'Esta es la descripcion del Aloe vera', img: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWxvZSUyMHZlcmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
                { name: 'Rosas', id: 6, descripcion: 'Esta es la descripcion del Rosas', img: 'https://images.unsplash.com/photo-1530906622963-8a60586a49c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            ],
            arboles: [
                { name: 'Naranjo', id: 7, descripcion: 'Esta es la descripcion del Naranjo', img: 'https://images.unsplash.com/photo-1613747495731-3add0988073a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmFyYW5qb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
                { name: 'Cerezo', id: 8, descripcion: 'Esta es la descripcion del Cerezo', img: 'https://images.unsplash.com/photo-1619894295430-a649d2ebabcf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2VyZXpvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
                { name: 'Durazno', id: 9, descripcion: 'Esta es la descripcion del Durazno', img: 'https://images.unsplash.com/photo-1552417569-262c0e72f374?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVyYXpub3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            ],
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})