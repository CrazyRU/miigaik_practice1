var isMobile = false;
var antialias = true;

//three var
var camera, scene, light, renderer, canvas;
var meshs = [];
var grounds = [];
var matBox, matSphere, matBoxSleep, matSphereSleep, matGround, matGroundTrans;
var buffgeoSphere, buffgeoBox;
var ToRad = 0.0174532925199432957;

//oimo var
var world = null;
var collisionGroupes = {};
var bodys = null;
var infos;
var type=1;

var Run=1;
var start, stop = 0;
init();
loop();

function init() {

	var n = navigator.userAgent;
	if (n.match(/Android/i) || n.match(/webOS/i) || n.match(/iPhone/i) || n.match(/iPad/i) || n.match(/iPod/i) || n.match(/BlackBerry/i) || n.match(/Windows Phone/i)){ isMobile = true;  antialias = false; document.getElementById("MaxNumber").value = 200; }

	infos = document.getElementById("info");

	canvas = document.getElementById("canvas"); 
	
	//Создаём камеру
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 ); 
	//camera.position.set( -750, 500, 0 );
	camera.position.set( 0, 0, 2000 );
	
	//Указываем куда смотрит камера
	controls = new THREE.OrbitControls( camera, canvas );//?
	controls.target.set(0,0, 0);
	controls.update();

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer({ canvas:canvas, precision: "mediump", antialias:antialias });
	renderer.setSize( window.innerWidth, window.innerHeight );

	var materialType = 'MeshBasicMaterial';
	
	if(!isMobile){

		scene.add( new THREE.AmbientLight( 0x3D4143 ) );

		light = new THREE.DirectionalLight( 0xffffff , 1);
		light.position.set( 300, 1000, 500 );
		light.target.position.set( 0, 0, 0 );
		light.castShadow = true;
		var d = 10000;
		light.shadow.camera = new THREE.OrthographicCamera( -d, d, d, -d,  500, 1600 );
		light.shadow.bias = 0.0001;
		light.shadow.mapSize.width = light.shadow.mapSize.height = 10240;
		scene.add( light );

		materialType = 'MeshPhongMaterial';

		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFShadowMap;//THREE.BasicShadowMap;
	}

	//background
	var buffgeoBack = new THREE.BufferGeometry();
	buffgeoBack.fromGeometry( new THREE.IcosahedronGeometry(80000,1) );
	var back = new THREE.Mesh( buffgeoBack, new THREE.MeshBasicMaterial( { map:gradTexture([[1,0.75,0.5,0.25], ['#1B1D1E','#3D4143','#72797D', '#b0babf']]), side:THREE.BackSide, depthWrite: false }  ));
	back.geometry.applyMatrix(new THREE.Matrix4().makeRotationZ(15*ToRad));
	scene.add( back );

	buffgeoSphere = new THREE.BufferGeometry();
	buffgeoSphere.fromGeometry( new THREE.SphereGeometry( 1 , 20, 10 ) );

	buffgeoBox = new THREE.BufferGeometry();
	buffgeoBox.fromGeometry( new THREE.BoxGeometry( 1, 1, 1 ) );
	//materials
	matSphere = new THREE[materialType]( { map: basicTexture(0), transparent:false, name:'sph' } );
	matDot = new THREE[materialType]( { map: basicTexture(1), transparent:false, name:'sph' } );
	matBox = new THREE[materialType]( {  map: basicTexture(2), name:'box' } );
	matSphereSleep = new THREE[materialType]( { map: basicTexture(1), name:'ssph' } );
	matBoxSleep = new THREE[materialType]( {  map: basicTexture(3), transparent:false, name:'sbox' } );
	matGround = matBoxSleep;//new THREE[materialType]( { color: 0x3D4143, transparent:false, opacity:0.5 } );
	matGroundTrans = matBoxSleep;//new THREE[materialType]( { color: 0x3D4143, transparent:false, opacity:0.6 } );

	//events

	window.addEventListener( 'resize', onWindowResize, false );

	//physics

	initOimoPhysics();

}

