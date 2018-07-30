<template>
  <div id="home">
    <div class="taskTitle">
      <span class="taskTitTxt">描述:</span>
      <el-input class="taskTitInp" v-model="des" placeholder="请输入题目描述"></el-input>
      <span class="taskTitTxt">试题类型:</span>
      <el-select v-model="taskType" placeholder="请选择">
        <el-option v-for="item in options2" :key="item.value" :label="item" :value="item">
        </el-option>
      </el-select>
      <el-button type="primary" @click="taggleInserBox" class="inserBtn">新增题目</el-button>
    </div>
    <div class="taskTabel">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="des" label="题目" width="250">
        </el-table-column>
        <el-table-column prop="type" label="题目类型(1:选择题,2:问答题)" width="250">
        </el-table-column>
        <el-table-column prop="sel[0]" label="选项A" width="180">
        </el-table-column>
        <el-table-column prop="sel[1]" label="选项B" width="180">
        </el-table-column>
        <el-table-column prop="sel[2]" label="选项C" width="180">
        </el-table-column>
        <el-table-column prop="sel[3]" label="选项D" width="180">
        </el-table-column>
        <el-table-column prop="answer" label="答案" width="180">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="changeTask(scope.row, scope.$index)" type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="插入题目" :visible.sync="showInserBox" width="50%">
      <div class="inserTaskBox">
        <div class="tlt">
          <h3 class="taskTitTxt">题目描述:</h3>
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="inserData.des">
          </el-input>
          <div class="type">
            题目类型:
            <el-select v-model="inserData.type" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="radio">
          <el-radio class="radioI" v-model="inserData.answer" label="A">
            A.
            <el-input class="taskTitInp" v-model="inserData.sel[0]" placeholder="请输入题目描述"></el-input>
          </el-radio>
          <el-radio class="radioI" v-model="inserData.answer" label="B">
            B.
            <el-input class="taskTitInp" v-model="inserData.sel[1]" placeholder="请输入题目描述"></el-input>
          </el-radio>
          <el-radio class="radioI" v-model="inserData.answer" label="C">
            C.
            <el-input class="taskTitInp" v-model="inserData.sel[2]" placeholder="请输入题目描述"></el-input>
          </el-radio>
          <el-radio class="radioI" v-model="inserData.answer" label="D">
            D.
            <el-input class="taskTitInp" v-model="inserData.sel[3]" placeholder="请输入题目描述"></el-input>
          </el-radio>
        </div>
        答案:
        <el-input class="taskTitInp" v-model="inserData.answer" placeholder="请输入答案"></el-input>
        <div class="bottom">
          <el-button type="primary" @click="inserTask(null)">插入题目</el-button>
          <el-button type="info" @click="taggleInserBox" plain>关闭</el-button>
        </div>
      </div>
    </el-dialog>
    <div class="submit">
      <el-button type="primary" @click="submit">插入数据库</el-button>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        des: "",
        taskType: '',
        tableData: [],
        showInserBox: false,
        options2: ['语文', '数学'],
        options: [{
          value: 1,
          label: '选择题'
        }, {
          value: 2,
          label: '问答题'
        }],
        inserData: {
          des: '',
          answer: '',
          sel: [],
          type: null,
        }
      };
    },
    methods: {
      changeTask(row, index) {
        this.inserData = row;
        this.taggleInserBox();
      },
      taggleInserBox() {
        this.showInserBox = !this.showInserBox
      },
      inserTask(change) {
        if (!this.inserData.des) {
          this.$message('请输入题目描述');
          return;
        }
        if (!this.inserData.type) {
          this.$message('请选择题目类型');
          return;
        }
        if (this.inserData.type == 1) {
          if (this.inserData.sel.length != 4) {
            this.$message('请输入全部选择题');
            return;
          }
        }
        if (!this.inserData.answer) {
          this.$message('未选择答案');
          return;
        }

        if (change !== undefined && change !== null && change !== '') {
          this.tableData[change] = this.inserData;
        } else {
          this.tableData.push(this.inserData);
        }

        this.clearInserData();
        this.taggleInserBox();
      },
      clearInserData() {
        this.inserData = {
          des: '',
          answer: '',
          sel: [],
          type: null,
        }
      },
      submit() {
        let _this = this;
        if (this.tableData.length < 10) {
          this.$message('提交的题目不少于10道');
          return;
        }
        this.$http
          .post('http://127.0.0.1:3000/task/setHeritageTask',{
            title:_this.des,
            type:_this.taskType,
            tasks: _this.tableData
          })
          .then(data => {
            console.log(data);
          }).catch(err => {
            console.log(err)
          })
      }
    }
  };

</script>
<style lang="scss" scoped>
  .taskTitle {
    .inserBtn {
      float: right;
    }
    .taskTitInp {
      display: inline-block;
      width: 40vw;
    }
  }

  .taskTabel {
    margin-top: 2vw;
  }

  .inserTaskBox {
    // position: fixed;
    // width: 35vw;
    // height: 30vw;
    // left: 50%;
    // top: 50%;
    padding: 1vw; // transform: translate(-50%, -50%);
    // background: #ccc;
    z-index: 999;
    .taskTitInp {
      display: inline-block;
      width: 10vw;
    }
    .tlt {
      .type {
        margin: .4vw 0;
      }
    }
    .radio {
      margin: 1vw 0;
      .radioI {
        display: block;
        margin: .5vw 0;
      }
    }
    .bottom {
      margin-top: 1vw;
      text-align: center;
    }
  }

  .submit {
    text-align: center;
    margin-top: 1vw;
  }

</style>
