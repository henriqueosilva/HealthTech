<?php

/**
 * Esse arquivo define as configurações e classe de acesso ao banco de dados
 */

 namespace App\Config;

 use PDO;

 class Database
 {
    private $host = 'localhost';
    private $db_name = 'app_development';
    private $username = 'root';
    private $password = '';
    private $conn;

    public function connect()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (\PDOException $e) {
            throw new \Exception('Connection Error: '. $e->getMessage());
        }
        return $this->conn;
    }
 }