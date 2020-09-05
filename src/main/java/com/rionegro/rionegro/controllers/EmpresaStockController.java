package com.rionegro.rionegro.controllers;

import com.rionegro.rionegro.models.EmpresaAgroquimicoEspecificacionKey;
import com.rionegro.rionegro.models.EmpresaStock;
import com.rionegro.rionegro.repositories.EmpresaStockRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/empresas/stock")
public class EmpresaStockController {

    @Autowired
    private EmpresaStockRepository empresaStockRepository;

    @GetMapping
    public List<EmpresaStock> list(){
        return empresaStockRepository.findAll();
    }

    @GetMapping
    @RequestMapping
    public EmpresaStock getOne(@RequestBody EmpresaAgroquimicoEspecificacionKey key){
        return empresaStockRepository.getOne(key);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EmpresaStock create(@RequestBody EmpresaStock empresaStock){
        return empresaStockRepository.saveAndFlush(empresaStock);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@RequestBody EmpresaAgroquimicoEspecificacionKey id){
        empresaStockRepository.deleteById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public EmpresaStock update(@RequestBody EmpresaAgroquimicoEspecificacionKey id, @RequestBody EmpresaStock empresaStock){
        EmpresaStock existingEmpresaStock = empresaStockRepository.getOne(id);
        BeanUtils.copyProperties(empresaStock, existingEmpresaStock, "id");
        return empresaStockRepository.saveAndFlush(existingEmpresaStock);
    }
}
