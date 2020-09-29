package com.rionegro.rionegro.dtos;

import com.rionegro.rionegro.models.TipoAgroquimico;

import java.util.Objects;

public class AgroquimicoDTO {

    private Long id;
    private String nombre;
    private String descripcion;
    private String marca;
    TipoAgroquimico tipoAgroquimico;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Long getTipoAgroquimico() {
        return tipoAgroquimico.getId();
    }

    public void setTipoAgroquimico(TipoAgroquimico tipoAgroquimico) {
        this.tipoAgroquimico = tipoAgroquimico;
    }
}
