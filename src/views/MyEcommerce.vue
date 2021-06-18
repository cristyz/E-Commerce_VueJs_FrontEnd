<template>
  <div
    id="containerForm"
    class="mt-5"
    method="POST"
    action="http://localhost:8888/newecommerce"
  >
    <div class="form-group">
      <label for="exampleFormControlInput1">Name</label>
      <input
        type="text"
        name="nameCommerce"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Name Ecommerce"
        v-model="nameCommerce"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect3">Description</label>
      <input
        type="text"
        name="descriptionCommerce"
        class="form-control"
        id="exampleFormControlInput3"
        placeholder="Description Ecommerce"
        v-model="descriptionCommerce"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect3">Url Photo</label>
      <input
        type="text"
        name="urlPhoto"
        class="form-control"
        id="exampleFormControlInput3"
        placeholder="Description Ecommerce"
        v-model="urlPhoto"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Type Ecommerce</label>
      <select
        class="form-control"
        name="typeCommerce"
        id="exampleFormControlSelect2"
        v-model="typeCommerce"
      >
        <option>Clothes</option>
        <option>Construction material</option>
        <option>Agriculture</option>
        <option>Food and Snakes</option>
        <option>Music</option>
      </select>
    </div>
    <button @click="newEcommerce" class="btn btn-primary mt-3">Create</button>
    <span v-if="status != ''" class="fs-2">{{ status }}</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      status: "",
      ecommerces: [],

      nameCommerce: null,
      descriptionCommerce: null,
      typeCommerce: null,
      urlPhoto: null,
    };
  },
  mounted() {
    axios
      .post("http://localhost:8888/myecommerce", {
        token: localStorage.getItem("token"),
      })
      .then((e) => {
        this.ecommerces = e.data.myecommerces;
      });

    // console.log(document.getElementById('exampleFormControlSelect2'));
  },
  methods: {
    newEcommerce() {
      axios
        .post("http://localhost:8888/newecommerce", {
          token: localStorage.getItem("token"),
          nameCommerce: this.nameCommerce,
          descriptionCommerce: this.descriptionCommerce,
          typeCommerce: this.typeCommerce,
          urlPhoto: this.urlPhoto,
          lastUpdate: Date.now()
        })
        .then((e) => {
          this.status = e.data.status;
        });
    },
  },
};
</script>

<style scoped>
#containerForm {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.form-group {
  width: 50%;
}
</style>