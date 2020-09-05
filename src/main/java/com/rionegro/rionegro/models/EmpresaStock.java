package com.rionegro.rionegro.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity(name = "empresa_stock")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class EmpresaStock {

    @JsonIgnore
    @EmbeddedId
    EmpresaAgroquimicoEspecificacionKey id;

    @ManyToOne
    @MapsId("id")
    @JoinColumn(name = "id")
    Empresa empresa;

    @JsonBackReference
    @ManyToOne
    @MapsId("id")
    @JoinColumn(name = "id")
    Agroquimico agroquimico;

    @ManyToOne
    @MapsId("id")
    @JoinColumn(name = "id")
    Especificacion especificacion;

    private float cantidad;

    public EmpresaAgroquimicoEspecificacionKey getId() {
        return id;
    }

    public void setId(EmpresaAgroquimicoEspecificacionKey id) {
        this.id = id;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public Agroquimico getAgroquimico() {
        return agroquimico;
    }

    public void setAgroquimico(Agroquimico agroquimico) {
        this.agroquimico = agroquimico;
    }

    public float getCantidad() {
        return cantidad;
    }

    public void setCantidad(float cantidad) {
        this.cantidad = cantidad;
    }

    public Especificacion getEspecificacion() {
        return especificacion;
    }

    public void setEspecificacion(Especificacion especificacion) {
        this.especificacion = especificacion;
    }
}
