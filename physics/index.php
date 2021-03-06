<?error_reporting(E_ALL);?>
<!DOCTYPE html>
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>

<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=11">
<link rel="stylesheet" href="style.css">

<script src="engines/three.min.js"></script>
<script src="engines/OrbitControls.js"></script>
<script src="engines/oimo1231.js"></script>

</head>
<body>
<canvas id="canvas" width="1365" height="904" style="width: 1365px; height: 904px;"></canvas>
<div id="interface">
	Наклон плоскости в градусах<br>
	<input type="number" name="quantity" min="1" max="89" value="15" id="RotNumber"><br>
	Начальная скорость в м/с<br>
	<input type="number" name="quantity" min="10" max="50" value="30" id="SpeedNumber"><br><br>
    <input type="submit" value='Запустить' onclick="populate()"><br><br>
	Время<br>
	<h1></h1>
</div>

<div id="info"></div>

<script src="test1231.js"></script>

</body></html>