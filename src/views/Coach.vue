<template>
<container>
    <v-row>
        <v-col>
             <Header />
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <Coaching />
        </v-col>
        <v-vol>
            <Indicadores />
        </v-vol>
    </v-row>  
</container>
</template>
<script >
import Header from '@/components/Header.vue'
import Coaching from '@/components/Coaching.vue'
import Indicadores from '@/components/Indicadores.vue'
export default ({
    name:'Indicadores',
    components:{
        Header,
        Coaching,
        Indicadores
    }
})
</script>