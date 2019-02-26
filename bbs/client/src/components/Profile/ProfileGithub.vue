<template>
    <div>
        <hr />
        <h3 class="mb-4 text-center">Github仓库信息</h3>
        <div class="text-center lead text-info" v-if="username">
            属于
            <span class="m-2 text-success">{{username}}</span>
            的仓库
        </div>
        <div v-for="repo in repos" :key="repo.id" class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <h4>
                        <a :href="repo.html_url" class="text-info" target="_blank">
                            {{repo.name}}
                        </a>
                    </h4>
                    <p>{{repo.description}}</p>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-info mr-1">
                        Stars: {{repo.stargazers_count}}
                    </span>
                    <span class="badge badge-secondary mr-1">
                        Watchers: {{repo.watchers_count}}
                    </span>
                    <span class="badge badge-success">
                        Forks: {{repo.forks_count}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "profileGithub",
        data() {
            return {
                demo: {
                    clientId: "d0800b2e1e4edf23758c",
                    clientSecret: "c2171f07276237bf166715faacc686f4b5e7ba73",
                    count: 2,
                    sort: "created: desc",
                },
                repos: []
            };
        },
        props: {
            username: String
        },
        created() {
            // 请求github地址
            fetch(
                `https://api.github.com/users/${this.username}/repos?per_page=${
                this.demo.count
                }&sort=${this.demo.sort}&client_id=${this.demo.clientId}&client_secret=${
                this.demo.clientSecret
                }`
            )
                // fetch需要json解析
                .then(res => res.json())
                .then(data => {
                    this.repos = data;
                    console.log(this.username)
                })
                .catch(err => console.log(err));
        }
    };
</script>