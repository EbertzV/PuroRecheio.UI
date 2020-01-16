<template>
    <v-card pl-2 class="elevation-10">
        <v-layout text-xs-center wrap>
            <v-flex xs12 sm4 md4>
                <v-img xs2 sm2 md2 :src="require('../assets/logo_transparent.png')" class="my-3" contain height="250"></v-img>
            </v-flex>
            <v-flex xs12 sm4 md4 align-self-center>
            <h1 class="display-4" >Puro Recheio</h1>
            </v-flex>
            <v-flex>
        
            </v-flex>
        </v-layout>

        <v-layout>
            <v-flex>
                <v-toolbar>
                    <v-btn>Página inicial</v-btn>
                    <v-btn>Conheça nossos produtos</v-btn>
                    <v-btn>Faça seu pedido</v-btn>
                    <v-btn>Contate-nos</v-btn>
                </v-toolbar>
            </v-flex>
        </v-layout>

        <v-layout>
            <v-flex>
                <v-img :src="require('../assets/facebook_cover_photo_2.png')"></v-img>
            </v-flex>
        </v-layout>
    </v-card> 

</template>

<script>

export default {

}
</script>
