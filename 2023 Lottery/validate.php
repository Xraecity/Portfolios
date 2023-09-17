<?php
session_start();
require('connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zipcode = $_POST['zipcode'];
    $country = $_POST['country'];
    $gender = $_POST['gender'];
    // $agree = isset($_POST['agree']) ? 1 : 0;

    try {
        $stmt = $db->prepare("INSERT INTO lottery_entries (fname, lname, email, phone, address, city, state, zipcode, country, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$fname, $lname, $email, $phone, $address, $city, $state, $zipcode, $country, $gender]);
        
       
            // Redirect to index.php
            header("Location: index.php");
            exit();
        }

    catch (PDOException $e) {
        // Handle the database error, e.g., display an error message
        echo "Error: " . $e->getMessage();
    }
}

?>