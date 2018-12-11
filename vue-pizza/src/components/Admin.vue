<template>
    <div id="admin">
        <div class="row">


            <!-- add -->
            <div class="col-md-8 col-sm-12">
                <!-- <router-view name="newPizza"></router-view> -->
                <newPizza></newPizza>
            </div>


            <!-- delete -->
            <div class="col-md-4 col-sm-12">
                <h2 class="text-muted my-5">菜单</h2>
                <table class="table">
                    <thead class="table table-default">
                        <tr>
                            <th>品种</th>
                            <th>删除</th>
                        </tr>
                    </thead>
                    <tbody class="" v-for="menuItem in menu">
                        <tr>
                            <td>{{menuItem.name}}</td>
                            <td>
                                <button class="btn btn-outline-danger btn-sm" @click="deleteMenu(menuItem)">&times;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- {{menu}} -->
    </div>
</template>

<script>
    import {mapGetters} from 'Vuex'
    import newPizza from './NewPizza'
    export default {
        // data() {
        //     return {
        //         name: 'henry'
        //     }
        // },
        // beforeRouteEnter: (to, from, next) => {
        //     // alert('name : ' + this.name)
        //     next(vm=>{
        //         alert(vm.name)
        //     })
        // },
        // // beforeRouteUpdata: (to, from, next) => {
        // //     alert('name : ' + this.name)
        // //     next()
        // // },
        // beforeRouteLeave: (to, from, next) => {
        //     // this.name = 'na'//取不到this
        //     if(confirm('确定离开吗,' + this.name) == true){
        //         next()
        //     }else{
        //         next(false)
        //     }
        // },
        data() {
            return {
                // menu: []
            }
        },
        methods: {
            // getId(){
            //     let menuArray = []
            //     for(key in this.menu){
            //         res[key].id=key
            //         menuArray.push(res[key])
            //     }
            //     this.menu = menuArray
            // },
            deleteMenu(menuItem) {
                fetch('https://wd5850362164ghimed.wilddogio.com/menu/' + menuItem.id + '.json', {
                    method: 'DELETE',
                    headers: {
                        "Content-type": 'application/json'
                    },
                })
                    .then(res => res.json())
                    // .then(res => this.$router.push({ name: 'menuLink' }))
                    .then(res => this.$store.commit('removeMenu',menuItem))
                    // .then(res => this.updataMenu())
            },
            //


            //*****************************************
            // updataMenu() {
            //     fetch('https://wd8035063481kxzide.wilddogio.com/menu.json')
            //         .then(res => res.json())
            //         .then(res => {
            //             let menuArray = []
            //             for (let key in res) {
            //                 res[key].id = key
            //                 menuArray.push(res[key])

            //             }
            //             this.menu = menuArray
            //             // console.log(this.menu)
            //         })
            // }
            //****************************************************s
        },
        computed: {
            ...mapGetters({
                menu:'getMenu'
            }),
            // menu: {
            //     get() {
            //         return this.$store.state.Menu
            //     },
            //     set() {

            //     }
            // },
            
        },
        components: {
            newPizza
        },
        created() {
            fetch('https://wd5850362164ghimed.wilddogio.com/menu.json', {
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    let menuArray = []
                    for (let key in res) {
                        res[key].id = key
                        menuArray.push(res[key])

                    }
                    // this.menu = menuArray
                    this.$store.commit('setMenu',menuArray)
                    // console.log(this.menu)
                })



        }
    }

</script>