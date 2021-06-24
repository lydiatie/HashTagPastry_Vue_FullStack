<template>
  <div class="row">
    <div class="col-md-3">
      <SideBar />
    </div>

    <div class="col-md-9">
      <div class="jumbotron" style="margin:10vh 3vw">
        <div class="container">
          <div v-if="!submitted">
            <div class="list row ">
              <div class="col-md-8">
                <h4>Pie List</h4>
                <table class="table table-bordered">
                  <thead class="thead-dark">
                    <tr>
                      <th>Address to pick up</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      :class="[
                        currentIndex === index ? 'selected' : 'not-selected',
                      ]"
                      v-for="(token, index) in tokens"
                      :key="index"
                      @click="setActiveToken(token, index)"
                    >
                      <td>{{ token.address }}</td>
                      <td>{{ token.quantity }}</td>
                    </tr>
                  </tbody>
                </table>

                <button class="m-3 btn btn-sm btn-danger" @click="deleteToken">
                  Get Pies
                </button>
              </div>

              <div class="col-md-4">
                <div v-if="currentToken">
                  <div class="token">
                    <label><strong>Quantity:</strong></label>
                    {{ currentToken.quantity }}
                    <br />
                    <label><strong>Address to pick up:</strong></label>
                    {{ currentToken.address }}
                  </div>
                </div>
                <div v-else>
                  <br />
                  <p>Please select one...</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <h4>
              Get token successful. Confirmation email will be sent to you!
            </h4>
            <button class="btn btn-success" @click="refreshList">Back</button>
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
  name: "tokens-list",
  components: {
    SideBar,
  },
  data() {
    return {
      tokens: [],
      currentToken: null,
      currentIndex: -1,
      quantity: "",
      address: "",
      submitted: false,
    };
  },
  methods: {
    retrieveTokens() {
      TokenData.getAll()
        .then((response) => {
          this.tokens = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTokens();
      this.currentToken = null;
      this.currentIndex = -1;
      this.submitted = false;
    },

    setActiveToken(token, index) {
      this.currentToken = token;
      this.currentIndex = index;
    },

    deleteToken() {
      TokenData.delete(this.currentToken._id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "gettokens" });
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTokens();
  },
};
</script>

<style>
tbody tr:not(.selected):hover {
  cursor: pointer;
  background-color: lightgray;
}

.list {
  text-align: left;
  max-width: 100vw;
}

.token {
  padding-top: 25px;
}

.selected {
  background-color: #5cb85c;
  color: white;
}

.not-selected {
  background-color: white;
}
</style>
