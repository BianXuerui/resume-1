<template>
  <table>
    <thead>
      <tr>
        <th>
          <input type="checkbox" @change="changeAllChb" v-model="checkedAll" id="color-input-red">
          <label for="color-input-red"></label>
        </th>
        <th>姓名</th>
        <th>年龄</th>
        <th>地址</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(elem,i) of list" :key="i">
        <td>
          <input type="checkbox" v-model="elem.chb" @change="changeChb()" id="color-input-red">
          <label for="color-input-red"></label>
        </td>
        <td v-text="elem.date"></td>
        <td v-text="elem.name"></td>
        <td v-text="elem.address"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      checkedAll: false
    };
  },
  created() {
    this.list.forEach(elem => {
      elem.chb = false;
    });
  },
  methods: {
    changeChb() {
      for (var tmp of this.list) {
        if (!tmp.chb) {
          this.checkedAll = false;
          console.log(this.checkedAll);
          console.log(this.list);
          return;
        }
      }
      this.checkedAll = true;
      console.log(this.checkedAll);
    },
    changeAllChb() {
      for (var tmp of this.list) {
        tmp.chb = this.checkedAll;
        // this.$set(tmp, 'chb', this.checkedAll)
      }
      console.log(this.list);
      console.log("checkedAll")
    }
  }
};
</script>

<style scoped>
table {
  width: 500px;
  height: 200px;
  table-layout: auto;
  text-align: center;
  margin: 100px auto;
}
tr td, tr th {
  border: 1px solid #ccc;
  position:relative;
}

#color-input-red + label {
  display: block;
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: absolute;
  top: 2px;
  left: 2px;
  background: #409eff;
}

#color-input-red:checked + label::before {
  display: block;
  content: "\2714";
  text-align: center;
  font-size: 14px;
  color: white;
}

#color-input-red{
	visibility: hidden;
}
</style>
