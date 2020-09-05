package com.rionegro.rionegro.controllers;

import com.rionegro.rionegro.models.Especificacion;
import com.rionegro.rionegro.repositories.EspecificacionRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/especificaciones")
public class EspecificacionController {

    @Autowired
    private EspecificacionRepository especificacionRepository;

    @GetMapping
    public List<Especificacion> list(){
        return especificacionRepository.findAll();
    }

    @GetMapping
    @RequestMapping("/{id}")
    public Especificacion get(@PathVariable Long id){
        return especificacionRepository.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Especificacion create(@RequestBody Especificacion especificacion){
        return especificacionRepository.saveAndFlush(especificacion);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        especificacionRepository.deleteById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Especificacion update(@PathVariable Long id, @RequestBody Especificacion especificacion){
        Especificacion existingEspecificacion = especificacionRepository.getOne(id);
        BeanUtils.copyProperties(especificacion, existingEspecificacion, "id");
        return especificacionRepository.saveAndFlush(existingEspecificacion);
    }
}
