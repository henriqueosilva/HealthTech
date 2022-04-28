<?php

/**
 * Esse arquivo define o modelo de acesso a dados do Paciente no banco de dados
 */

 namespace App\Models;

use App\Classes\PacienteClass;
use App\Config\Database;

 class PacienteModel
 {
    private static $table = 'pacientes';
    
    public static function select($id)
    {
        $database = new Database;
        $db = $database->connect();


    }
    public static function selectAll()
    {
        $database = new Database;
        $db = $database->connect();
    }
    public static function insert(PacienteClass $paciente)
    {
        $database = new Database;
        $db = $database->connect();
        $current_time = date('Y-m-d H:i:s');

        $sql = 'INSERT INTO '.self::$table .'(fName, lName, cns, nascimento, created_at, updated_at) 
        VALUES (:fName, :lName, :cns, :nascimento, :created_at, :updated_at)';
        $stmt = $db->prepare($sql);
        $stmt->bindValue(':fName', $paciente->getfName());
        $stmt->bindValue(':lName', $paciente->getlName());
        $stmt->bindValue(':cns', $paciente->getCNS());
        $stmt->bindValue(':nascimento', $paciente->getNascimento());
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