function loop() {

	updateOimoPhysics();
	renderer.render( scene, camera );
	requestAnimationFrame( loop );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );

}

function addStaticBox(size, position, rotation, spec) {
	var mesh;
	if(spec) mesh = new THREE.Mesh( buffgeoBox, matGroundTrans );
	else mesh = new THREE.Mesh( buffgeoBox, matGround );
	mesh.scale.set( size[0], size[1], size[2] );
	mesh.position.set( position[0], position[1], position[2] );
	mesh.rotation.set( rotation[0]*ToRad, rotation[1]*ToRad, rotation[2]*ToRad );
	scene.add( mesh );
	grounds.push(mesh);
	mesh.castShadow = true;
	mesh.receiveShadow = true;
}

function clearAll(){
	var i=meshs.length;
	while (i--) scene.remove(meshs[ i ]);
	i = grounds.length;
	while (i--) scene.remove(grounds[ i ]);
	grounds = [];
	meshs = [];
	bodys = [];
	world.clear();
}

//----------------------------------
//  OIMO PHYSICS
//----------------------------------

function createDot(position){
	var i = meshs.length+1;
	meshs[i] = new THREE.Mesh( buffgeoSphere, matDot );
	meshs[i].scale.set(10,10,10);
	scene.add( meshs[i] );
	meshs[i].position.set( position[0], position[1], position[2] );
}

function createBall(position){
	var i = meshs.length;
	var all = 0xffffffff; // 11111111 11111111 11111111 11111111
	var config = [
		1, // The density of the shape.
		0.5, // Трение
		0.8, // Упругость.
		all, // The bits of the collision groups to which the shape belongs.
		all // The bits of the collision groups with which the shape collides.
	];
	
	
	bodys[i] = world.add({type:'sphere', size:[10], pos:[position[0], position[1], position[2]], move:true, config:config });
	
	meshs[i] = new THREE.Mesh( buffgeoSphere, matSphere );
	meshs[i].scale.set(10,10,10);
	scene.add( meshs[i] );
	meshs[i].position.set( position[0], position[1], position[2] );
}

function initOimoPhysics(){
	
	world = new OIMO.World( {info:true, worldscale:100} );
	setInterval(updateOimoPhysics, 1000);
	populate();
	

}

function populate() {
	var main_time = ""
	// The Bit of a collision group
	var all = 0xffffffff; // 11111111 11111111 11111111 11111111
	var force = new THREE.Vector3();

	var SpeedNumber = document.getElementById("SpeedNumber").value;
	var RotNumber = document.getElementById("RotNumber").value;; //Градусы

	type = 3;

	// reset old
	clearAll();
	Run=1;

	// Is all the physics setting for rigidbody
	var config = [
		1, // The density of the shape.
		0.5, // Трение
		0.8, // Упругость.
		all, // The bits of the collision groups to which the shape belongs.
		all // The bits of the collision groups with which the shape collides.
	];

	//Добавляем объекты
	var w;
	var i = 0;
	w = 25;
	var n = 1;
	bodys[i] = world.add({type:'sphere', size:[w], pos:[0,25,0], move:true, config:config });

	meshs[i] = new THREE.Mesh( buffgeoSphere, matSphere );
	meshs[i].scale.set( w, w, w);
	meshs[i].position.set( 100, 100, 0 );
	meshs[i].castShadow = true;
	meshs[i].receiveShadow = true;
	scene.add( meshs[i] );
	//Применяем силу
	force.x = -0.0591*SpeedNumber; //30
	bodys[i].linearVelocity.addScaledVector(force, bodys[i].inverseMass);
	
	//Добавляем наклонную плоскость
	var xs=100;
	var ys=100;
	var zs=100;
	var xp=0-Math.cos(RotNumber*ToRad)*xs/2;
	var yp=0-Math.sin(RotNumber*ToRad)*xs/2;
	var zp=0;
	// if (RotNumber>0){
		// alert(RotNumber);
		// xp=(-Math.cos(RotNumber*0.01735)*xs/2);
		// yp=(-Math.sin(RotNumber*0.01735)*xs/2));
	// }
	
	
	while (n<10000) {
		var ground1 = world.add({size:[xs, ys, zs], pos:[xp*n*2,yp*n*2-ys,zp], rot:[0,0,RotNumber], config:config});
		addStaticBox([xs, ys, zs], [xp*n*2,yp*n*2-ys,zp], [0,0,RotNumber*(1+ToRad)]);
		n++;
	}
	start = (new Date()).getTime();
	// createBall([0,0,0]);
	// createBall([100,0,0]);
	// createBall([100,100,0]);
	// createBall([xp,yp,zp]);
}

