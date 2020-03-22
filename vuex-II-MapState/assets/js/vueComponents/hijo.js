Vue.component("hijo", {
    /*html*/
    template: `
    <div>
        <button 
            class="btn btn-success" 
            @click="aumentar">+</button>
        <button class="btn btn-danger"
            @click="disminuir(2)">-</button>
        <button class="btn btn-info"
            @click="obtenerPokemon">obtener Pokemon</button>
        
            <h1>{{numero}}</h1>
        <ul v-for="item of pokemon">
            <li>{{ item.name }}</li>
        </ul>
    </div>
    `,
    computed: {
        ...Vuex.mapState(["numero", "pokemon"])
    },
    methods: {
        ...Vuex.mapMutations(["aumentar", "disminuir"]),
        ...Vuex.mapActions(["obtenerPokemon"])
    }
});
