<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
    
    <div class="column q-pa-lg">
      <div class="row">
        <form @submit.prevent="register()">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Registration</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="close" color="purple-4" />
            </div>
          </q-card-section>
          <q-card-section>
            
              <q-input square clearable v-model="form.email" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              
              <q-input square clearable v-model="form.password" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <q-input square clearable v-model="form.confirmPassword" type="password" label="confirmPassword">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" type="submit" label="Get Started" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Return to login</p>
          </q-card-section>
        </q-card>
        </form>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      form:{email: '',
      password: '',
      confirmPassword: '',
      }
    }
  },
   methods:{
    register()
        {
         let registerData = {
              email: this.form.email,
              password: this.form.password,
              confirmPassword: this.form.password,
              terms:true
          }

          this.$axios({url:'http://13.52.107.31:4000/api/v1/fbo/sign-up', data:registerData,method:'POST'})
              .then(async resp =>  {  
                                
                                let data = {
                                   
                                  token: resp.data.data.datatoken,
                                  user: resp.data.data
                                };
                                
                                
                                this.$axios.defaults.headers.common['accessToken'] = data.token;
                                await this.$store.commit('auth/auth_success',data);
                               
                                this.$router.push('/home');
                              })
              .catch(err =>  { 
                                 //console.log(err);
                                //this.$q.loading.hide();
                                //this.$q.notify({color:'negative',position: 'top',message: err.response.data.message});
                              });
        },

  }
  
}
</script>

<style>
</style>