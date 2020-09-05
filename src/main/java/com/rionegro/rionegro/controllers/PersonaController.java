package com.rionegro.rionegro.controllers;

import com.rionegro.rionegro.models.Persona;
import com.rionegro.rionegro.repositories.PersonaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/personas")
public class PersonaController {
    @Autowired
    private PersonaRepository personaRepository;

    @GetMapping
    public List<Persona> list(){
        return personaRepository.findAll();
    }

    @GetMapping
    @RequestMapping("/{id}")
    public Persona get(@PathVariable Long id){
        return personaRepository.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Persona create(@RequestBody Persona persona){
        return personaRepository.saveAndFlush(persona);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        personaRepository.deleteById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Persona update(@PathVariable Long id, @RequestBody Persona persona){
        Persona existingPersona = personaRepository.getOne(id);
        BeanUtils.copyProperties(persona, existingPersona, "id");
        return personaRepository.saveAndFlush(existingPersona);
    }



}
