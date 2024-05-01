<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-5 pa-16">
    <form @submit.prevent="login">
      <v-card color="bg-primary" class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Email</div>

        <v-text-field v-model="user.email" density="compact" placeholder="Seu email" prepend-inner-icon="mdi-email-outline"
          variant="outlined">
        </v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Senha

          <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
            Forgot login password ?</a>
        </div>

        <v-text-field v-model="user.password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'" density="compact" placeholder="Sua senha"
          prepend-inner-icon="mdi-lock-outline" variant="outlined"
          @click:append-inner="visible = !visible"></v-text-field>

        <v-card class="" color="surface-variant" variant="tonal">
        </v-card>

        <v-btn type="submit" class="mb-8" color="blue" size="large" variant="tonal" block>
          Entrar
        </v-btn>

        <v-card-text class="text-center" hidden>
          <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </form>
  </div>
</template>
<script setup>
// import  http from '@/services/http.js'
import { ref, reactive } from 'vue'
import http from '@/services/http.js'
import { useAuth } from '@/store/auth.js'

const auth = useAuth();

const visible = ref(false);

const user = reactive({
  email: '',
  password: ''
})

async function login() {
  try {
    const { data } = await http.post('/', user);
    auth.setToken(data.token);
    auth.setUser(data.user);
  }catch(error){
    console.log(error?.respose?.data);
  }
}

</script>