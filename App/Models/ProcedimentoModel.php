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
        $database = new Database;
        $db = $database->connect();
        $current_time = date('Y-m-d H:i:s');

        $sql = 'INSERT INTO '.self::$table .'(paciente_id, created_at, updated_at) 
        VALUES (:paciente_id, :created_at, :updated_at)';
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':paciente_id', $atendimento->getPID());
        $stmt->bindValue(':created_at', $current_time);
        $stmt->bindValue(':updated_at', $current_time);


        $stmt->execute();
        $last_id = $stmt->lastInsertId();
        echo(var_dump(($last_id)));
        if ($stmt->rowCount() > 0) {
            return 'Paciente inserido com sucesso!';
        } else {
            throw new \Exception('Falha ao inserir o paciente!');
        }
    }
    private function insert_atendimento(AtendimentoClass $atendimento)
    {
        $database = new Database;
    }
 }