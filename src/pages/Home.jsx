import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../componets/Navbar";
import PokemonCard from "../componets/PokemonCard";


export const Home = () =>{
    const [pokemons, setPokemons]= useState([]);
    useEffect(()=>{
        getPokemons();
    }, []);

    const getPokemons = () => {
      var endpoints = [];
      for (var i = 1; i < 53 ; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        
      }
      
      axios.all(endpoints.map((endpoint)=> axios.get(endpoint)))
      .then((res)=>setPokemons(res));
    };
   
    return(
        <div>
            <Navbar/>
            <Container maxWidth="false">
              <Grid container>
                {pokemons.map((pokemon, key)=>(             
                <Grid item xs={3} key={key}>
                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
                </Grid>))}
              </Grid>
            </Container>
            
        </div>
    )
}