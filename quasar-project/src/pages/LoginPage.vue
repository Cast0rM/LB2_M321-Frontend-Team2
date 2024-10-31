<template>
    <q-page class="q-pa-md">
      <div class="row justify-center items-center" style="height: 100vh">
        <q-card class="login-card q-pa-md">
          <q-card-section>
            <div class="text-h6 text-center">Login</div>
          </q-card-section>
  
          <q-card-section>
            <q-input
              filled
              v-model="username"
              label="Username"
              autofocus
              required
              class="q-mb-md"
            />
  
            <q-input
              filled
              v-model="password"
              label="Password"
              type="password"
              required
              class="q-mb-md"
            />
  
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
            <q-form @submit.prevent="onRegisterSubmit">
              <div class="row">
                <div class="col">
                  <q-input filled v-model="registerUsername" label="Username" required class="q-mb-md" />
                  <q-input
                    filled
                    v-model="registerEmail"
                    label="Email"
                    type="email"
                    required
                    class="q-mb-md"
                  />
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
                    v-model="registerFirstName"
                    label="First Name"
                    required
                    class="q-mb-md"
                  />
                  <q-input
                    filled
                    v-model="registerLastName"
                    label="Last Name"
                    required
                    class="q-mb-md"
                  />
                </div>
              </div>
              <q-card-actions align="right">
                <q-btn label="Cancel" flat @click="closeRegisterDialog" />
                <q-btn label="Register" color="primary" type="submit" />
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
  import { LoginApi } from 'src/services/api'; // Ensure this is correctly set up
  import { useRouter } from 'vue-router'
  
  const router = useRouter();

  const username = ref('');
  const password = ref('');
  const showRegisterDialog = ref(false);
  const registerUsername = ref('');
  const registerEmail = ref('');
  const registerFirstName = ref('');
  const registerLastName = ref('');
  const registerPassword = ref('');
  
  const onLogin = async () => {
    if (!username.value || !password.value) {
      Notify.create({
        type: 'negative',
        message: 'Please enter your username and password.',
      });
      return;
    }
      const res = await LoginApi.post('/token', new URLSearchParams({
        username: username.value,
        password: password.value,
      }).toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  if(res.status === 200)
  {
    const token = res.data.access_token;
    sessionStorage.setItem('token', token);
    console.log('token set: ', token)
    
    router.push('/');
    
    console.log('Login successful:', res.data);
  }
    else{

      console.error('Login failed:', error);
      Notify.create({
        type: 'negative',
        message: error.res?.data?.detail || 'Login failed. Please try again.',
      });
    }
  };
  
  const openRegisterDialog = () => {
    showRegisterDialog.value = true;
  };
  
  const closeRegisterDialog = () => {
    showRegisterDialog.value = false;
    resetRegisterForm(); // Reset the form when closing
  };
  
  const resetRegisterForm = () => {
    registerUsername.value = '';
    registerEmail.value = '';
    registerFirstName.value = '';
    registerLastName.value = '';
    registerPassword.value = '';
  };
  
  const onRegisterSubmit = async () => {
    // Check all fields are filled
    if (!registerUsername.value || !registerEmail.value || !registerFirstName.value || !registerLastName.value || !registerPassword.value) {
      Notify.create({
        type: 'negative',
        message: 'Please fill in all fields.',
      });
      return;
    }
  
    try {
      // Sending the registration request
      const response = await LoginApi.post('/register', {
        username: registerUsername.value,
        email: registerEmail.value,
        first_name: registerFirstName.value, // Use "first_name" as specified
        last_name: registerLastName.value, // Use "last_name" as specified
        password: registerPassword.value,
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      Notify.create({
        type: 'positive',
        message: 'Registration successful! Please log in.',
      });
  
      closeRegisterDialog(); // Close the dialog
    } catch (error) {
      console.error('Registration failed:', error);
      Notify.create({
        type: 'negative',
        message: error.response?.data?.detail || 'Registration failed. Please try again.',
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
  