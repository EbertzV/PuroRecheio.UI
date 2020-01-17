<template>
    <v-card pl-2 class="elevation-10">
        <v-layout text-xs-center wrap>
            <v-flex xs12 sm4 md4>
                <v-img xs2 sm2 md2 :src="require('../assets/logo_transparent.png')" class="my-3" contain height="250"></v-img>
            </v-flex>
            <v-flex xs12 sm4 md4 align-self-center>
            <h1 class="cabecalho" >Puro Recheio</h1>
            </v-flex>
            <v-flex>
        
            </v-flex>
        </v-layout>

        <v-layout >
                <v-toolbar color="pink lighten-4 elevation-12 ">
                    <v-toolbar-items>
                        <v-btn class="botao" color="pink lighten-4" :to="{ name: 'home'}">Página inicial</v-btn>
                        <v-btn class="botao" color="pink lighten-4" :to="{ name: 'catalogo'}">Conheça nossos produtos</v-btn>
                        <v-btn class="botao" color="pink lighten-4" :to="{ name: 'pedidos'}">Faça seu pedido</v-btn>
                        <v-btn class="botao" color="pink lighten-4" :to="{ name: 'contato'}">Contate-nos</v-btn>  
                    </v-toolbar-items>
                    
                </v-toolbar>
            
        </v-layout>

        <v-layout>
            <v-flex>
                
            </v-flex>
        </v-layout>
    </v-card> 
</template>

<script>
export default {
    
}
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');
    .botao
    {
        letter-spacing: 3px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    }

    .cabecalho{
        letter-spacing: 10px;
        font-family: 'Satisfy', cursive;
        font-size: 100px;
    }
</style>