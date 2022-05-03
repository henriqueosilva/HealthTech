<?php

/**
 * Esse arquivo define a classe do paciente e seus atributos
 */

 namespace App\Classes;

 use App\Models\AtendimentoModel;

 class AtendimentoClass
 {
     private string $pid;
     private array $procedimentos;
     private string $res;

     public function __construct(array $atendimento_array)
     {
         $this->pid = $atendimento_array['pid'];
         $this->procedimentos = $atendimento_array['procedimentos'];
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
     public function getProcedimentos()
     {
         return $this->procedimentos ;
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