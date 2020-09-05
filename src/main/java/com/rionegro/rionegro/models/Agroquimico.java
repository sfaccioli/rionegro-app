package com.rionegro.rionegro.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "agroquimico")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Agroquimico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String descripcion;
    private String marca;

    @JsonManagedReference
    @OneToMany(mappedBy = "agroquimico")
    Set<EmpresaStock> stockEmpresa;

    @JsonManagedReference
    @ManyToOne
    @MapsId("id")
    @JoinColumn(name = "id")
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

    public Set<EmpresaStock> getStockEmpresa() {
        return stockEmpresa;
    }

    public void setStockEmpresa(Set<EmpresaStock> stockEmpresa) {
        this.stockEmpresa = stockEmpresa;
    }

    public TipoAgroquimico getTipoAgroquimico() {
        return tipoAgroquimico;
    }

    public void setTipoAgroquimico(TipoAgroquimico tipoAgroquimico) {
        this.tipoAgroquimico = tipoAgroquimico;
    }
}
