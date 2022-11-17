import {
    //Camera,
    Color,
    PerspectiveCamera,
    Scene,
    AmbientLight,
    DirectionalLight,
    PointLight,
    PointLightHelper,
    GridHelper,
    WebGLRenderer,
    SphereGeometry,
    MeshStandardMaterial,
    Mesh,
    //Material,
    //Texture,
    MathUtils,
} from "https://cdn.skypack.dev/three@0.132.2";

import { GLTFLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";


let scene, camera, hlight, renderer, fpm, directionalLight, controls, light1, light2, light3, light4;

function init() {
    scene = new Scene();
    scene.background = new Color(0xeeeeee);

    camera = new PerspectiveCamera(
        30, // Field of view - amount of world visible from camera, upto 360 degees for all around
        window.innerWidth / window.innerHeight, // aspect ratio based on user's browser window
        1, // Min range of View frustum - Min distance of objects visible from camera lens 
        1000 // Max range of View frustum - Max distance of objects visible from camera lens 
    );
    /*
    camera.rotation.y = 45/180*Math.PI;
    
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 100;*/

    //camera.position.set(4, 4, 4);
    camera.position.setZ(12); //camera pan away from object on Z-axis

    //camera.position.setX(4); //camera move away from object on X-axis
    camera.position.setY(4); //camera rotate away from object on Y-axis

    //hlight = new AmbientLight(0x404040, 100);
    hlight = new AmbientLight(0xffffff);
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

    const lightHelper = new PointLightHelper(pointLight);
    scene.add(lightHelper);
   */

    const gridHelper = new GridHelper(200, 50);
    scene.add(gridHelper);

    //renderer = new WebGLRenderer({ antialias: true });
    renderer = new WebGLRenderer({
        canvas: document.getElementById('fpm8'),
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    //document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    let loader = new GLTFLoader();
    loader.load('/images/products/modular-filter-system/FPM8.glb', function (glb) {
        //fpm = glb.scene.children[0];
        //fpm.scale.set(0.5, 0.5, 0.5);
        scene.add(glb.scene);
        animate();
    });

}


function animate() {
    controls.update();  //OrbitControl event listener for dom events
    renderer.render(scene, camera); //Render == draw
    requestAnimationFrame(animate)  //Perform animation == repaint the screen
}

function addDust() {
    const geometry = new SphereGeometry(
        0.1, // Radius of sphere
        24, 
        24
        );
    const material = new MeshStandardMaterial({ color: 0xdddddd });
    const dust = new Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() =>
        MathUtils.randFloatSpread(100) //Generate random number between negative and positive 100
    );

    dust.position.set(x, y, z);
    scene.add(dust);
}

init();
Array(200).fill().forEach(addDust);

//const imageBackground = TextureLoader.load('background.jpg');
//scene.background = imageBackground;