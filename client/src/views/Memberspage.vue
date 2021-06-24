<template>
  <div class="container">
    <h1>Blog A</h1>
    <br />
    <div class="d-flex flex-row">
      <div class="p-2">
        <h5>
          <i><font-awesome-icon icon="user"/></i>John Doe
        </h5>
      </div>
      <div class="p-2">
        <h5>
          <i><font-awesome-icon icon="clock"/></i>22 June 2021
        </h5>
      </div>
    </div>
    <br />
    <p class="text-justify">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
    </p>
    <img
      src="https://i.postimg.cc/QNygXNNj/Slide1.jpg"
      alt=""
      style="width:100%; margin-bottom:5vh"
    />
    <img
      src="https://i.postimg.cc/MHCj1TXR/Slide3.jpg"
      alt=""
      style="width:100%; margin-bottom:5vh"
    />
    <p class="text-justify">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
      assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut
      officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
      repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
      tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
      consequatur aut perferendis doloribus asperiores repellat.
    </p>
    <div class="d-flex flex-row">
      <div class="p-2">
        <h5>
          <i><font-awesome-icon icon="user"/></i>John Doe
        </h5>
      </div>
      <div class="p-2">
        <h5>
          <i><font-awesome-icon icon="clock"/></i>22 June 2021
        </h5>
      </div>
    </div>
    <hr />
    <h3>Archive</h3>
    <div class="dropdown">
      <button class="dropbtn">2021</button>
      <div class="dropdown-content">
        <a href="#">January</a>
        <a href="#">February</a>
        <a href="#">March</a>
        <a href="#">April</a>
        <a href="#">May</a>
        <a href="#">June</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">2020</button>
      <div class="dropdown-content">
        <a href="#">January</a>
        <a href="#">February</a>
        <a href="#">March</a>
        <a href="#">April</a>
        <a href="#">May</a>
        <a href="#">June</a>
        <a href="#">July</a>
        <a href="#">August</a>
        <a href="#">September</a>
        <a href="#">October</a>
        <a href="#">November</a>
        <a href="#">December</a>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">2019</button>
      <div class="dropdown-content">
        <a href="#">January</a>
        <a href="#">February</a>
        <a href="#">March</a>
        <a href="#">April</a>
        <a href="#">May</a>
        <a href="#">June</a>
        <a href="#">July</a>
        <a href="#">August</a>
        <a href="#">September</a>
        <a href="#">October</a>
        <a href="#">November</a>
        <a href="#">December</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Memberspage",
};
</script>

<style scoped>
.container {
  width: 80%;
  padding-top: 5vh;
}

h1 {
  color: #5cb85c;
}

i {
  margin-right: 1.5vw;
}

.dropbtn {
  background-color: #4caf50;
  color: white;
  width:90%;
  padding: 16px;
  margin-right: 1.5vw;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
  width:30%;
  margin-bottom: 10vh;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  bottom: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
