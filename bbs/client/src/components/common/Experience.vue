<template>
        <div>
            <h4 class="mb-2">个人履历</h4>
            <table class="table">
                <thead>
                    <tr class="row">
                      <th class="col-3">公司</th>
                      <th class="col-3">标签</th>
                      <th class="col-3">年份</th>
                      <!-- <th></th> -->
                      <th class="col-3"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="exp in experience" :key="exp._id" class="row">
                        <td class="col-3">{{exp.company}}</td>
                        <td class="col-3">{{exp.title}}</td>
                        <td class="col-3">
                        {{exp.from}} ~ {{exp.to ? exp.to : '至今'}}
                        </td>
                        <!-- <td>
                            <button class="btn btn-info" @click="editClick(exp._id)">
                               编辑
                            </button>
                        </td> -->
                        <td class="col-3">
                        <button class="btn btn-danger" @click="deleteClick(exp._id)">
                            删除
                        </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </template>
    
    <script>
    export default {
      data() {
        return {};
      },
      props: {
        experience: Array
      },
      methods: {
        deleteClick(id) {
          //   this.$axios
          //     .delete(`/api/profile/experience/${id}`)
          //     .then(res => {
          //       console.log(res.data);
          //       //   this.profile = res.data;
          //     })
          //     .catch(error => {});
          this.$emit("deleteExperience", id);
        }
      }
    };
    </script>
    