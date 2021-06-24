<template>
  <div class="row">
    <div class="col-md-3">
      <SideBar />
    </div>
    <div class="col-md-9">
      <div class="card" style="width: 80%;">
        <div class="card-body">
          <div class="row justify-content-around">
            <div class="image col-lg-4 ">
              <img
                src="https://i.postimg.cc/m2L69znq/searchpng-com-deafult-profile-icon-transparent-png-free-download.png"
                style="margin-left:10px"
              />
            </div>

            <div class="name-input col-lg-8">
              <input
                type="text"
                autocomplete="off"
                class="form-control"
                placeholder="Firstname"
              />
              <br />
              <input
                type="text"
                class="form-control"
                placeholder="Lastname"
                autocomplete="off"
              />
            </div>
          </div>

          <div class="contact-input row justify-content-around">
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control"
                placeholder="Address"
                autocomplete="off"
              />
              <br />
            </div>

            <div class="col-sm-5">
              <input
                type="text"
                class="form-control"
                placeholder="Contact No."
                autocomplete="off"
              />
              <br />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <textarea class="form-control" placeholder="About me"></textarea>
              <br />
            </div>
          </div>
          <button type="button" class="btn btn-success" style="width:90px">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";

export default {
  name: "Profile",
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

<style>
.image {
  text-align: center;
  margin: auto -30px;
}
.image img {
  height: 150px;
}

.name-input {
  padding-top: 20px;
}

.contact-input {
  margin-top: 20px;
}
</style>
