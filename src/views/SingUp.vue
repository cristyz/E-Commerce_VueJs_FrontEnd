<template>
   <div id="singup" class="text-center">
       <img src="../assets/singup.jpg" alt="">
    <div class="form-signin">
        <i class="fas fa-store-alt" style="font-size: 45px; color: rgb(86, 186, 237)"></i>
        <h1 class="h3 my-3 fs-1 font-weight-normal" style="color: rgb(86, 186, 237)">Please sign in</h1>
        <label for="inputEmail" class="fs-4">User Name</label>
        <input v-model="name" type="text" id="inputEmail" class="form-control" placeholder="Name" required="" autofocus="">
        <label for="inputPassword" class="fs-4">Password</label>
        <input v-model="password" type="password" id="inputPassword" class="form-control mb-4" placeholder="Password" required="">
        <button @click="createUser" class="btn btn-lg btn-primary btn-block">Create Account</button>
        <h3 v-if="statusCreateNewUser != null" style="border-radius: 30px" class="mt-3 status">{{statusCreateNewUser}}</h3>
    </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SingUp',
    data() {
        return {
            name: null,
            password: null,
            statusCreateNewUser: null
        }
    },
    methods: {
        async createUser() {
            this.statusCreateNewUser = null


            let dados = {
                name: this.name,
                password: this.password
            }

            await axios.post('http://localhost:8888/newUser', dados)
                .then((e) => {
                    this.statusCreateNewUser = e.data.status
                })
                .catch((err) => {
                    this.statusCreateNewUser = err
                })
        }
    }
}
</script>

<style scoped>
#singup{
    width: 100%;
    display: flex;
    justify-content: center;
    height: 800px;
    align-items: center;
}
.form-signin{
    width: 60%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: 80%;
    padding: 60px 30px;
    background: rgba(255, 255, 255, 0.151);
    border-radius: 20px;
}
.status{
    box-shadow: rgba(0, 0, 0, 0.54) 0px 3px 8px;
    padding: 10px 0;
}

img{
    position: absolute;
    width: 100%;
    height: 800px;
    z-index: -100;
    object-fit: cover;
}
@media (max-width: 775px) {
  .form-signin{
      width: 90%;
  }
}
</style>