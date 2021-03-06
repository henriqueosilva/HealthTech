<?php

/**
 * Esse arquivo define o serviço do paciente e suas funções CRUD
 */

 namespace App\Services;

 use App\Models\AtendimentoModel;
 use App\Classes\AtendimentoClass;
 use App\Classes\ProcedimentoClass;

/**
 * Função get para busca de dados, função post para registro de dados
 */

 class AtendimentoService
 {
     public function get($id = null)
     {
         if(!$id){
            return AtendimentoModel::selectAll();
        } else {
            return AtendimentoModel::select($id);
        }

     }
     public function post()
     {
        $atendimento_array = json_decode(file_get_contents('php://input'), true);
        if (!key_exists("method", $atendimento_array)) {
            throw new \Exception("Metodo não consta na request");
        }
        if ($atendimento_array['method'] === 'register') {
            $atendimento = new AtendimentoClass($atendimento_array['atendimento']);
            $atendimento->save();
            $res = $atendimento->getRes();
            foreach($atendimento_array['procedimentos'] as $key => $value) {
                $procedimento = new ProcedimentoClass($value, $res);
                $procedimento->save();
            }
        }
     }
 }