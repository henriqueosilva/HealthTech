<?php

/**
 * Esse arquivo define a classe do paciente e seus atributos
 */

 namespace App\Classes;

 use App\Models\AtendimentoModel;

 class AtendimentoClass
 {
     private string $pid;
     private string $origin;
     private string $res;

     public function __construct(array $atendimento_array)
     {
         $this->pid = $atendimento_array['pid'];
         $this->origin = $atendimento_array['origin'];
     }
     public function getPID()
     {
         return $this->pid;
     }
     public function setPID(int $pid)
     {
         $this->pid = $pid;
         return $this->pid;
     }
     public function getOrigin()
     {
         return $this->origin ;
     }
     public function save()
     {
        $this->res = AtendimentoModel::insert($this);
        return $this->res;
     }
     public function getRes()
     {
         return $this->res;
     }


 }