package com.rionegro.rionegro.controllers;

import com.rionegro.rionegro.models.TipoAgroquimico;
import com.rionegro.rionegro.repositories.TipoAgroquimicoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/agroquimicos/tipos")
public class TipoAgroquimicoController {

    @Autowired
    TipoAgroquimicoRepository tipoAgroquimicoRepository;



    @GetMapping
    public List<TipoAgroquimico> list(){
        return tipoAgroquimicoRepository.findAll();
    }

    @GetMapping
    @RequestMapping("/{id}")
    public TipoAgroquimico get(@PathVariable Long id){
        return tipoAgroquimicoRepository.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TipoAgroquimico create(@RequestBody TipoAgroquimico tipoAgroquimico){
        return tipoAgroquimicoRepository.saveAndFlush(tipoAgroquimico);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        tipoAgroquimicoRepository.deleteById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public TipoAgroquimico update(@PathVariable Long id, @RequestBody TipoAgroquimico tipoAgroquimico){
        TipoAgroquimico existingTipoAgroquimico = tipoAgroquimicoRepository.getOne(id);
        BeanUtils.copyProperties(tipoAgroquimico, existingTipoAgroquimico, "id");
        return tipoAgroquimicoRepository.saveAndFlush(existingTipoAgroquimico);
    }
}
