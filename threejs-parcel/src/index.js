import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import ring5 from './ring-models/ring-v6.glb';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

	var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let canvas = document.getElementById('glcanvas')
			var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
			scene.background = new THREE.Color('white' );

			var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
const controls = new OrbitControls(camera, renderer.domElement);

light.position.z = 6
camera.position.z = 6;
			controls.update()
// GLTFLoader

const loader = new GLTFLoader().setPath('/');
loader.load(ring5, function (gltf) {
	scene.add(gltf.scene);
	render()
}, undefined, function (error) {
		console.log(error)
})




			var animate = function () {
				requestAnimationFrame( animate );

				// cube.rotation.x += 0.01;
				// cube.rotation.y += 0.01;
				controls.update()
				renderer.render( scene, camera );
			};

			animate();