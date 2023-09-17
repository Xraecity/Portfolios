<?php
// Define database connection constants
define('DB_DSN', 'mysql:host=localhost;dbname=serverside;charset=utf8');
define('DB_USER', 'serveruser');
define('DB_PASS', 'gorgonzola7!');

// Establish a database connection
try {
    $db = new PDO(DB_DSN, DB_USER, DB_PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    print "Error: " . $e->getMessage();
    die();
}

// Handle form submission for adding new blog posts
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {
    $title = $_POST['title'];
    $content = $_POST['content'];

    // Insert the new blog post into the database
    $insertQuery = "INSERT INTO blog_posts (title, content) VALUES (:title, :content)";
    $stmt = $db->prepare($insertQuery);
    $stmt->bindParam(':title', $title);
    $stmt->bindParam(':content', $content);

    if ($stmt->execute()) {
        // Redirect to the same page to prevent form resubmission
        header('Location: ' . $_SERVER['PHP_SELF']);
        exit;
    } else {
        echo "Error adding the blog post.";
    }
}

// Retrieve and display blog posts from the database
$selectQuery = "SELECT * FROM blog_posts ORDER BY created_at DESC";
$posts = $db->query($selectQuery);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Blog</title>
</head>
<body>
    <h1>My Blog</h1>
    
    <!-- Form for adding new blog posts -->
    <form method="post">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required><br><br>
        
        <label for="content">Content:</label><br>
        <textarea id="content" name="content" rows="4" cols="50" required></textarea><br><br>
        
        <button type="submit" name="submit">Submit</button>
    </form>
    
    <!-- Display existing blog posts -->
    <?php foreach ($posts as $post): ?>
        <div>
            <h2><?= htmlspecialchars($post['title']) ?></h2>
            <p><?= nl2br(htmlspecialchars($post['content'])) ?></p>
            <p><?= $post['created_at'] ?></p>
        </div>
    <?php endforeach; ?>
</body>
</html>
