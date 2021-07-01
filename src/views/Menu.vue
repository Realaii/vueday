<template>
  <div class="menu">
    <p>This is a Menu page</p>
    <div class="menu_content">
      <div class="menu_add">
        <label>序号：<input type="number" @input="getId($event)" /></label>
        <label>菜名：<input type="text" @input="getName($event)" /></label>
        <label>价格：<input type="number" @input="getPrice($event)" /></label>
        <button @click="addItem()">添加</button>
        <label><input type="text" @input="searchName($event)" placeholder="名称搜索" /></label>
        <button @click="searchItem()">搜索</button>
      </div>
      <div class="table">
        <div class="tr">
          <div>序号</div>
          <div>菜名</div>
          <div>价格</div>
          <div>操作</div>
        </div>
        <div class="tr" v-for="(item, index) in menuData" :key="index">
          <div>{{ item.id }}</div>
          <div>{{ item.name }}</div>
          <div>{{ item.price }}</div>
          <div>
            <button @click="deleteItem(item.id)">删除</button>
            <button @click="editItem(item.id, item.name, item.price)">
              编辑
            </button>
          </div>
        </div>
        <div class="model_box" v-if="flag">
          <div class="edit_box">
            <label
              >序号：<input
                type="number"
                :value="this.id"
                @input="getId($event)"
                disabled
            /></label>
            <label
              >菜名：<input
                type="text"
                :value="this.name"
                @input="getName($event)"
            /></label>
            <label
              >价格：<input
                type="number"
                :value="this.price"
                @input="getPrice($event)"
            /></label>
            <button @click="submitData()">提交</button>
            <button @click="close()">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Menu",
  components: {},
  data() {
    return {
      id: "",
      name: "",
      price: "",
      flag: false,
      searchText: "",
    };
  },
  computed: {
    ...mapState(["menuData"]),
  },
  mounted() {
    console.log(this);
  },
  methods: {
    searchItem() {
      if (!!this.searchText) {
        this.$store.dispatch("searchItem", this.searchText);
      } else {
          alert('请输入名称!')
      }
    },
    submitData() {
      let itemData = {
        id: this.id,
        name: this.name,
        price: this.price,
      };
      this.$store.dispatch("updateItem", itemData);
      this.close();
    },
    editItem(id, name, price) {
      this.flag = true;
      this.id = id;
      this.name = name;
      this.price = price;
    },
    close() {
      this.flag = false;
      this.id = "";
      this.name = "";
      this.price = "";
    },
    addItem() {
      let itemData = {
        id: this.id,
        name: this.name,
        price: this.price,
      };
      this.$store.dispatch("addItem", itemData);
    },
    deleteItem(id) {
      this.$store.dispatch("deleteItem", id);
    },
    searchName(e) {
      this.searchText = e.currentTarget.value;
    },
    getId(e) {
      this.id = e.currentTarget.value;
    },
    getName(e) {
      this.name = e.currentTarget.value;
    },
    getPrice(e) {
      this.price = e.currentTarget.value;
    },
  },
};
</script>

<style lang="less" scoped>
.menu_content {
  border: 1px solid #eeeeee;
  padding: 6px;
  display: flex;
  flex-direction: column;
  .menu_add {
    text-align: left;
    margin: 10px 0;
    label {
      font-size: 13px;
      color: #333333;
      input {
        width: 120px;
        height: 24px;
        margin: 0 8px;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
      }
      input:focus {
        outline: none;
      }
    }
    button {
      display: inline-block;
      width: 70px;
      height: 30px;
      border: 1px solid transparent;
      font-size: 13px;
      border-radius: 4px;
      color: #fff;
      background-color: #5bc0de;
      border-color: #46b8da;
    }
    button:hover {
      background: #7f92e7;
    }
  }
  .table {
    border: 1px solid #eeeeee;
    width: 750px;
    .tr {
      display: flex;
      font-size: 13px;
      color: #333333;
      height: 35px;
      line-height: 35px;
      div {
        width: 25%;
        border: 1px solid #eeeeee;
        padding: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
          display: inline-block;
          width: 60px;
          height: 28px;
          border: 1px solid transparent;
          font-size: 13px;
          border-radius: 4px;
          color: #fff;
          background-color: #5bc0de;
          border-color: #46b8da;
          margin: 0 3px;
        }
        button:hover {
          background: #7f92e7;
        }
      }
    }
    .model_box {
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 88;
      .edit_box {
        width: 300px;
        height: 400px;
        background: #eeeeee;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 99;
        label {
          font-size: 14px;
          display: block;
          margin: 7px auto;
        }
        button {
          margin: 10px 5px;
        }
      }
    }
  }
}
</style>
