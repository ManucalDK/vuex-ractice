const store = new Vuex.Store({
    state:{
        numero : 10,
        pokemon : [],
    },
    mutations:{
        aumentar(state){
            state.numero++;
        },
        disminuir(state, n){
            state.numero-=n;
        },
        llenarPokemon(state, pokemonAction){
            state.pokemon = pokemonAction;
        }
    },
    actions:{
        obtenerPokemon: async function({commit}){
            const data = await fetch('https://uinames.com/api/?amount=20');
            const cursos = await data.json();
            commit('llenarPokemon', cursos);
        }
    }
})