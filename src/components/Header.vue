<template>
  <header>
    <div
      id="containerHeader"
      class="d-flex flex-column flex-md-row align-items-center"
    >
      <router-link
        id="logo"
        to="/"
        class="d-flex align-items-center text-dark text-decoration-none"
      >
        <i class="fas fa-store-alt me-1"></i>
        <span class="fs-4">E-commerces.</span>
        <span id="charO" class="fs-4"></span>
        <span id="charN" class="fs-4"></span>
      </router-link>
      <nav id="navBar" class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <div id="divLinks">
          <a
            id="myecommerce"
            class="me-3 py-2 text-dark text-decoration-none me-5"
            @click="myecommerce"
            >My Commerce</a
          >
          <a
            id="pricing"
            class="me-5 py-2 text-dark text-decoration-none"
            href="#"
            >Pricings</a
          >
        </div>
        <router-link
          v-if="$store.state.token === null"
          to="login"
          class="btn btn-info text-white py-2 text-decoration-none"
          >Login</router-link
        >
        <button
          @click="logout"
          v-if="$store.state.token !== null"
          class="btn btn-danger"
        >
          Logout
        </button>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      userName: null,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      this.$store.state.token = null;
      this.$store.state.userName = null;
    },
    myecommerce() {
      if (this.$store.state.userName == null) {
        this.$router.push('/login') 
      } else {
        this.$router.push('/myecommerce') 
      }
    }
  },
};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 90px;
}
#containerHeader {
  width: 90%;
}

/* Logo Effect */
#logo i,
#charO,
#charN {
  transition: 0.3s all;
}
#logo:hover i {
  color: orange;
}
#charO,
#charN {
  position: relative;
}

#logo #charO::before {
  content: "O";
  position: absolute;
  bottom: -20px;
  transition: 0.3s;
}
#logo #charN::before {
  content: "n";
  position: absolute;
  bottom: -20px;
  left: 17px;
  transition: 0.3s;
  transition-delay: 0.3s;
}
#logo:hover #charO::before,
#logo:hover #charN::before {
  bottom: 10px;
  opacity: 0;
}

#logo #charO::after,
#logo #charN::after {
  content: "O";
  position: absolute;
  bottom: -40px;
  left: 0px;
  opacity: 0;
  transition: 0.3s;
}
#logo #charN::after {
  content: "n";
  position: absolute;
  bottom: -40px;
  transition-delay: 0.3s;
  left: 17px;
}

#logo:hover #charO::after,
#logo:hover #charN::after {
  bottom: -19px;
  opacity: 1;
  color: orange;
}

/* Pricing effect */
#pricing {
  position: relative;
  transition: 0.5s;
}
#pricing:hover {
  color: orange !important;
}
#pricing::before {
  content: "$";
  font-weight: bolder;
  font-size: 19px;
  position: absolute;
  left: -15px;
  bottom: 7px;
  transition: 0.3s;
  padding: 0 10px 0 0;
}
#pricing::after {
  content: "$";
  font-weight: bolder;
  font-size: 19px;
  position: absolute;
  left: -15px;
  bottom: -15px;
  opacity: 0;
  transition: 0.5s;
  padding: 0 10px 0 0;
}
#pricing:hover::before {
  bottom: 30px;
  opacity: 0;
}
#pricing:hover::after {
  bottom: 7px;
  opacity: 1;
  color: orange;
}

/* My ecommerce effect */
#myecommerce {
  position: relative;
  transition: 0.5s;
}
#myecommerce:hover {
  color: orange !important;
}
#myecommerce::before {
  font-family: "Font Awesome 5 Free";
  content: "\e065";
  font-weight: bolder;
  font-size: 19px;
  position: absolute;
  left: -25px;
  bottom: 7px;
  transition: 0.3s;
  padding: 0 10px 0 0;
}
#myecommerce::after {
  font-family: "Font Awesome 5 Free";
  content: "\e065";
  font-weight: bolder;
  font-size: 19px;
  position: absolute;
  left: -25px;
  bottom: -15px;
  opacity: 0;
  transition: 0.5s;
  padding: 0 10px 0 0;
}
#myecommerce:hover::before {
  bottom: 30px;
  opacity: 0;
}
#myecommerce:hover::after {
  bottom: 7px;
  opacity: 1;
  color: orange;
}

#divLinks {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 775px) {
  #navBar {
    margin-left: 55px;
    margin-bottom: 100px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  header {
    height: 130px;
  }
}
</style>