function updateOimoPhysics() {
	
	if (Run==1){
		console.log(' x='+bodys[0].getPosition().x+' y='+bodys[0].getPosition().y+' z='+bodys[0].getPosition().z);
		if(world == null) return;

		world.step();

		var p, r, m, x, y, z;
		var mtx = new THREE.Matrix4();
		var i = bodys.length;
		var mesh;
		var body;

		while (i--){
			body = bodys[i];
			mesh = meshs[i];

			if(!body.sleeping){

				mesh.position.copy(body.getPosition());
				mesh.quaternion.copy(body.getQuaternion());
				//Сдвинем камеру к телу
				camera.position.set(body.getPosition().x,body.getPosition().y+500,body.getPosition().z+900);
				controls.target.set(body.getPosition().x+200,body.getPosition().y, body.getPosition().z);
				controls.update();

				//Изменение материала
				if(mesh.material.name === 'sbox') mesh.material = matBox;
				if(mesh.material.name === 'ssph') mesh.material = matSphere; 

			} else {
				if(mesh.material.name === 'box') mesh.material = matBoxSleep;
				if(mesh.material.name === 'sph') mesh.material = matSphereSleep;
			}
		}
		createDot([bodys[0].getPosition().x,bodys[0].getPosition().y,bodys[0].getPosition().z])
		infos.innerHTML = world.getInfo();
		if(world.numContactPoints>0){
			Run=0;
			stop = (new Date()).getTime();
			// alert(stop - start);
			var main_time = (stop - start)/1000;
			var h1 = document.getElementsByTagName('h1')[0];
			h1.innerHTML = main_time + ' с';
		}
	}
}

function gravity(g){
	nG = document.getElementById("gravity").value
	world.gravity = new OIMO.Vec3(0, 9,81, 0);
}

//----------------------------------
//  TEXTURES
//----------------------------------

function gradTexture(color) {
	var c = document.createElement("canvas");
	var ct = c.getContext("2d");
	c.width = 16; c.height = 256;
	var gradient = ct.createLinearGradient(0,0,0,256);
	var i = color[0].length;
	while(i--){ gradient.addColorStop(color[0][i],color[1][i]); }
	ct.fillStyle = gradient;
	ct.fillRect(0,0,16,256);
	var texture = new THREE.Texture(c);
	texture.needsUpdate = true;
	return texture;
}

function basicTexture(n){

	var canvas = document.createElement( 'canvas' );
	canvas.width = canvas.height = 64;
	var ctx = canvas.getContext( '2d' );
	var colors = [];
	if(n===0){ // sphere
		colors[0] = "#5B2494";
		colors[1] = "#5B2494";
	}
	if(n===1){ // sphere sleep
		colors[0] = "#DBBC28";
		colors[1] = "#DBBC28";
	}
	if(n===2){ // box
		colors[0] = "#5B2494";
		colors[1] = "#5B2494";
	}
	if(n===3){ // box sleep
		colors[0] = "#FFFFFF";
		colors[1] = "#FFFFFF";
	}
	ctx.fillStyle = colors[0];
	ctx.fillRect(0, 0, 50, 50);
	ctx.fillStyle = colors[1];
	ctx.fillRect(0, 0, 32, 32);
	ctx.fillRect(32, 32, 32, 32);

	var tx = new THREE.Texture(canvas);
	tx.needsUpdate = true;
	return tx;
}
