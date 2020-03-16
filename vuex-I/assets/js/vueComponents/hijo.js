Vue.component('hijo', {
    template: /*html*/
    `
    <div>
        <button 
            class="btn btn-success" 
            @click="$store.commit('aumentar')">+</button>
    </div>
    `
})