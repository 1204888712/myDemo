<template>
    <div id="appMenu">
        <div class="row">
            <div class="col-sm-12 col-md-8">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>尺寸</th>
                            <th>价格</th>
                            <th>加入</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in getMenuItems" :key="item.name">
                        <tr>
                            <th>{{item.name}}</th>
                        </tr>
                        <tr v-for="option in item.options">
                            <td>{{option.size}}</td>
                            <td>{{option.price}}</td>
                            <td>
                                <button class="btn btn-sm btn-outline-success" @click="add(item,option)">+</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- 购物车 -->
            <div class="col-md-4 col-sm-12">
                <div v-if="show">
                    <table class="table">
                        <thead class="thead-default">
                            <tr>
                                <th>数量</th>
                                <th>品种</th>
                                <th>价格</th>

                            </tr>
                        </thead>
                        <tbody v-for="item in baskets">
                            <tr>
                                <td>
                                    <button class="btn btn-sm btn-success" @click="decrease(item)">-</button>
                                    <span>{{item.num}}</span>
                                    <button class="btn btn-sm btn-success" @click="increase(item)">+</button>
                                </td>
                                <td>
                                    {{item.name.slice(0,2)}}-{{item.size}}寸
                                </td>
                                <td>
                                    {{item.price * item.num}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>总价：
                        <strong>{{sumPrize}}</strong> RMB</p>
                    <button class="btn btn-success btn-block" @click="removeAll">清空购物车</button>
                    <button class="btn btn-success btn-block">提交</button>
                </div>
                <div v-if="!show" class="text-center">{{basketText}}</div>
            </div>

        </div>
        <!-- test -->
        <!-- <div>{{baskets}}</div> -->
    </div>
</template>
<script>
   import { mapState, mapMutations,mapGetters} from 'vuex'
    export default {
        name: 'appMenu',
        data() {
            return {
                // show:true,
                baskets: [],
                basketText: '您的购物车为空',
                // getMenuItems: {
                //     1: {
                //         'name': '榴莲pizza',
                //         'description': '这是喜欢吃榴莲朋友的最佳选择',
                //         'options': [{
                //             'size': 9,
                //             'price': 38
                //         }, {
                //             'size': 12,
                //             'price': 48
                //         }]
                //     },
                //     2: {
                //         'name': '芝士pizza',
                //         'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
                //         'options': [{
                //             'size': 9,
                //             'price': 38
                //         }, {
                //             'size': 12,
                //             'price': 48
                //         }]
                //     },
                //     3: {
                //         'name': '夏威夷pizza',
                //         'description': '众多人的默认选择',
                //         'options': [{
                //             'size': 9,
                //             'price': 36
                //         }, {
                //             'size': 12,
                //             'price': 46
                //         }]
                //     }
                // }
            }
        },
        methods: {
            //清除重复添加
            add(item, option) {
                var Basketitem = {
                    name: item.name,
                    size: option.size,
                    price: option.price,
                    num: 1
                }
                if (this.baskets.length > 0) {
                    //filter的浅层拷贝
                    var result = this.baskets.filter(basket => {

                        return item.name == basket.name && option.size == basket.size
                    })

                    if (result != null && result.length > 0) {
                        result[0].num++
                    } else {
                        this.baskets.push(Basketitem)
                    }
                } else {
                    this.baskets.push(Basketitem)
                }
                // console.log(this.basket)
            },



            decrease(item) {
                if (item.num <= 1) {
                    this.removeFromBasket(item)
                } else {
                    item.num--
                }

            },
            increase(item) {
                item.num++
            },
            removeFromBasket(item) {
                this.baskets.splice(this.baskets.indexOf(item), 1)
            },
            removeAll() {
                this.baskets = this.baskets.splice()
            },
            getMenu() {
                //     this.axios.get('/menu.json').then(res=>{
                //     this.getMenuItems = res.data
                // })

                //将获取的数据存储到vuex中
                this.axios.get('/menu.json').then(res => {
                    this.$store.commit("setMenu",res.data)
                })
            }

        },
        computed: {
            // getMenuItems(){
            //     return this.$store.state.Menu
            // },
            // ...mapState({
            //     getMenuItems:'Menu'
            // }),
            ...mapGetters({
                getMenuItems:'getMenu'
            }),
            show() {
                if (this.baskets.length == 0) {
                    return false
                } else {
                    return true
                }
            },
            sumPrize() {
                var sum = 0;
                this.baskets.forEach(ele => {
                    return sum += ele.price * ele.num
                });
                return sum
            },
            sumNum() {

            }
        },
        created() {
            this.getMenu()
        }
    }
</script>