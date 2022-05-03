<?php

/**
 * Esse arquivo define o serviço do paciente e suas funções CRUD
 */

 namespace App\Services;

 use App\Models\PacienteModel;
 use App\Classes\PacienteClass;

/**
 * Função get para busca de dados, função post para registro de dados
 */

 class PacienteService
 {
     public function get($pid = null)
     {
        if(!$pid){
            return PacienteModel::selectAll();
        } else {
            return PacienteModel::select($pid);
        }

     }
     public function post()
     {
        $paciente_array = json_decode(file_get_contents('php://input'), true);
        if (!key_exists("method", $paciente_array)) {
            throw new \Exception("Metodo não consta na request");
        }
        if ($paciente_array['method'] === 'register') {
            $paciente = new PacienteClass($paciente_array['patient']);

            $paciente->save();
            return $paciente->getRes();
            exit;
        }
     }
 }