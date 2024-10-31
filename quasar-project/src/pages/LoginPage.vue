<template>
    <q-page class="q-pa-md">
      <div class="row justify-center items-center" style="height: 100vh">
        <q-card class="login-card q-pa-md">
          <q-card-section>
            <div class="text-h6 text-center">Login</div>
          </q-card-section>
  
          <q-card-section>
            <!-- Username Input -->
            <q-input
              filled
              v-model="username"
              label="Username"
              autofocus
              required
              class="q-mb-md"
            />
            <!-- Password Input -->
            <q-input
              filled
              v-model="password"
              label="Password"
              type="password"
              required
              class="q-mb-md"
            />
  
            <!-- Action Buttons (placed in a row) -->
            <div class="row q-gutter-md">
              <q-btn label="Login" color="primary" class="col" @click="onLogin" />
              <q-btn label="Register" color="primary" outline class="col" @click="openRegisterDialog" />
            </div>
          </q-card-section>
        </q-card>
      </div>
  
      <q-dialog v-model="showRegisterDialog" persistent style="min-width: 400px; min-height: 300px;">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Register</div>
        <q-space />
        <q-btn icon="close" flat round dense @click="closeRegisterDialog" />
      </q-card-section>

      <q-card-section class="q-pa-md">
        <!-- Wrap inputs in a q-form -->
        <q-form @submit.prevent="onRegisterSubmit"> <!-- Prevent default form submission -->
          <div class="row">
            <div class="col">
              <q-input filled v-model="registerUsername" label="Username" required class="q-mb-md" />
              <q-input
                filled
                v-model="registerPassword"
                label="Password"
                type="password"
                required
                class="q-mb-md"
              />
              <q-input
                filled
                v-model="registerEmail"
                label="Email"
                type="email"
                required
                class="q-mb-md"
              />
            </div>
          </div>
          <q-card-actions align="right">
            <q-btn label="Cancel" flat @click="closeRegisterDialog" />
            <q-btn label="Register" color="primary" type="submit" /> <!-- Submit type -->
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
    </q-page>
  </template>
  
  <script setup>
import { ref } from 'vue';
import { Notify } from 'quasar';

const username = ref('');
const password = ref('');

const onLogin = async () => {
  if (!username.value || !password.value) {
    Notify.create({
      message: 'Fill all the input fields',
      icon: 'warning',
      color: 'negative',
      position: 'top',
    });
    return;
  }
  
  try {
    // Your login API call here
    const response = await LoginApi.post('/controller/login', {
      username: username.value,
      password: password.value,
    });
    console.log('Login successful:', response.data);
  } catch (error) {
    console.error('Login failed:', error);
    Notify.create({
      message: 'Login failed, please try again: '+ {error},
      icon: 'error',
      color: 'negative',
      position: 'top',
    });
  }
};
</script>

<style scoped>
.login-card {
  max-width: 400px;
  width: 100%;
}
</style>