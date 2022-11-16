import {
    //Camera,
    Color,
    PerspectiveCamera,
    Scene,
    AmbientLight,
    DirectionalLight,
    PointLight,
    WebGLRenderer,
    //Material,
    //Texture,
} from "https://cdn.skypack.dev/three@0.132.2";

import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";


let scene, camera, hlight, renderer, fpm, directionalLight, controls, light1, light2, light3, light4;

function init() {
    scene = new Scene();
    scene.background = new Color(0xdddddd);

    camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
    camera.rotation.y = 45/180*Math.PI;
    /*
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 100;*/
    camera.position.set(0, 10, 10);
    
    hlight = new AmbientLight(0x404040, 100);
    scene.add(hlight);

    /*
    directionalLight = new DirectionalLight(0xffffff, 100);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    light1 = new PointLight(0xc4c4c4, 10);
    light1.position.set(0, 300, 500);
    scene.add(light1);

    light2 = new PointLight(0xc4c4c4, 10);
    light2.position.set(500, 100, 0);
    scene.add(light2);

    light3 = new PointLight(0xc4c4c4, 10);
    light3.position.set(0, 100, -500);
    scene.add(light3);

    light4 = new PointLight(0xc4c4c4, 10);
    light4.position.set(-500, 300, 0);
    scene.add(light4);
   */

    renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    controls = new OrbitControls(camera, renderer.domElement);
    //controls.addEventListener('change', renderer);
    controls.addEventListener('change', render);

    document.body.appendChild(renderer.domElement);

    let loader = new GLTFLoader();
    loader.load('/images/products/modular-filter-system/FPM8.glb', function (glb) {
        //fpm = glb.scene.children[0];
        //fpm.scale.set(0.5, 0.5, 0.5);
        scene.add(glb.scene);
        animate();
    });

}


function animate() {
    //controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate)
}

function render() {
    renderer.render( scene, camera );
}


init();