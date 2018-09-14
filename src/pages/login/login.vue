<template>
  <login-template>

    <span slot="menuesquerdo">
      <img src="https://static.quizur.com/i/b/5b035c77702c13.471891555b035c775c3ff9.54480388.png"
      class="responsive-img">
    </span>

    <span slot="principal">
      <h2>Login</h2>

      <input type="text" placeholder="E-mail" v-model="email" />
      <input type="password" placeholder="Senha" v-model="password" />
      <button class="btn" v-on:click="login()">Entrar</button>
      <button class="btn orange" v-on:click="cadastro = !cadastro">Cadastra-se</button>
    </span>

  </login-template>
</template>

<script>
import LoginTemplate from '@/templates/LoginTemplate'
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email:'',
      password: ''
    }
  },
  components: {
    LoginTemplate,
  },
  methods:{
    login(){
      axios.post('http://127.0.0.1:8000/api/login', {
        email: this.email,
        password: this.password
      })
      .then(function (response) {
        if(response.data.token){
          //usuario logado com sucesso
          console.log('login com sucesso');
          sessionStorage.setItem('usuario', JSON.stringify(response.data));
          this.$router.push('/');
        } else if (response.data.status == false) {
          //dados de acesso errado
          console.log('errou no login');
          alert('Login invávido!');
        } else {
          console.log('erros somente.');
          let error = '';
          for(let erro of Object.values(response.data)){
            error += erro + ' ';
          }
          alert(error);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert('Error: Tente novamente mais tarde!');
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
