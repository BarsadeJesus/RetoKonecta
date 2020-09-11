<template>
<v-container>
    <v-row>
      <v-col>
        <v-input block :value="nombre" white class="blue--text">Hola Ana,</v-input>
        <!--<v-input type="string" name="height"  :value="nombre"  /> -->
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="9">
            <h1 class="orange--text">Panel de Indicadores</h1>
        </v-col>
        <v-col cols="3">
              <!-- <v-btn>Colaborador</v-btn>
               <Colaborador /> -->
            <v-btn class="text-capitalize"> <v-icon>mdi-filter</v-icon>Filtrar mis indicadores</v-btn>
            <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="4">
            <v-card-text>
                <div class="text-capitalize">  Cantidad de ventas x hora</div>
            </v-card-text>
            <v-sparkline :value="dataGrafico"
            show-labels>
            </v-sparkline>
        </v-col>
        <!-- <v-col cols="4">
            <v-flex>
             <v-card-text>
                <div class="text-capitalize">Ventas acumuladas</div>
            </v-card-text>
            <v-progress-circular
                :value="20"
                color="deep-orange lighten-2"
                v-bind:labels="labels" v-bind:option="option"
            >
            </v-progress-circular>
            </v-flex>
        </v-col> -->
        <v-col cols="4">
            <chartjs-doughnut v-bind:labels="labels" v-bind:datasets="datasets" v-bind:option="option"></chartjs-doughnut>
        </v-col>
            <v-col></v-col>
    </v-row>
    <v-row>
        <v-col>
            <h3 class="orange--text"> Resultados del equipo</h3>
        </v-col>
        <v-col>
        </v-col>
        <v-col align="center" justify="space-around">
            <!-- <router-link to="/colaborator"><v-btn  color="light silver" x-large >Buscar </v-btn></router-link> -->
             <v-btn>Buscar</v-btn> 
        </v-col>  
    </v-row>
    <v-row>
        <v-data-table
            :headers="headers"
            :items="dataColaboradores"
            :sort-by="['nombre', 'estado']"
            :sort-desc="[true, true]"
            class="elevation-1"
        >
      
            <template v-slot:item.estado="{ item }">
                <v-icon :color="getEstado(item.estado)" dark class="mdi mdi-account"></v-icon> 
            </template>
            <template v-slot:item.kpI1="{ item }">
                <v-span>{{item.kpI1}}</v-span>
                <v-avatar :color="getKp1(item.kpI1)" dark size="12"></v-avatar>
            </template>
             <template v-slot:item.kpI2="{ item }">
                  <v-span>{{item.kpI2}}</v-span>
                <v-avatar :color="getKp2(item.kpI2)" dark size="12"></v-avatar> 
            </template>
            <template v-slot:item.kpI3="{ item }">
                <v-span>{{item.kpI3}}</v-span>
                <v-avatar :color="getKp3(item.kpI3)" dark size="12"></v-avatar> 
            </template>
           <!-- hshs-->
             
            <template v-slot:item.bb="{ item }">
                <router-link to="/colaborator"><v-btn v-model="item.bb" x-small color="light blue">Crear diagnóstico</v-btn></router-link>
               
            </template>
           
                <!-- <v-btn x-small color="secondary">hhhh</v-btn> -->
    
        </v-data-table>
    </v-row>
    <v-row>    
        <template>
            <v-avatar color="red" dark size="12"></v-avatar>
             <v-span> Fuera de objetivo</v-span>
        </template>
        <template>
            <v-avatar color="yellow" dark size="12"></v-avatar>
             <v-span> Neutro</v-span>
        </template>
        <template>
            <v-avatar color="green" dark size="12"></v-avatar>
             <v-span> En objetivo</v-span>
        </template>  
    </v-row>
 </v-container>
</template>
<script>

export default {
    name: 'Indicadores',
    data: () => ({
       nombre: "Ana",
       dataGrafico: [4,2,7,1,8,3,5],
       labels: ["1820"],
       datasets:[
           {
             data: [1820],
             backgroundColor:["Green"],
           }
       ],
       option:{
           title: {
               display: true,
               position: "bottom",
               text:"Ventas concretadas"
           }
       },
       headers: [
          {
            text: 'Nombre',
            // align: 'start',
            // sortable: false,
            value: 'nombre',
          },
          { text: 'Estado', value: 'estado' },
          { text: 'kpI1', value: 'kpI1' },
          { text: 'kpI2', value: 'kpI2' },
          { text: 'kpI3', value: 'kpI3' },
          { text: '', value: 'bb' },
        ],
       dataColaboradores : [
           {nombre: "Juan Fajardo", estado:"rojo", kpI1:"75%", kpI2:280, kpI3:"60%", bb:true },
           {nombre: "Jorge Valentin", estado:"amarillo", kpI1:"75%", kpI2:280, kpI3:"70%", bb:true },
           {nombre: "Ybed Delgado", estado:"verde", kpI1:"82%", kpI2:280, kpI3:"87%", bb:true},
           {nombre: "Joshua Arnao", estado:"verde", kpI1:"80%", kpI2:220, kpI3:"84%", bb:true},
           {nombre: "Joshua Arnao", estado:"verde", kpI1:"75%", kpI2:520, kpI3:"60%", bb:true },
           {nombre: "Joshua Arnao", estado:"verde", kpI1:"75%", kpI2:520, kpI3:"60%", bb:true},
           {nombre: "Joshua Arnao", estado:"verde", kpI1:"75%", kpI2:520, kpI3:"60%", bb:true},
           {nombre: "Joshua Arnao", estado:"verde", kpI1:"75%", kpI2:529, kpI3:"60%", bb:true},
          {nombre: "Joshua Arnao", estado:"verde", kpI1:"75%", kpI2:520, kpI3:"60%", bb:true},
           {nombre: "Zulema Asto", estado:"rojo", kpI1:"75%", kpI2:520, kpI3:"60%", bb:true},
       ],
    }),
       methods: {
        getEstado(estado) {
            if (estado == "rojo") return 'red'
            else if (estado == "amarillo") return 'yellow'
            else return 'green'
        },
        getKp1(kpI1){
            if (kpI1 > "79%") return 'green'
            else if ( kpI1 > "70%" && kpI1 < "79%" ) return 'yellow'
            else if (kpI1 < "69%") return 'red'
        },
         getKp2(kpI2){
            if (kpI2 < 300) return 'green'
            else return 'red'
        },
         getKp3(kpI3){
            if (kpI3 > "79%") return 'green'
            else if ( kpI3 > "69%" && kpI3 < "79%" ) return 'yellow'
            else if (kpI3 < "69%") return 'red'
        },
        diagnostico(){
            this.$router.push('colaborator')
        }
       }
    
}
</script>