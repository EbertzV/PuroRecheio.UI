<template>
    <v-card pl-2>
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
                <v-toolbar color="pink lighten-4">
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
                <v-card>
                    <v-card-title class="cabecalho-conteudo">Conheça nossos produtos: </v-card-title>
                    <v-card-text>
                        <v-layout>
                            <v-flex class="card" v-for="p in produtos" v-bind:key="p.id">
                                <v-img :src=p.imagem xs2 sm2 md2 class="my-3"/>
                                <h4>Sabor: {{p.sabor}}</h4>
                                <h4>Tamanho: {{p.tamanho}}</h4>
                                <h4>Sabor: {{p.valor}}</h4>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <v-footer fixed color="purple lighten-4">
            <v-container>    
                <p>2020 - Puro Recheio</p>
            </v-container>
        </v-footer> 
    </v-card> 
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            produtos: [

            ]
        }
    },
    mounted(){
       axios({
           method: "GET",
           "url": "http://purorecheio-info.azurewebsites.net/api/Produtos"
       }).then(result =>{   
                this.produtos = result.data;
            }, error => {
                this.produtos = error;
            });
    }
}
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');
    .botao
    {
        letter-spacing: 3px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    }

    .cabecalho-conteudo{
        letter-spacing: 3px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    }

    .cabecalho{
        letter-spacing: 10px;
        font-family: 'Satisfy', cursive;
        font-size: 100px;
    }
</style>