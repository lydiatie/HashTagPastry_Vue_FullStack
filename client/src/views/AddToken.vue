<template>
  <div class="row">
    <div class="col-md-3">
      <SideBar />
    </div>

    <div class="col-md-9">
      <div class="jumbotron" style="margin:10vh 15vw">
        <div class="container">
          <div v-if="!submitted">
            <div class="form-group">
              <label for="quantity">Quantity</label>
              <input
                type="number"
                class="form-control"
                id="quantity"
                required
                v-model="token.quantity"
                name="quantity"
                autocomplete="off"
                min="1"
                max="5"
              />
            </div>

            <div class="form-group">
              <label for="address">Address</label>
              <input
                class="form-control"
                id="address"
                required
                v-model="token.address"
                name="address"
                autocomplete="off"
              />
            </div>
            <button @click="saveToken" class="btn btn-success">Add Pie</button>
          </div>

          <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newToken">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../views/SideBar.vue";
import TokenData from "../services/TokenData.service";

export default {
  name: "add-token",
  components: {
    SideBar,
  },
  data() {
    return {
      token: {
        id: null,
        quantity: "",
        address: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveToken() {
      var data = {
        quantity: this.token.quantity,
        address: this.token.address,
        published: true,
      };

      TokenData.create(data)
        .then((response) => {
          this.token.id = response.data.id;
          console.log(response.data);
          this.published = true;
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newToken() {
      this.published = false;
      this.submitted = false;
      this.token = {};
    },
  },
};
</script>
