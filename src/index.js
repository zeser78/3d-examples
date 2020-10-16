import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import ring from './models/ring-shader.glb'

	var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let canvas = document.getElementById('glcanvas')
			var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
			scene.background = new THREE.Color('white' );
			// document.body.appendChild( renderer.domElement );

			// var geometry = new THREE.BoxGeometry();
			// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			// var cube = new THREE.Mesh( geometry, material );
// scene.add(cube);
			
//

camera.position.z = 6;
			
// GLTFLoader

const loader = new GLTFLoader();
loader.load(ring, function (gltf) {
	scene.add(gltf.scene);
}, undefined, function (error) {
		console.log(error)
})

//TODO: install camera and add react, // add more objects
//TODO: Try with Babylonjs and do the same


			var animate = function () {
				requestAnimationFrame( animate );

				// cube.rotation.x += 0.01;
				// cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();