    
    <div class="col-lg-12">
                <span class="alert alert-warning alert-sm"> you have successfully added 10 individuals
                <a href="#submit">scroll to submit button</a>
            </span>
            <?php

                
                        
                        $data_query = $pdo->query("SELECT * FROM lottery_entries");
                        // Display the count
                         $count_query = $pdo->query("SELECT COUNT(*) FROM lottery_entries");
                            $count = $count_query->fetchColumn();

                             while ($data = $data_query->fetch(PDO::FETCH_ASSOC)): ?>
                            <div class="form-row row">
                            <div class="line"></div>
                                <h3>Information for <?= $data['fname'] ?> </h3>
                            
                            <div class="col-lg-6 mb-3">
                                <label for="fname">First name</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend2"><i class="fa-solid fa-user"></i></span>
                                        </div>
                                            <input class="form-control" disabled value="<?= $data['fname'] ?>">
                                    </div>
                            </div>

                            <div class="col-lg-6 mb-3">
                                <label for="lname">Last name</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend2">
                                            <i class="fa-solid fa-user"></i>
                                        </span>
                                    </div>
                                    <input class="form-control" disabled value="<?= $data['lname'] ?>">
                                </div>
                            </div>
                        </div>

                        <div class="form-row row">
                            <div class="col-lg-6 mb-3">
                                <label for="email">Email</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <a href="mailto:<?= $data['email'] ?>">
                                            <span class="input-group-text" id="inputGroupPrepend2">
                                                <i class="fa-solid fa-envelope"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <input class="form-control" disabled value="<?= $data['email'] ?> ">
                                </div>
                            </div>

                            <div class="col-lg-6 mb-3">
                                <label for="phone">Phone</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <a href="tel:<?= $data['phone'] ?>">
                                            <span class="input-group-text" id="inputGroupPrepend2">
                                                <i class="fa-solid fa-phone"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <input class="form-control" disabled value="<?= $data['phone'] ?>">
                                </div>
                            </div>
                        </div>
                        <div class="form-row row">
                        <label for="Address">Address</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend2">
                                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                                    </span>
                                    </div>
                                        <input disabled class="form-control" value="<?= $data['address'] ?>, <?= $data['city'] ?> <?= $data['state'] ?>, <?= $data['country'] ?>, <?= $data['zipcode'] ?>" >
                                </div>
                            
                        </div>
                            
                        
                    
                        <?php endwhile; ?>

                       <br>
                        <div class="col-12" id="#submit">
                                <button class="btn btn-success " type="">Submit Lottery</button>
                        </div>

                        
                    