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
              v-model="inputName"
              class="input-with-select"
              :fetch-suggestions="querySearch"
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
            <el-table :data="articles" style="width: 100%">
              <el-table-column
                prop="id"
                label="编号"
                width="100"
              ></el-table-column>
              <el-table-column prop="title" label="标题" width="180">
              </el-table-column>
              <el-table-column prop="description" label="描述" width="350">
              </el-table-column>
              <el-table-column label="新建" title="新建">
                <el-button type="primary" round>新建</el-button>
              </el-table-column>
              <el-table-column label="修改" title="修改">
                <el-button type="primary" icon="el-icon-edit" circle
                  >修改</el-button
                >
              </el-table-column>
              <el-table-column label="删除" title="删除">
                <template slot-scope="scope">
                  <el-button
                    type="danger"
                    icon="el-icon-delete"
                    circle
                    @click="del(scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="500">
            </el-pagination>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import http from "axios";
export default {
  name: "Home",
  data() {
    return {
      inputName: "",
      activeIndex: "1",
      articles: []
    };
  },
  created() {
    //console.log(this);  //VueComponent
    //console.log(this.$CONFIG); //apiBaseUrl: "http://localhost:3001"
    this.getArticle();
  },
  methods: {
    /*
      2020 - 2-20 周四  get请求：下午1点30分
    */
    async getArticle() {
      try {
        this.isLoading = true;
        const res = await http.get(`${this.$CONFIG.apiBaseUrl}/articles`);
        this.articles = res.data;
      } catch (e) {
        this.$notify.error({
          title: "错误",
          message: "网络错误！！！"
        });
      } finally {
        this.isLoading = false;
      }
    },
    /*删除功能*/
    del(row) {
      const { id } = row;
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          try {
            await http.delete(`http://localhost:3001/articles/${id}`);
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.getArticle();
          } catch (e) {
            console.log(e);
            this.$notify.error({
              title: "错误",
              message: "网络错误！！！"
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    /*搜索功能*/
    querySearch() {
      console.log(this);
    }
  }
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
  .el-table {
    text-align: center;
  }
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
    width: 300px;
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
