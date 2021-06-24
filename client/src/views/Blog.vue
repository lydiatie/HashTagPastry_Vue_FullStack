<template>
  <div class="row">
    <div class="col-md-3">
      <SideBar />
    </div>
    <div class="col-md-9">
      <div class="card" style="width: 80%">
        <div class="card-body">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Archive
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Blog A</a>
              <a class="dropdown-item" href="#">Blog B</a>
              <a class="dropdown-item" href="#">Blog C</a>
            </div>
          </div>
          <div>
            <h3>New Blog</h3>
            <input
              type="text"
              class="form-control"
              placeholder="Add title"
              autocomplete="off"
            /><br />
            <textarea
              rows="10"
              class="form-control"
              placeholder="Start writing"
            ></textarea
            ><br />
          </div>
          <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-secondary">Post</button>
            <button type="button" class="btn btn-secondary">Edit</button>
            <button type="button" class="btn btn-secondary">Delete</button>
            <button type="button" class="btn btn-success">Preview</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";

export default {
  name: "Blog",
  components: {
    SideBar,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
.dropdown {
  margin-bottom: 1rem;
}

button {
  width: 100px;
}
</style>
