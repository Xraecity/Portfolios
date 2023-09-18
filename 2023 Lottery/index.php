

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=s, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/17632e1141.js" crossorigin="anonymous"></script>
    <title>Lottery</title>
</head>
<body>
    <section>
        <div class="row">
            <?php
                session_start();

                // Database connection settings
                $db_host = 'localhost';
                $db_name = 'lottery';
                $db_user = 'root';
                $db_pass = '';

                try {
                    // Connect to the database
                    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8", $db_user, $db_pass);

                

                    // Query to count the number of records in the database
                    $count_query = $pdo->query("SELECT COUNT(*) FROM lottery_entries");
                    $count = $count_query->fetchColumn();

                    if($count > 0){
                    echo '<label for="" class="col-12 alert alert-success alert-lg" id="success_label">' . $count . ' information has been added successfully</label>'; 
                }
                    else{
                        echo '<label for="" class="col-12 alert alert-primary alert-lg" id="success_label"> No record added yet</label>';
                    }
                } catch (PDOException $e) {
                        echo "Error: " . $e->getMessage();
                    }
                ?>

            <div class="col-lg-12">
                
                <?php
                        $count_query = $pdo->query("SELECT COUNT(*) FROM lottery_entries");
                        $count = $count_query->fetchColumn();
                        if($count != 10):
                    ?>
                <?php include("form.php"); ?>
        </div>
    </div>
    
                <?php else: ?>
                                
            
    </div>                    
    <?php include("list.php"); ?>
    <?php endif; ?>
                    </div>
                    

                </div>
                
</section>





</body>
</html>