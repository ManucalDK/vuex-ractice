Vue.component('hijo', {
    template: /*html*/
    `
    <div>
        <button 
            class="btn btn-success" 
            @click="aumentar">+</button>
        <button class="btn btn-danger"
            @click="disminuir(2)">-</button>
        <h1>{{numero}}</h1>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero'])
    },
    methods: {
        ...Vuex.mapMutations(['aumentar', 'disminuir']),
    },
})