const app = Vue.createApp({
    data() {
        return {
            message: 'Salut les gens',
            link: 'http://grafikart.fr',
            success: true,
            persons: ['Jonathan', 'Marion', 'Marine', 'Clément']
        }
    },
    methods: {
        close: function() {
            this.success = false
        }
    }
/*     data: {
        message: 'Salut les gens',
        link: 'http://grafikart.fr'
    } */
})