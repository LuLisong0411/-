<template>
  <div>
    <el-container>
      <el-aside width="240px">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!--//没有二级导航的 -->
          <el-menu-item index="1">
            <span slot="title"> 首页</span>
          </el-menu-item>

          <!--	//有二级导航的 -->
          <el-submenu index="2">
            <template slot="title">
              <span>贷款管理</span>
            </template>
            <el-menu-item index="2-1">
              <router-link to="/loan/indexView">贷款申请</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>

          <!--//左侧面包屑-->
          <div class="left"></div>
          <!--//右侧用户名-->
          <div class="right">
            <!--// //下拉菜单-->
            <el-dropdown>
              <span class="el-dropdown-link"> admin </span>

              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
a:link {
  text-decoration: none;
  color: #fff;
}

/* 状态二: 已经访问过的链接 */
a:visited {
  text-decoration: none;
  color: #fff;
}

/* 状态三: 鼠标划过(停留)的链接(默认红色) */
a:hover {
  text-decoration: none;
  color: #fff;
}
/* 状态四: 被点击的链接 */
a:active {
  text-decoration: none;
  color: #fff;
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

.el-container {
  height: 100vh;
}
.el-menu-vertical-demo {
  border: none;
}
</style>