package com.rionegro.rionegro.controllers;

import com.rionegro.rionegro.models.Empresa;
import com.rionegro.rionegro.repositories.EmpresaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/empresas")
public class EmpresaController {

    @Autowired
    private EmpresaRepository empresaRepository;

    @GetMapping
    public List<Empresa> list(){
        return empresaRepository.findAll();
    }

    @GetMapping
    @RequestMapping("/{id}")
    public Empresa get(@PathVariable Long id){
        return empresaRepository.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Empresa create(@RequestBody Empresa empresa){
        return empresaRepository.saveAndFlush(empresa);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        empresaRepository.deleteById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Empresa update(@PathVariable Long id, @RequestBody Empresa empresa){
        Empresa existingEmpresa = empresaRepository.getOne(id);
        BeanUtils.copyProperties(empresa, existingEmpresa, "id");
        return empresaRepository.saveAndFlush(existingEmpresa);
    }
}
