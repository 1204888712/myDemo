<template>
        <div>
            <h4 class="mb-2">教育经历</h4>
            <table class="table">
                <thead>
                    <tr class="row">
                      <th class="col-3">学校</th>
                      <th class="col-3">学历</th>
                      <th class="col-3">年份</th>
                      <!-- <th></th> -->
                      <th class="col-3"></th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="exp in education" :key="exp._id" class="row">
                        <td class="col-3">{{exp.school}}</td>
                        <td class="col-3">{{exp.degree}}</td>
                        <td class="col-3">
                        {{exp.from}} ~ {{exp.to ? exp.to : '至今'}}
                        </td>
                        <!-- <td>
                           <button class="btn btn-info" @click="editClick(exp._id)">编辑</button> 
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
        education: Array
      },
      methods: {
        deleteClick(id) {
          this.$emit("deleteEducation", id);
        }
      }
    };
    </script>
    