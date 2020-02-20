<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="trademark">
          <img
            src="../../public/img/tushanred.jpg"
            alt="logo"
            title="涂山红红"
            class="trademark-logo"
          />
          <span>admin</span>
        </div>
        <nav>
          <div class="search">
            <el-input
              placeholder="请输入内容"
              v-model="input"
              class="input-with-select"
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <div class="user">
            <img
              src="../../public/logo.jpg"
              alt="logo"
              title="东方月初"
              class="user-picture"
            />
            <span>稀饭</span>
          </div>
        </nav>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <el-table style="width: 100%">
              <el-table-column prop="date" label="编号" width="180">
              </el-table-column>
              <el-table-column prop="name" label="标题" width="180">
              </el-table-column>
              <el-table-column prop="name" label="描述" width="180">
              </el-table-column>
              <el-table-column prop="address" label="删除">
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                ></el-button>
              </el-table-column>
            </el-table>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      input: ""
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.trademark {
  display: flex;
  align-items: center;
  justify-content: center;
  & .trademark-logo {
    width: 40px;
    border-radius: 50%;
    margin-right: 5px;
  }
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  line-height: 160px;
  padding: 0;
}

/deep/.el-container {
  margin-bottom: 40px;
  height: 100vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/deep/ nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  & .search {
    width: 200px;
    margin-left: 90px;
  }
  & .user {
    display: flex;
    align-items: center;
    & .user-picture {
      width: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}
</style>
