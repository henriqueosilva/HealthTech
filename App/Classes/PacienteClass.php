<?php

/**
 * Esse arquivo define a classe do paciente e seus atributos
 */

 namespace App\Classes;

 use App\Models\PacienteModel;

 class PacienteClass
 {
     private string $fName;
     private string $lName;
     private string $cns;
     private string $nascimento;
     private int $id;
     private string $res;

     public function __construct(array $paciente_array)
     {
         $this->fName = $paciente_array['fName'];
         $this->lName = $paciente_array['lName'];
         $this->cns = $paciente_array['cns'];
         $this->nascimento = $paciente_array['bday'];
     }
     public function getID()
     {
         return $this->id;
     }
     public function setID(int $id)
     {
         $this->id = $id;
         return $this->id;
     }
     public function getfName()
     {
         return $this->fName ;
     }
     public function getlName()
     {
         return $this->lName;
     }
     public function getCNS()
     {
         return $this->cns;
     }
     public function getNascimento()
     {
         return $this->nascimento;
     }
     public function save()
     {
        $this->res = PacienteModel::insert($this);
        return $this->res;
     }
     public function getRes()
     {
         return $this->res;
     }


 }