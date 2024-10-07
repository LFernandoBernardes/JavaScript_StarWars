

const LIST =[
    {
        id: 1,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 2,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 6,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 7,
        nome: 'c3po',
        avatar: 'images/c3po.png'
    },
    {
        id: 8,
        nome: 'r2d2',
        avatar: 'images/r2d2.png'
    },

]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        username: 'Fernando',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName){
            alert(`${userName} ✨`)
        },
        remove(id){
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result 
        },

        search(){

            if (this.searchName === '') {
              return alert('O campo de busca é obrigatório!')
            } 

            const list = this.characters = LIST

            const result = list.filter(item =>{
                return item.nome === this.searchName
            })

            if(result.length <= 0){
                alert('Nenhum personagem encontrado.')
            } else{
                this.characters = result
            }

            
        }
    }
})
