<template>
  <q-page class="bg-light-green window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <form @submit.prevent="login()">
        <q-card square class="shadow-24" style="width:300px;height:500px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Company &amp; Co</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="add" color="purple-4" />
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
            
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <q-btn round color="indigo-7">
                <q-icon name="fab fa-facebook-f" size="1.2rem" />
              </q-btn>
              <q-btn round color="red-8">
                <q-icon name="fab fa-google-plus-g" size="1.2rem" />
              </q-btn>
              <q-btn round color="light-blue-5">
                <q-icon name="fab fa-twitter" size="1.2rem" />
              </q-btn>
            </div>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" type="submit" label="Sign In" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Forgot your password?</p>
          </q-card-section>
        </q-card>
        </form>
      </div>
    </div>
      </div>
    </div>
    <div @click="alert = !alert">alert</div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
///import { email,required } from 'vuelidate/lib/validators';

export default {
  name: 'PageSignIn',
  data () {
    return {
      form: {
        email: '',
        alert: false,
        password: ''
      }
    }
  },
  methods:{
    
   
    login()
        {
         

          this.alert();
         let credentials = {
              email: this.form.email,
              password: this.form.password
          }

          this.$axios({url:'http://13.52.107.31:4000/api/v1/fbo/login', data:credentials,method:'POST'})
              .then(async resp =>  { 
                               
                let data = {
                  token: resp.data.data.token,
                  user: resp.data.data

                };
                
                this.$axios.defaults.headers.common['accessToken'] = data.token;
                await this.$store.commit('auth/auth_success',data);
                
                this.$router.push('/home');
              })
              .catch(err =>  { 
                  //console.log(err.message);
                  this.Alert('Warning',err.response.data.message);
                //this.$q.loading.hide();
                //this.$q.notify({color:'negative',position: 'top',message: err.response.data.message});
              });
        },
        

  }
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>