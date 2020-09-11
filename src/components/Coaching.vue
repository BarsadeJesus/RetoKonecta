<template>
    <v-navigation-drawer v-model="drawer" class="grey lighten-4">
        <v-layout mt-4 column align-center>
            <v-flex >
                <v-avatar >
                    <img src="https://randomuser.me/api/portraits/women/8.jpg" />
                </v-avatar>
                
            </v-flex>
            <v-flex>
                <h5 class="blue--text mt-2" >Ana Torres</h5>
            </v-flex>
            <v-flex>
                <v-list dense>
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                    link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-flex>
        </v-layout>
        
    </v-navigation-drawer> 
</template>
<script>
export default {
    name: 'Coaching',
    data() {
        return {
            drawer: true,
            items: [
          { title: 'Inicio', icon: 'mdi-home' },
          { title: 'Seguimientos', icon: 'mdi-account' },
          { title: 'Notificaciones', icon: 'mdi-bell' },
          { title: 'Perfil', icon: 'mdi-account' },
         
        ],
        }
    }
}
</script>