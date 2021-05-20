var app = new Vue(
    {
    el: '#root',

    data: {
      cd_cards: [],

    },

    methods: {

        getCd: function(){
            axios
            .get('http://localhost:8888/php-ajax-dischi/server.php')
            .then ( (response) =>{

                this.cd_cards = response.data;
            });
            
        }
    },

    mounted(){
        this.getCd();
    }

})