<?php

/**
 * Esse arquivo define a classe do paciente e seus atributos
 */

 namespace App\Classes;

 use App\Models\ProcedimentoModel;

 class ProcedimentoClass
 {
     private string $description;
     private string $modality;
     private int $atendimento_id;
     private string $study_uuid;
     private string $res;

     public function __construct(array $procedimento)
     {
         $this->description = $procedimento['description'];
         $this->modality = $procedimento['modality'];
     }
     public function getDescription()
     {
         return $this->description;
     }
     public function setStudyUUID(string $study_uuid)
     {
         $this->study_uuid = $study_uuid;
         return $this->study_uuid;
     }
     public function getAtendimentoID()
     {
         return $this->atendimento_id;
     }
     public function setAtendimentoID(int $atendimento_id)
     {
         $this->atendimento_id = $atendimento_id;
         return $this->atendimento_id;
     }
     public function getModality()
     {
         return $this->modality ;
     }
     public function save()
     {
        $this->res = ProcedimentoModel::insert($this);
        return $this->res;
     }
     public function getRes()
     {
         return $this->res;
     }


 }