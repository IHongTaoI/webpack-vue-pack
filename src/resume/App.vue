<template>
  <div id="app" ref="app">
    <div class="btn" @click="creatPDf">点击生成图片</div>
    <div id="picBox">
      <header class="head">
        <h3 class="title">洪涛个人简历</h3>
        <div class="down">
          <!-- <h3 class="title opcity">洪涛个人简历</h3> -->
          <!-- <div class="opcity"></div> -->
        </div>
      </header>
      <div class="content">
        <div class="userinfo">
          <div class="l">
            <h3 class="tlt">个人介绍</h3>
            <p
              class="des"
            >2017年7月开始实习工作，曾在三家公司担任web前端工作，其中有两家是实习。能够快速的适应各种工作环境，责任心强，具有良好的分析能力，自学能力，适应能力。工作积极进取,对web前端开发有着 浓厚的兴趣，并且有着刻苦钻研的精神，创新意识强。熟练的掌握前端技术，其中比较熟练使用vue技术栈。曾使用过react技术栈。掌握JavaScript基础知识。并能够采用node、egg.js配合后台工作，熟悉基本sql语句。</p>
          </div>
          <div class="ava">
            <img src="./img/ava.png" class="img">
          </div>
          <div class="r">
            <h3 class="tlt">个人信息</h3>
            <div class="flex juscenter">
              <ul class="ul">
                <li v-for="(item, index) in userInfoList" :key="index" class="item">
                  <span class="n" v-if="item.name">{{item.name}}</span>
                  <span class="n iconfont" :class="[item.iconfont]" v-else></span>
                  <span class="v">{{item.value}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="jobHope BoxTile">
          <h3 class="tlt">
            <span class="iconfont icon-qiuzhiyixiang"></span>
            <span>职业经历</span>
          </h3>
          <div class="cont">
            <div class="item flex juscenter" v-for="(item, index) in jobHopeList" :key="index">
              <div class="left">
                <div class="info">
                  <p class="infoT">{{item.company.time}}</p>
                  <div class="infoB">
                    <div class="info-tlt">{{item.company.name}}</div>
                    <p
                      class="department"
                      v-show="item.company.department"
                    >部门:{{item.company.department}}</p>
                    <div class="info-des" v-html="item.company.des"></div>
                  </div>
                </div>
              </div>
              <div class="riglt">
                <div class="info" v-for="(project, indx) in item.projects" :key="indx">
                  <p class="infoT">{{project.time}}</p>
                  <div class="infoB">
                    <div class="info-tlt">{{project.name}}</div>
                    <div class="info-des" v-html="project.des"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="skills mt1rem BoxTile">
          <h3 class="tlt">
            <span class="iconfont icon-jineng"></span>
            <span>个人技能</span>
          </h3>
          <div class="cont">
            <p class="item">
              <span class="iconfont icon-MongoDB"></span>
              <span>mongoDB</span>
              <span>了解</span>
            </p>
            <p class="item">
              <span class="iconfont icon-node"></span>
              <span>nodeJs</span>
              <span>熟悉</span>
            </p>
            <p class="item">
              <span class="iconfont icon-shujujiegou"></span>
              <span>数据结构</span>
              <span>了解</span>
            </p>
            <p class="item">
              <span class="iconfont icon-luoji"></span>
              <span>逻辑思维</span>
              <span>优良</span>
            </p>
            <p class="item">
              <span class="iconfont icon-js"></span>
              <span>JavaScript</span>
              <span>掌握</span>
            </p>
            <p class="item">
              <span class="iconfont icon-mysql"></span>
              <span>mysql</span>
              <span>了解</span>
            </p>
            <p class="item">
              <span class="iconfont icon-css"></span>
              <span>css</span>
              <span>掌握</span>
            </p>
            <p class="item">
              <span class="iconfont icon-html5"></span>
              <span>html</span>
              <span>掌握</span>
            </p>
            <p class="item">
              <span class="iconfont icon-zhinengsuanfa"></span>
              <span>算法</span>
              <span>了解</span>
            </p>
            <p class="item">
              <span class="iconfont icon-Vue"></span>
              <span>Vue</span>
              <span>掌握</span>
            </p>
          </div>
        </div>
        <div class="BoxTile likes mt1rem">
          <h3 class="tlt">
            <span class="iconfont icon-huabanfuben"></span>
            <span>业余活动</span>
          </h3>
          <div class="cont">
            <p class="item">
              <span class="iconfont icon-zhaoxiang"></span>
              <span>拍照</span>
            </p>
            <p class="item">
              <span class="iconfont icon-jianshen-"></span>
              <span>健身</span>
            </p>
            <p class="item">
              <span class="iconfont icon-lanqiu"></span>
              <span>篮球</span>
            </p>
            <p class="item">
              <span class="iconfont icon-youyong"></span>
              <span>游泳</span>
            </p>
            <p class="item">
              <span class="iconfont icon-pashan"></span>
              <span>爬山</span>
            </p>
            <p class="item">
              <span class="iconfont icon-94"></span>
              <span>游戏</span>
            </p>
          </div>
        </div>
        <div class="BoxTile works mt1rem">
          <h3 class="tlt">
            <span class="iconfont icon-huabanfuben"></span>
            <span>个人作品</span>
          </h3>
          <div class="cont">
            <img src="./img/icon108x108.png" class="logo">
            <div class="info">
              <h3 class="works-tlt">吾心飞享</h3>
              <p class="work-des">运用vue,vue-router,vuex,结合vant,模拟的一款社交类app，流畅度体验的达到了和原生app差不多的成都</p>
            </div>
            <div style="margin-right: 0.3rem;">
              <p>网页地址</p>
              <img src="./img/wxfluqrcode.png" class="qrcode">
            </div>
            <div>
              <p>下载APP</p>
              <img src="./img/downloadApp.png" class="qrcode">
            </div>
          </div>
        </div>
        <div class="educational BoxTile">
          <h3 class="tlt">
            <span class="iconfont icon-edu-s"></span>
            <span>教育经历</span>
          </h3>
          <div class="cont">
            <div class="edu-info">
              <div class="edutlt">
                <h3>湖南人文科技学院</h3>
                <p class="time">2014-2018</p>
                <p>本科 | 网络工程专业</p>
              </div>
              <div class="experience">
                <p>文艺委员</p>
                <p>轮滑平花，刹车，都获得三校联合比赛第一名</p>
                <p>顺利毕业获得本科毕业证书，和学士学位证书</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JsPDF from "jspdf";
export default {
  created() {
    console.log(document.getElementById("picBox"), "created");
    setTimeout(() => {
      console.log(document.getElementById("picBox"), "settimeout");
    }, 0);
    this.$nextTick(() => {
      console.log(document.getElementById("picBox"), "nextTick");
    });
  },
  mounted() {
    console.log(document.getElementById("picBox"), "mounted");
  },
  name: "App",
  data() {
    return {
      userInfoList: [
        {
          value: "hong836717428",
          iconfont: "icon-weixin-copy"
        },
        {
          value: "836717428@qq.com",
          iconfont: "icon-youxiang"
        },
        {
          value: "13266500711",
          iconfont: "icon-dianhua"
        },
        {
          value: "https://github.com/IHongTaoI",
          iconfont: "icon-github"
        },
        {
          value: "836717428",
          iconfont: "icon-qq"
        },
        {
          value: "学士(计算机专业)",
          iconfont: "icon-edu-s"
        },
        {
          value: "1996-04-21",
          name: "生于"
        }
      ],
      jobHopeList: [
        {
          company: {
            time: "2018年7月",
            name: "广州云引科技",
            department: "技术部",
            des:
              "app  H5  混合开发，vue，egg.js，vux ,  iview, mysql , mongodb ,阿里oss， cordova , apicloud .... 等等技术栈，封装一些常用的vue插件。制作一些常用的vue全局组件"
          },
          projects: [
            {
              time: "2018年7月",
              name: "实验性混合app,小程序,后台管理",
              des:
                "搭配安卓工程师，或者cordova,apicould,配合vue,vux等库提高效率快速制作一系列APP提供推广人员进行一系列实验性推广。结合egg.js搭配后台工程师完成一些接口的编写，运用iview,编写对应的后台管理系统"
            },
            {
              time: "2018年7月",
              name: "微信裂变前端",
              des:
                "通过快速将别人的页面改造成自己的页面然后裂变自己的内容，如一些游戏等"
            }
          ]
        },
        {
          company: {
            time: "2017年11月",
            name: "广州小迈",
            department: "车主产品事业部",
            des:
              "制作车主无忧app内容，负责开发与维护车主无忧APP，运用webpack实现前端自动化。运用react，基于服务端渲染，开发一些可维护的新页面，重构一些旧页面,主要技术栈，react,react-native,node.js,es6,"
          },
          projects: [
            {
              time: "2017年11月",
              name: "车主无忧App(页端)",
              des:
                "分为三大工程RN工程，react工程，webpack工程。react工程主要是服务端渲染的页面，RN工程主要配合ios与安卓工程师编写跨端应用。webpack工程是一些老的页面，主要是运用的jquery库编写的一些业务逻辑，本人主要维护这些工程，并重构一些老旧页面，完成新的需求的更改与制作。"
            }
          ]
        },
        {
          company: {
            time: "2017年6月",
            name: "蓝盾",
            department: "蓝盾研发中心",
            des: "制作一些公司内部，或者政府部门的后台管理系统平台"
          },
          projects: [
            {
              time: "2017年7月",
              name: "自适应的后台管理平台",
              des:
                "运用boostrapt搭建自适应页面，通过结合设计图修改源码，项目中用到很多图表统计信息，采用百度的echrts帮助我们提高工作效率，灵活运用iframe框架嵌套网页，编写js结合(jquery-teml)编写页面特效和操作页面dom。"
            }
          ]
        }
      ]
    };
  },
  methods: {
    creatPDf() {
      this.$html2canvas(document.querySelector("#picBox")).then(canvas => {
        document.body.appendChild(canvas);
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;
        let pageHeight = (contentWidth / 592.28) * 841.89;
        let leftHeight = contentHeight;
        let position = 0;
        let imgWidth = 595.28;
        let imgHeight = (592.28 / contentWidth) * contentHeight;
        let pageData = canvas.toDataURL("image/jpeg", 1.0);
        let PDF = new JsPDF("", "pt", "a4");
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        PDF.save("洪涛web前端简历.pdf");
      });
    }
  }
};
</script>

<style lang="scss">
.btn {
  font-size: 0.8rem;
  background: #fff;
}
@import "./app.less";
</style>

