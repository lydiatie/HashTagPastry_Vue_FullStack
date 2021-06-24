<template>
  <div class="container">
    <div
      id="myCarousel"
      class="carousel slide carousel-fade"
      data-ride="carousel"
      data-interval="200"
    >
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            class="overlay-image"
            style="background-image:url(https://i.postimg.cc/QNygXNNj/Slide1.jpg);"
          ></div>
          <div class="container">
            <h1>Welcome to HashTagPastry</h1>
            <h3>
              Check out what is our members of charity doing behind the scenes!
            </h3>
            <router-link to="/members" class="btn btn-md btn-dark">
              Click here for more details
            </router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="overlay-image"
            style="background-image:url(https://i.postimg.cc/8C4WxNnQ/Slide2.jpg);"
          ></div>
          <div class="container">
            <h1>Welcome to HashTagPastry</h1>
            <h3>
              Check out what is our members of charity doing behind the scenes!
            </h3>
            <router-link to="/members" class="btn btn-md btn-dark">
              Click here for more details
            </router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="overlay-image"
            style="background-image:url(https://i.postimg.cc/MHCj1TXR/Slide3.jpg);"
          ></div>
          <div class="container">
            <h1>Welcome to HashTagPastry</h1>
            <h3>
              Check out what is our members of charity doing behind the scenes!
            </h3>
            <router-link to="/members" class="btn btn-md btn-dark">
              Click here for more details
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="archive-image container">
      <div class="row">
        <div class="col-md-8">
          <img
            src="https://i.postimg.cc/QNygXNNj/Slide1.jpg"
            alt=""
            style="width:100% "
          />
          <div class="image-title">
            <p>JANUARY 22, 2021</p>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque quo harum aut placeat quaerat ab esse quos beatae.
            </h4>
          </div>
        </div>
        <div class="col-md-4">
          <img
            class="img-two"
            src="https://i.postimg.cc/8C4WxNnQ/Slide2.jpg"
            alt=""
          />
          <img
            src="https://i.postimg.cc/MHCj1TXR/Slide3.jpg"
            alt=""
            style="width:100%;"
          />
        </div>
      </div>
      <div class="text-center" style="margin-top: 20px">
        <button type="button" class="btn btn-outline-dark rounded-pill">
          Load more
        </button>
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
    <!-- <div style="margin:50px">dsds</div> -->
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.carousel-item {
  height: 20rem;
  background: #000;
  color: white;
  position: relative;
  background-position: center;
  background-size: cover;
}

#myCarousel .container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 50px;
}

.overlay-image {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-position: center;
  background-size: cover;
  opacity: 0.5;
}

.archive-image {
  margin: 30px auto;
}

.archive-image img {
  border-radius: 20px;
  opacity: 0.8;
}

.col-md-8 img {
  margin-bottom: 20px;
  position: relative;
}

.col-md-4 .img-two {
  width: 100%;
  margin-bottom: 20px;
}

.image-title {
  color: white;
  position: absolute;
  top: 50%;
  left: 5%;
  text-align: center;
  text-shadow: 2px 2px 4px #000000;
}

.image-title p {
  font: size 1vh;
}

.h4,
h4 {
  font-size: 3vh;
  margin: 0 40px;
}

.dropbtn {
  background-color: #4caf50;
  color: white;
  width: 90%;
  padding: 16px;
  margin-right: 1.5vw;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 30%;
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
