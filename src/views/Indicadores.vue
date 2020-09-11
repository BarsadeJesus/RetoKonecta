<template>
<container>
    <v-row>
        <v-vol>
            <Indicadores />
        </v-vol>
    </v-row>  
</container>
</template>
<script >

import Indicadores from '@/components/Indicadores.vue'
export default ({
    name:'Indicadores',
    components:{
        Indicadores
    }
})
</script>