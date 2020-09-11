<template>
<v-container>
    <v-row>
      <v-col>
        <v-input block :value="nombre" white class="blue--text">Asesor: Juan Fajardo</v-input>
        <!--<v-input type="string" name="height"  :value="nombre"  /> -->
      </v-col>
      <v-col>
        <v-btn x-small color="light blue">Crear diagnóstico</v-btn>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="9">
            <h1 class="orange--text">Lista de Indicadores</h1>
        </v-col>
        <v-col cols="3">
            <v-btn class="text-capitalize"> <v-icon>mdi-filter</v-icon>Generar reporte</v-btn>
            <v-icon right dark>mdi-cloud-upload</v-icon>
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
            <template v-slot:item.kpI4="{ item }">
                <v-span>{{item.kpI4}}</v-span>
                <v-avatar :color="getKp4(item.kpI4)" dark size="12"></v-avatar> 
            </template>
            <template v-slot:item.kpI5="{ item }">
                <v-span>{{item.kpI5}}</v-span>
                <v-avatar :color="getKp5(item.kpI5)" dark size="12"></v-avatar> 
            </template>
            <template v-slot:item.kpI6="{ item }">
                <v-span>{{item.kpI6}}</v-span>
                <v-avatar :color="getKp6(item.kpI6)" dark size="12"></v-avatar> 
            </template>
           <!-- hshs-->
             
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
    <v-row>
        <v-col >
            <h2 class="orange--text">Cuadro evolutivo</h2>
        </v-col>
    </v-row>
    <v-row>
        <v-data-table
            :headers="evolutivo"
            :items="dataEvolutivo"
            :sort-by="['nombre']"
            :sort-desc="[true]"
            class="elevation-1"
        >
            <template v-slot:item.semana1="{ item }">
                <v-span>{{item.semana1}}</v-span>
                <v-avatar :color="getSemana(item.semana1)" dark size="12"></v-avatar>
            </template>
            <template v-slot:item.semana2="{ item }">
                <v-span>{{item.semana2}}</v-span>
                <v-avatar :color="getSemana(item.semana2)" dark size="12"></v-avatar>
            </template>
            <template v-slot:item.semana3="{ item }">
                <v-span>{{item.semana3}}</v-span>
                <v-avatar :color="getSemana(item.semana3)" dark size="12"></v-avatar>
            </template>
            <template v-slot:item.semana4="{ item }">
                <v-span>{{item.semana4}}</v-span>
                <v-avatar :color="getSemana(item.semana4)" dark size="12"></v-avatar>
            </template>
        </v-data-table>
    </v-row>
    <v-row>
        <h2 class="orange--text">Gráfica</h2>
    </v-row>
 </v-container>
</template>
<script>

export default {
    name: 'Indicadores',
    data: ()=> ({
       nombre: "Ana",
       dataGrafico: [4,2,7,1,8,3,5],
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
          { text: 'kpI4', value: 'kpI4' },
          { text: 'kpI5', value: 'kpI5' },
          { text: 'kpI6', value: 'kpI6' },
         
        ],
       dataColaboradores : [
           {nombre: "Juan Fajardo", estado:"rojo", kpI1:"75%", kpI2:480, kpI3:"60%", kpI4:"75%", kpI5:280, kpI6:"60%" },
       ],
       evolutivo:[
           { text: 'Nombre de indicador', value: 'nombre' },
           { text: 'Semana1', value: 'semana1' },
           { text: 'Cuartil', value: 'cuartil1' },
           { text: 'Semana2', value: 'semana2' },
           { text: 'Cuartil', value: 'cuartil2' },
           { text: 'Semana3', value: 'semana3' },
           { text: 'Cuartil', value: 'cuartil3' },
           { text: 'Semana4', value: 'semana4' },
           { text: 'Cuartil', value: 'cuartil4' },
       ],
       dataEvolutivo : [
           {nombre: "Nombre del indicador HTC", semana1:"65%", cuartil1: "Q4",  semana2:"66%", cuartil2: "Q4",  semana3:"75%", cuartil3: "Q3",  semana4:"75%", cuartil4: "Q3"},
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
         getKp4(kpI4){
            if (kpI4 == "75%") return 'red'
        },
         getKp5(kpI5){
            if (kpI5 == 280) return 'red'
            
        },
         getKp6(kpI6){
            if (kpI6 == "60%") return 'red'
           
        },
        getSemana(semana){
            if(semana == "65%" || semana=="66%"|| semana=="75%") return 'red'
        },
        
       }
    
}
</script>