<template>
<container>
    <v-row> 
        <v-vol>
            <Colaborador />
        </v-vol>
    </v-row>  
</container>
</template>
<script >

import Colaborador from '@/components/Colaborador.vue'
export default ({
    name:'Colaborator',
    components:{
        Colaborador
    }
})
</script>