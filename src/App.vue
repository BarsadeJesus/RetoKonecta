<template>
  <v-app>
     <v-container>
       <v-row>
         <v-col>
            <Header/>
         </v-col>
       </v-row>
        <v-row>
          <v-col cols="2">
             <Coaching />
          </v-col>
         <v-col cols="10">
           <Indicadores />
           <Colaborador /> 
         </v-col>
       </v-row>
     </v-container>

  </v-app>
</template>

<script>

import Header from './components/Header';
import Coaching from './components/Coaching';
import Indicadores from './components/Indicadores';
import Colaborador from './components/Colaborador';


export default {
  name: 'App',
  components: {
    Header,
    Coaching,
    Indicadores,
    Colaborador
  },

  data: () => ({
    //
  }),
};
</script>
