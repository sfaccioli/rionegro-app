package com.rionegro.rionegro.controllers;

import com.rionegro.rionegro.models.Agroquimico;
import com.rionegro.rionegro.repositories.AgroquimicoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/agroquimicos")
public class AgroquimicoController {

    @Autowired
    private AgroquimicoRepository agroquimicoRepository;


    @GetMapping
    public List<Agroquimico> list(){
        return agroquimicoRepository.findAll();
    }

    @GetMapping
    @RequestMapping("/{id}")
    public Agroquimico get(@PathVariable Long id){
        return agroquimicoRepository.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Agroquimico create(@RequestBody Agroquimico agroquimico){
        return agroquimicoRepository.saveAndFlush(agroquimico);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        agroquimicoRepository.deleteById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Agroquimico update(@PathVariable Long id, @RequestBody Agroquimico agroquimico){
        Agroquimico existingAgroquimico = agroquimicoRepository.getOne(id);
        BeanUtils.copyProperties(agroquimico, existingAgroquimico, "id");
        return agroquimicoRepository.saveAndFlush(existingAgroquimico);
    }
}
