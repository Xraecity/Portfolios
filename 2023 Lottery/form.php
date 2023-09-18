<form class="needs-validation" action="validate.php" method="POST" id="form" novalidate >
                    <div class="form-row">
                        
                    <code class="text-right">Total user added
                        <?=  $count?>
                                out of 10</code>
                        <div class="line"></div>
                            <h2>Lottery Entry</h2>
                        
                        <div class="col-md-12 mb-3">
                            <label for="fname">First name</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend"><i class="fa-solid fa-user"></i></span>
                                    </div>
                                        <input type="text" class="form-control" name="fname" id="fname" placeholder="First name">
                                </div>
                                <div id="fnerror_msg" class="error_msg">
                                    Enter first name*
                                </div>
                        </div>

                        <div class="col-md-12 mb-3">
                            <label for="lname">Last name</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">
                                        <i class="fa-solid fa-user"></i>
                                    </span>
                                </div>
                                    <input type="text"  name="lname" class="form-control" id="lname" placeholder="Last name" >
                            </div>
                                <div id="lnerror_msg" class="error_msg">
                                    Enter Last name*
                                </div>
                        </div>
                    </div>
                        
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <label for="email">Email</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">
                                        <i class="fa-solid fa-envelope"></i>
                                    </span>
                                </div>
                                    <input type="text" class="form-control"  name="email" id="email" placeholder="email" >
                            </div>
                            <div id="emerror_msg" class="error_msg">
                                Enter valid email address*
                            </div>
                            <div id="invalid"></div>
                        </div>

                        <div class="col-md-12 mb-3">
                            <label for="phone">Phone</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">
                                        <i class="fa-solid fa-phone"></i>
                                    </span>
                                </div>
                                <input type="tel" class="form-control" name="phone" id="phone" placeholder="phone" >
                            </div>
                                <div id="pherror_msg" class="error_msg">
                                    Enter valid phone number*
                                </div>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <label for="address">Address</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend">
                                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" name="address" id="address" placeholder="Address" >
                            </div>
                                <div id="adpherror_msg" class="error_msg">
                                    Please provide a valid address*
                                </div>
                        </div>
                        
                        <div class="col-md-12 mb-3">
                            <label for="city">City</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend">
                                            <i class="fa-sharp fa-solid fa-city"></i>
                                        </span>
                                    </div>
                                        <input type="text" class="form-control" name="city" id="city" placeholder="City" >
                                </div>
                                <div id="cterror_msg" class="error_msg">
                                    Please provide a valid city*
                                </div>
                        </div>
                    </div>
                        
                        <div class="form-row">
                            <div class="col-md-12 mb-3">
                                <label for="state">State</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend">
                                            <i class="fa-sharp fa-solid fa-city"></i>
                                        </span>
                                    </div>
                                        <input type="text" class="form-control" name="state" id="state" placeholder="state" >
                                </div>
                                    <div id="sterror_msg" class="error_msg">
                                        Please provide a valid state*
                                    </div>
                            </div>

                            <div class="col-md-12 mb-3">
                                <label for="zipcode">Zipcode</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend">
                                            <i class="fa-sharp fa-solid fa-location-crosshairs"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" name="zipcode" id="zipcode" placeholder="zip code" >
                                </div>
                                    <div id="zperror_msg" class="error_msg">
                                        Please provide a valid Zipcode*
                                    </div>
                            </div>
                            
                            <div class="form-row">
                                <div class="col-md-12 mb-3">
                                    <label for="country">Country</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend">
                                            <i class="fa-solid fa-globe"></i>
                                        </span>
                                        </div>
                                        
                                        <?php include("list_of_countries.php"); ?>
                                        
                                    </div>
                                        <div id="cnerror_msg" class="error_msg">
                                            Please provide a country*
                                        </div>
                                </div>
                        
                                    <div class="col-md-12 mb-3">
                                        <label for="zipcode">Gender</label>
                                        <div class="input-group gender">
                                            <div class="input-group-prepend">
                                                <div class="row">
                                                    <div class="col-lg-3">
                                                        <i class="fa-solid fa-mars-stroke-up"></i>  
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                        Male
                                                        </label>
                                                        <input class="form-check-input" type="radio" name="gender" id="male" value="male">
                                                    </div>
                                                    
                                                    <div class="col-lg-3">
                                                        <i class="fa-solid fa-venus"></i></i> 
                                                        <label class="form-check-label" for="female">
                                                            Female
                                                        </label>
                                                        <input class="form-check-input" type="radio" name="gender" id="female" value="female">
                                                    </div>
                                                    
                                                    <div class="col-lg-3">
                                                        <label class="form-check-label" for="other">
                                                        <i class="fa-solid fa-venus"></i>
                                                            Others
                                                        </label>
                                                        <input class="form-check-input" type="radio" name="gender" id="other" value="other">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br>
                                        <div id="generror_msg" class="error_msg">
                                                Please select geneder*
                                            </div>
                                    </div>
                            </div>

                                        
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <div class="form-group">
                                <div class="form-check">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="agree">
                                        <label class="form-check-label" for="agree" id="agree"> Agree to terms and conditions</label>
                                    </div>
                                    <div id="agerror_msg" class="error_msg">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="row">
                        
                        <div class="col-6">
                                    <button class="btn-lg btn-block btn btn-outline-primary" type="submit">Add</button>
                                </div>

                            
                            <!-- <div class="col-6 " id="subtn">
                                <button class="btn-lg btn btn-success" type="submit">Submit lottery</button>
                            </div> -->
                            <div class="col-6">
                                <button class="btn-lg btn btn-danger" type="reset">Start over</button>
                            </div>
                        </div>
                    </div>
            </form>