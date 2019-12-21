<template>
  <el-row class="layout-header" type="flex" align="middle" justify="space-between">
  <el-col class="left" :span="6">
      <i class="el-icon-s-unfold"></i>
      <span class="title">江苏传智播客教育科技股份有限公司</span>
      </el-col>
  <el-col class="right" :span="4">
      <el-row type="flex" justify="end" align="middle">
          <img :src="userInfo.photo ? userInfo.photo: defaultImg" alt="">
          <el-dropdown @command="handle">
              <span>{{userInfo.name}}</span>
                  <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="info">个人信息</el-dropdown-item>
        <el-dropdown-item command="git">git地址</el-dropdown-item>
        <el-dropdown-item command="lgout">退出</el-dropdown-item>
      </el-dropdown-menu>
          </el-dropdown>
      </el-row>

  </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/home.jpg')
    }
  },
  created () {
    let token = window.localStorage.getItem('uesr_token')
    console.log(token)

    this.$axios({
      url: '/user/profile',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      this.userInfo = result.data.data
      console.log(result.data)
    })
  },
  methods: {
    handle (commad) {
      if (commad === 'lgout') {
        window.localStorage.removeItem('uesr_token')
        this.$router.push('/login')
      } else if (commad === 'git') {
        window.location.href = 'https://github.com/lujiaxu111/89heimatoutiao/commits'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header{
    height: 60px;
    .left{
        font-size: 18px;
        .title{
            margin-left: 6px;
            font-size: 16px;
        }
    }
    .right{
        img{
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
}
</style>
