<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="en" class="no-js"><!--<![endif]-->
<head>
<title>Vodafone Powerplay</title>
<meta http-equiv="pragma" content="no-cache" />
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="Vodafone Powerplay Cricket App" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="index,follow,nocache,noarchive" />
<meta name="googlebot" content="noarchive,nocache" />
<meta name="viewer-google" content="nodisplay" />
<link href="css/animate.css" rel="stylesheet" type="text/css" />
<link href="css/screen.css" rel="stylesheet" type="text/css" />
<!--[if lt IE 9]> <script src="js/dist/html5shiv.js"></script> <![endif]-->
<!--<script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>-->
</head>
<body>
    <div id="main">
        <div id="wrapper">
        </div>
        <div id="details">
        </div>
    </div>

    <script type="text/template" id="main-template">
        <?php
            include_once 'includes/main.php';
        ?>
    </script>
   
    <script type="text/template" id="playerdetails-template">
        <?php
            include_once 'includes/playerdetails.php';
        ?>
    </script>
  
    <script src="http://primarydomain.games2.netdna-cdn.com/js/jquery-1.9.1.min.js" type="text/javascript"></script>
      
    <script src="js/vendor/underscore.js"></script>
    <script src="js/vendor/backbone.js"></script>
    <script src="js/vendor/backbonegettersetter.js"></script>

    <script src="js/appStart.js"></script>
    <script src="js/models/gameModel.js"></script>
    <script src="js/models/gettersetters.js"></script>
    <script src="js/collections/gameCollection.js"></script>
    <script src="js/views/gameView.js"></script>
    <script src="js/views/playerDetailsView.js"></script>
    <script src="js/routers/router.js"></script>
</body>
</html>