<template>
  <login-template>

    <span slot="menuesquerdo">
      <img src="https://static.quizur.com/i/b/5b035c77702c13.471891555b035c775c3ff9.54480388.png"
      class="responsive-img">
    </span>

    <span slot="principal">
      <h2>Cadastro</h2>

      <input type="text" placeholder="Nome" v-model="name" />
      <input type="text" placeholder="E-mail" v-model="email" />
      <input type="password" placeholder="Senha" v-model="password" />
      <input type="password" placeholder="Confirme sua senha" v-model="password_confirmation" />
      <button class="btn" v-on:click="cadastro()">Enviar</button>
      <button class="btn orange">Ja tenho conta</button>
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
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  components: {
    LoginTemplate
  },
  methods:{
    cadastro(){
      axios.post('http://127.0.0.1:8000/api/cadastro', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
      .then(function (response) {
        if(response.data.token){
          //usuario logado com sucesso
          console.log('cadastrado com sucesso');
          sessionStorage.setItem('usuario', JSON.stringify(response.data));
          this.$router.push('/');
        } else if (response.data.status == false) {
          alert('erro ao realizar o cadastro');
        } else {
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
