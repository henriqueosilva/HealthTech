<?php

/**
 * Esse arquivo define o modelo de acesso a dados do Paciente no banco de dados
 */

 namespace App\Models;

use App\Classes\ProcedimentoClass;
use App\Config\Database;

 class ProcedimentoModel
 {
    private static $table = 'procedimentos';
    
    public static function select($pid)
    {
        $database = new Database;
        $db = $database->connect();

        $sql = 'SELECT * FROM '.self::$table . ' WHERE pid = :pid';
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':pid', $pid);
        $stmt->execute();

        if($stmt->rowCount() > 0) {
            return $stmt->fetchAll(\PDO::FETCH_ASSOC);
        } else {
            throw new \Exception("Nenhum paciente encontrado!");
        }


    }
    public static function selectAll()
    {
        $database = new Database;
        $db = $database->connect();

        $sql = 'SELECT * FROM '.self::$table;
        $stmt = $db->prepare($sql);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
          return $stmt->fetchAll(\PDO::FETCH_ASSOC);
        } else {
          throw new \Exception("Nenhum paciente encontrado!");
        }
    }
    public static function insert(ProcedimentoClass $procedimento)
    {
        echo(var_dump(($procedimento)));
        $database = new Database;
        $db = $database->connect();
        $current_time = date('Y-m-d H:i:s');

        $sql = 'INSERT INTO '.self::$table .'(atendimento_id, description, modality, created_at, updated_at) 
        VALUES (:atendimento_id, :description, :modality, :created_at, :updated_at)';
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':atendimento_id', $procedimento->getAtendimentoID());
        $stmt->bindValue(':description', $procedimento->getDescription());
        $stmt->bindValue(':modality', $procedimento->getModality());
        $stmt->bindValue(':created_at', $current_time);
        $stmt->bindValue(':updated_at', $current_time);

        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            return 'Paciente inserido com sucesso!';
        } else {
            throw new \Exception('Falha ao inserir o paciente!');
        }
    }
 }