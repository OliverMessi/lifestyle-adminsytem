<template>
  <div class="container" style="width:100%;">
    <!--工具栏-->
    <div class="toolbar" style="float:left; padding:18px;">
      <el-form :inline="true" :model="filters" size="small">
        <el-form-item>
          <el-input v-model="filters.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="findPage(null)">查询</el-button>
        </el-form-item>
        <el-form-item>
          <bg-button label="新增" perms="sys:user:add" type="primary" @click="handleAdd" />
        </el-form-item>
      </el-form>
    </div>
    <!--表格内容栏-->
    <bg-table permsEdit="sys:user:edit" permsDelete="sys:user:delete"
              :data="pageResult" :columns="columns"
              @findPage="findPage" @handleEdit="handleEdit" @handleDelete="handleDelete">
    </bg-table>
    <!--新增编辑界面-->
    <el-dialog :title="operation?'新增':'编辑'" width="40%" :visible.sync="editDialogVisible" :close-on-click-modal="false">
      <el-form :model="dataForm" label-width="80px" :rules="dataFormRules" ref="dataForm">
        <el-form-item label="ID" prop="id">
          <el-input v-model="dataForm.id" :disabled="true" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="dataForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="dataForm.password" type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="机构" prop="deptName">
          <popup-tree-input
                  :data="deptData"
                  :props="deptTreeProps"
                  :prop="dataForm.deptName"
                  :nodeKey="''+dataForm.deptId"
                  :currentChangeHandle="deptTreeCurrentChangeHandle">
          </popup-tree-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="dataForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="dataForm.mobile" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    import PopupTreeInput from "components/popupTreeInput/PopupTreeInput"
    import BgTable from "components/core/BgTable"
    import BgButton from "components/core/BgButton"
    import {findPage,batchDelete,save} from "network/modules/user"
    import {findDeptTree} from "network/modules/dept"

  export default {
    name: "User",
      components:{
          BgTable,
          BgButton,
          PopupTreeInput
      },
      data() {
          return {
              filters: {
                  name: ''
              },
              columns: [
                  {prop:"id", label:"ID", minWidth:40, sortable:"false"},
                  {prop:"name", label:"用户名", minWidth:120, sortable:"true"},
                  {prop:"deptName", label:"机构", minWidth:120, sortable:"true"},
                  {prop:"email", label:"邮箱", minWidth:120, sortable:"true"},
                  {prop:"mobile", label:"手机", minWidth:120, sortable:"true"}
              ],
              pageRequest: { pageNum: 1, pageSize: 8 },
              pageResult: {},

              operation: false, // true:新增, false:编辑
              editDialogVisible: false, // 新增编辑界面是否显示
              editLoading: false,
              dataFormRules: {
                  name: [
                      { required: true, message: '请输入用户名', trigger: 'blur' }
                  ]
              },
              // 新增编辑界面数据
              dataForm: {
                  id: 0,
                  name: '',
                  password: '123456',
                  deptId: 1,
                  deptName: '',
                  email: 'test@qq.com',
                  mobile: '13889700023',
                  status: 1
              },
              deptData: [],
              deptTreeProps: {
                  label: 'name',
                  children: 'children'
              }
          }
      },
      methods: {
          // 换页
          handleCurrentChange(pageNum) {
              this.pageNum = pageNum
              this.findUsers()
          },
          // 获取用户列表
          findUsers() {
              this.dataLoading = true
              let params = {
                  pageNum: this.pageNum,
                  pageSize: this.pageSize,
                  // columnFilters:{name: {name:'name', value:this.filters.name}}
              }
              findPage(params).then((res) => {
                  this.totalSize = res.data.totalSize
                  this.users = res.data.content
                  this.dataLoading = false
              })
          },
          // 获取分页数据
          findPage: function (data) {
              if(data !== null) {
                  this.pageRequest = data.pageRequest
              }
              this.pageRequest.columnFilters = {name: {name:'name', value:this.filters.name}}
              findPage(this.pageRequest).then((res) => {
                  this.pageResult = res.data
              })
          },
          // 删除
          handleDel: function (index, row) {
              let ids = row.id
              this.delete(ids)
          },
          // 批量删除
          batchDelete: function () {
              let ids = this.selections.map(item => item.id).toString()
              this.delete(ids)
          },
          // 删除操作
          delete: function (ids) {
              this.$confirm('确认删除选中记录吗？', '提示', {
                  type: 'warning'
              }).then(() => {
                  this.dataLoading = true
                  let params = []
                  let idArray = (ids+'').split(',')
                  for(var i=0; i<idArray.length; i++) {
                      params.push({'id':idArray[i]})
                  }
                  this.$api.user.batchDelete(params).then((res) => {
                      this.dataLoading = false
                      this.$message({
                          message: '删除成功',
                          type: 'success'
                      })
                      this.findUsers()
                  })
              }).catch(() => {
              })
          },
          // 显示新增界面
          handleAdd: function () {
              this.editDialogVisible = true
              this.operation = true
              this.dataForm = {
                  id: 0,
                  name: '',
                  password: '',
                  deptId: 1,
                  deptName: '',
                  email: 'test@qq.com',
                  mobile: '13889700023',
                  status: 1
              }
          },
          // 显示编辑界面
          handleEdit: function (params) {
              this.editDialogVisible = true
              this.operation = false
              this.dataForm = Object.assign({}, params.row)
          },
          // 编辑
          editSubmit: function () {
              this.$refs.dataForm.validate((valid) => {
                  if (valid) {
                      this.$confirm('确认提交吗？', '提示', {}).then(() => {
                          this.editLoading = true
                          let params = Object.assign({}, this.dataForm)
                          save(params).then((res) => {
                              this.editLoading = false
                              this.$message({ message: '提交成功', type: 'success' })
                              this.$refs['dataForm'].resetFields()
                              this.editDialogVisible = false
                              this.findUsers()
                          })
                      })
                  }
              })
          },
          // selectionChange: function (selections) {
          //     this.selections = selections
          // },
          // 获取部门列表
          findDeptTree: function () {
              findDeptTree().then((res) => {
                  this.deptData = res.data
              })
          },
          // 菜单树选中
          deptTreeCurrentChangeHandle (data, node) {
              this.dataForm.deptId = data.id
              this.dataForm.deptName = data.name
          }
      },
      mounted() {
          this.findUsers()
          this.findDeptTree()
      }
  }
</script>

<style lang="scss" scoped>
  .site-wrapper.site-page--not-found {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    .site-content__wrapper {
      padding: 0;
      margin: 0;
      background-color: #fff;
    }
    .site-content {
      position: fixed;
      top: 15%;
      left: 50%;
      z-index: 2;
      padding: 30px;
      text-align: center;
      transform: translate(-50%, 0);
    }
    .not-found-title {
      margin: 20px 0 15px;
      font-size: 8em;
      font-weight: 500;
      color: rgb(55, 71, 79);
    }
    .not-found-desc {
      margin: 0 0 30px;
      font-size: 26px;
      text-transform: uppercase;
      color: rgb(118, 131, 143);
      > em {
        font-style: normal;
        color: #ee8145;
      }
    }
    .not-found-btn-gohome {
      margin-left: 30px;
    }
  }
</style>