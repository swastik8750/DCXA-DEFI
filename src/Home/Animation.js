import React from 'react';
 import './Home.css';
import * as THREE from 'three';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
    class DustParticles {
        constructor(num = 10) {
            this.num = num;
            this.wrap = new THREE.Object3D();
            for (let i = 0; i < this.num; i++) {
                const size = getRandomNum(800, 100);
                const geometory = new THREE.BoxGeometry(size, size, size);
                const color = 0xFFA133;
                const material = new THREE.MeshLambertMaterial({
                    opacity: 1.0,
                    wireframe: false,
                    transparent: true,
                    color: color
                });
                const mesh = new THREE.Mesh(geometory, material);
                const radius = getRandomNum(13000, 7000);
                const theta = THREE.Math.degToRad(getRandomNum(180));
                const phi = THREE.Math.degToRad(getRandomNum(360));
                mesh.position.x = Math.sin(theta) * Math.cos(phi) * radius;
                mesh.position.y = Math.sin(theta) * Math.sin(phi) * radius;
                mesh.position.z = Math.cos(theta) * radius;
                mesh.rotation.x = getRandomNum(360);
                mesh.rotation.y = getRandomNum(360);
                mesh.rotation.z = getRandomNum(360);
                this.wrap.add(mesh);
            }
        }
    }
    
    class BoxContainer {
        constructor(width = 100, height = 100, depth = 100, color = 0xffffff) {
            const geometry = new THREE.BoxGeometry(width, height, depth, 10, 10, 10);
            const material = new THREE.MeshLambertMaterial({
                color: color,
                opacity: 1.0,
                wireframe: true,
                depthWrite: false,
                visible: false
            });
            this.mesh = new THREE.Mesh(geometry, material);
        }
    }
    
    class Bellwether {
        constructor() {
            const geometry = new THREE.CylinderGeometry(1, 30, 50, 12);
            geometry.rotateX(THREE.Math.degToRad(90));
            const color = new THREE.Color(0xff0000);
            const material = new THREE.MeshLambertMaterial({
                color: color,
                visible: false
            });
            this.mesh = new THREE.Mesh(geometry, material);
            const radius = getRandomNum(1000, 200);
            const theta = THREE.Math.degToRad(getRandomNum(180));
            const phi = THREE.Math.degToRad(getRandomNum(360));
            this.mesh.position.x = Math.sin(theta) * Math.cos(phi) * radius;
            this.mesh.position.y = Math.sin(theta) * Math.sin(phi) * radius;
            this.mesh.position.z = Math.cos(theta) * radius;
            this.velocity = new THREE.Vector3();
            this.acceleration = new THREE.Vector3();
            this.timeX = getRandomNum(10, 0) * 0.1;
            this.timeY = getRandomNum(10, 0) * 0.1;
            this.timeZ = getRandomNum(10, 0) * 0.1;
            this.maxSpeed = 45;
            this.separateMaxSpeed = 30;
            this.separateMaxForce = 30;
        }
    
        applyForce(f) {
            this.acceleration.add(f.clone());
        }
    
        update() {
            const maxSpeed = this.maxSpeed;
    
            // update velocity
            this.velocity.add(this.acceleration);
    
            // limit velocity
            if (this.velocity.length() > maxSpeed) {
                this.velocity.clampLength(0, maxSpeed);
            }
    
            // update position
            this.mesh.position.add(this.velocity);
            
            // reset acc
            this.acceleration.multiplyScalar(0);
            
            // head
            const head = this.velocity.clone();
            head.multiplyScalar(10);
            head.add(this.mesh.position);
            this.mesh.lookAt(head);
            
        }
    
        randomWalk () {
            const acc = new THREE.Vector3();
            this.timeX += this.getRandAddTime();
            this.timeY += this.getRandAddTime();
            this.timeZ += this.getRandAddTime();
            acc.x = Math.cos(this.timeX) * 10;
            acc.y = Math.sin(this.timeY) * 10;
            acc.z = Math.sin(this.timeZ) * 10;
            acc.normalize();
            acc.multiplyScalar(2);
            this.applyForce(acc);
        }
    
        spiralWalk() {
            this.timeX += 0.12;
            this.timeY += 0.012;
            this.timeZ += 0.0135;
            let baseRadius = 200;
        
            let acc = new THREE.Vector3();
            let theta1 = Math.cos(this.timeY);
            let theta2 = Math.sin(this.timeY);
            
            let radius1 = baseRadius * theta1;
            let radius2 = baseRadius * theta2;
            acc.x = Math.cos(this.timeX) * radius1 + (Math.cos(this.timeZ) * baseRadius);
            acc.y = Math.cos(this.timeX) * radius2 + (Math.sin(this.timeZ) * baseRadius);
            acc.z = Math.sin(this.timeX) * baseRadius;
            this.applyForce(acc);
        }
    
        getRandAddTime() {
            let randNum = getRandomNum(100, 0);
            let time = 0;
            if (randNum > 90) {
                time = getRandomNum(100, 0) * 0.01;
                if (getRandomNum(10) > 5) {
                    time *= -1;
                }
            }
            return time;
        }
    
        getAvoidVector(wall = new THREE.Vector3()) {
            this.mesh.geometry.computeBoundingSphere();
            const boundingSphere = this.mesh.geometry.boundingSphere;
    
            const toMeVector = new THREE.Vector3();
            toMeVector.subVectors(this.mesh.position, wall);
    
            const distance = toMeVector.length() - boundingSphere.radius * 2;
            const steerVector = toMeVector.clone();
            steerVector.normalize();
            steerVector.multiplyScalar(1 / (Math.pow(distance, 2)));
            return steerVector;
        }
    
        avoidBoxContainer(rangeWidth = 80, rangeHeight = 80, rangeDepth = 80) {
            const sumVector = new THREE.Vector3();
            sumVector.add(this.getAvoidVector(new THREE.Vector3(rangeWidth, this.mesh.position.y, this.mesh.position.z)));
            sumVector.add(this.getAvoidVector(new THREE.Vector3(-rangeWidth, this.mesh.position.y, this.mesh.position.z)));
            sumVector.add(this.getAvoidVector(new THREE.Vector3(this.mesh.position.x, rangeHeight, this.mesh.position.z)));
            sumVector.add(this.getAvoidVector(new THREE.Vector3(this.mesh.position.x, -rangeHeight, this.mesh.position.z)));
            sumVector.add(this.getAvoidVector(new THREE.Vector3(this.mesh.position.x, this.mesh.position.y, rangeDepth)));
            sumVector.add(this.getAvoidVector(new THREE.Vector3(this.mesh.position.x, this.mesh.position.y, -rangeDepth)));
            sumVector.multiplyScalar(Math.pow(this.velocity.length(), 4));
            return sumVector;
        }
    
        avoidDust(dusts) {
        
            const sumVector = new THREE.Vector3();
            let cnt = 0;
            const maxSpeed = this.separateMaxSpeed;
            const maxForce = this.separateMaxForce;
            const steerVector = new THREE.Vector3();
    
            dusts.forEach((dust) => {
                const effectiveRange = dust.geometry.boundingSphere.radius + 600;
                const dist = this.mesh.position.distanceTo(dust.position);
                if (dist > 0 && dist < effectiveRange) {
                    let toMeVector = new THREE.Vector3();
                    toMeVector.subVectors(this.mesh.position, dust.position);
                    toMeVector.normalize();
                    toMeVector.divideScalar(Math.pow(dist, 4));
                    sumVector.add(toMeVector);
                    cnt++;
                }
            });
    
            if (cnt > 0) {
                sumVector.divideScalar(cnt);
                sumVector.normalize();
                sumVector.multiplyScalar(maxSpeed);
    
                steerVector.subVectors(sumVector, this.velocity);
                // limit force
                if (steerVector.length() > maxForce) {
                    steerVector.clampLength(0, maxForce);
                }
            }
    
            return steerVector;
            
        }
    
    }
    
    class Escaper {
        constructor() {
            const geometry = new THREE.CylinderGeometry(1, 24, 60, 12);
            geometry.rotateX(THREE.Math.degToRad(90));
            //const color = new THREE.Color(`hsl(${getRandomNum(360)}, 100%, 50%)`);
            const color = new THREE.Color(0x93deff);
            const material = new THREE.MeshLambertMaterial({
                wireframe: false,
                color: color
            });
            this.mesh = new THREE.Mesh(geometry, material);
            const radius = getRandomNum(100);
            const theta = THREE.Math.degToRad(getRandomNum(180));
            const phi = THREE.Math.degToRad(getRandomNum(360));
            this.mesh.position.x = Math.sin(theta) * Math.cos(phi) * radius;
            this.mesh.position.y = Math.sin(theta) * Math.sin(phi) * radius;
            this.mesh.position.z = Math.cos(theta) * radius;
            this.velocity = new THREE.Vector3();
            this.acceleration = new THREE.Vector3();
            this.maxSpeed = 40;
            this.seekMaxSpeed = 40;
            this.seekMaxForce = 1.0;
        }
    
        applyForce(f) {
            this.acceleration.add(f.clone());
        }
    
        update() {
            const maxSpeed = this.maxSpeed;
    
            // update velocity
            this.velocity.add(this.acceleration);
    
            // limit velocity
            if (this.velocity.length() > maxSpeed) {
                this.velocity.clampLength(0, maxSpeed);
            }
    
            // update position
            this.mesh.position.add(this.velocity);
            
            // reset acc
            this.acceleration.multiplyScalar(0);
            
            // head
            const head = this.velocity.clone();
            head.multiplyScalar(10);
            head.add(this.mesh.position);
            this.mesh.lookAt(head);
            
        }
    
        seek(target = new THREE.Vector3()) {
            const maxSpeed = this.seekMaxSpeed;
            const maxForce = this.seekMaxForce;
            const toGoalVector = new THREE.Vector3();
            toGoalVector.subVectors(target, this.mesh.position);
            const distance = toGoalVector.length();
            toGoalVector.normalize();
            toGoalVector.multiplyScalar(maxSpeed);
            const steerVector = new THREE.Vector3();
            steerVector.subVectors(toGoalVector, this.velocity);
            // limit force
            if (steerVector.length() > maxForce) {
                steerVector.clampLength(0, maxForce);
            }
            return steerVector;
        }
    
    }
    
    class Chaser {
        constructor() {
            const geometry = new THREE.CylinderGeometry(1, 10, 50, 12);
            geometry.rotateX(THREE.Math.degToRad(90));
            const color = new THREE.Color(`hsl(${getRandomNum(360)}, ${0}%, ${getRandomNum(100, 15)}%)`);
            const material = new THREE.MeshLambertMaterial({
                wireframe: false,
                color: color
            });
            this.mesh = new THREE.Mesh(geometry, material);
            const radius = 1000;
            const theta = THREE.Math.degToRad(getRandomNum(180));
            const phi = THREE.Math.degToRad(getRandomNum(360));
            this.mesh.position.x = Math.sin(theta) * Math.cos(phi) * radius;
            this.mesh.position.y = Math.sin(theta) * Math.sin(phi) * radius;
            this.mesh.position.z = Math.cos(theta) * radius;
            this.velocity = new THREE.Vector3();
            this.acceleration = new THREE.Vector3();
            this.maxSpeed = 50;
            this.seekMaxSpeed = getRandomNum(50, 35);
            this.seekMaxForce = getRandomNum(20, 10) * 0.1;
            this.separateMaxSpeed = getRandomNum(120, 100);
            this.separateMaxForce = getRandomNum(70, 30) * 0.1;
        }
    
        applyForce(f) {
            this.acceleration.add(f.clone());
        }
    
        update() {
            const maxSpeed = this.maxSpeed;
    
            // update velocity
            this.velocity.add(this.acceleration);
    
            // limit velocity
            if (this.velocity.length() > maxSpeed) {
                this.velocity.clampLength(0, maxSpeed);
            }
    
            // update position
            this.mesh.position.add(this.velocity);
            
            // reset acc
            this.acceleration.multiplyScalar(0);
            
            // head
            const head = this.velocity.clone();
            head.multiplyScalar(10);
            head.add(this.mesh.position);
            this.mesh.lookAt(head);
            
        }
    
        seek(target = new THREE.Vector3()) {
            const maxSpeed = this.seekMaxSpeed;
            const maxForce = this.seekMaxForce;
            const toGoalVector = new THREE.Vector3();
            toGoalVector.subVectors(target, this.mesh.position);
            toGoalVector.normalize();
            toGoalVector.multiplyScalar(maxSpeed);
            const steerVector = new THREE.Vector3();
            steerVector.subVectors(toGoalVector, this.velocity);
            // limit force
            if (steerVector.length() > maxForce) {
                steerVector.clampLength(0, maxForce);
            }
            return steerVector;
        }
    
        separate(creatures) {
            const sumVector = new THREE.Vector3();
            let cnt = 0;
            const maxSpeed = this.separateMaxSpeed;
            const maxForce = this.separateMaxForce;
            const effectiveRange = 30;
            const steerVector = new THREE.Vector3();
    
            creatures.forEach((creature) => {
                const dist = this.mesh.position.distanceTo(creature.mesh.position);
                if (dist > 0 && dist < effectiveRange) {
                    let toMeVector = new THREE.Vector3();
                    toMeVector.subVectors(this.mesh.position, creature.mesh.position);
                    toMeVector.normalize();
                    toMeVector.divideScalar(Math.pow(dist, 2));
                    sumVector.add(toMeVector);
                    cnt++;
                }
            });
    
            if (cnt > 0) {
                sumVector.divideScalar(cnt);
                sumVector.normalize();
                sumVector.multiplyScalar(maxSpeed);
    
                steerVector.subVectors(sumVector, this.velocity);
                // limit force
                if (steerVector.length() > maxForce) {
                    steerVector.clampLength(0, maxForce);
                }
            }
    
            return steerVector;
        }
    
    }
    
    class ChaseCamera {
        constructor() {
            this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 20000);
            const radius = getRandomNum(2000);
            const theta = THREE.Math.degToRad(getRandomNum(180));
            const phi = THREE.Math.degToRad(getRandomNum(360));
            this.camera.position.x = Math.sin(theta) * Math.cos(phi) * radius;
            this.camera.position.y = Math.sin(theta) * Math.sin(phi) * radius;
            this.camera.position.z = Math.cos(theta) * radius;
            this.velocity = new THREE.Vector3();
            this.acceleration = new THREE.Vector3();
            this.maxSpeed = 40;
            this.seekMaxSpeed = 40;
            this.seekMaxForce = 4.0;
            this.time = getRandomNum(50) * 0.1;
            this.cameraWorkType = null;
            this.cameraDistanceMax = 2500;
            this.cameraDistanceMin = 200;
            this.cameraDistance = getRandomNum(this.cameraDistanceMax);
        }
    
        applyForce(f) {
            this.acceleration.add(f.clone());
        }
    
        update() {
            const maxSpeed = this.maxSpeed;
    
            // update velocity
            this.velocity.add(this.acceleration);
    
            // limit velocity
            if (this.velocity.length() > maxSpeed) {
                this.velocity.clampLength(0, maxSpeed);
            }
    
            // update position
            this.camera.position.add(this.velocity);
            
            // reset acc
            this.acceleration.multiplyScalar(0);
            
        }
    
        seek(target = new THREE.Vector3()) {
            const maxSpeed = this.seekMaxSpeed;
            const maxForce = this.seekMaxForce;
            const toGoalVector = new THREE.Vector3();
            toGoalVector.subVectors(target, this.camera.position);
            const distance = toGoalVector.length();
            toGoalVector.normalize();
            toGoalVector.multiplyScalar(maxSpeed);
            const steerVector = new THREE.Vector3();
            steerVector.subVectors(toGoalVector, this.velocity);
            // limit force
            if (steerVector.length() > maxForce) {
                steerVector.clampLength(0, maxForce);
            }
            return steerVector;
        }
    
        lookingZoomInOut(target, type) {
            if (type !== this.cameraWorkType) this.cameraWorkType = 'zoomInOut';
            const targetPos = target.mesh.position.clone();
            this.time += 0.01;
            this.time -= this.cameraDistance * 0.0000023;
            this.cameraDistance = this.cameraDistanceMax * Math.abs(Math.pow(Math.sin(this.time), 10)) + this.cameraDistanceMin;
            this.camera.position.x = targetPos.x;
            this.camera.position.y = targetPos.y;
            this.camera.position.z = targetPos.z + this.cameraDistance;
        }
    
        lookingAsChase(target, type) {
            const cameraTarget = new THREE.Vector3();
            const offsetTargetPos = target.velocity.clone();
            const escaperPos = target.mesh.position.clone();   
            const seek = this.seek(cameraTarget);
            this.applyForce(seek);
        }
    
        setChasePosition(type, cameraTarget) {
            if (type !== this.cameraWorkType) {
                this.cameraWorkType = type;
                this.camera.position.set(cameraTarget.x, cameraTarget.y, cameraTarget.z);
                this.velocity = new THREE.Vector3();
            }
        }
    
    }
    const dat = require('dat.gui');
    const gui = new dat.GUI();
     let currentCameraWork;
    
    
    
    const colorPalette = {
        screenBg: 0xf1f1f1,
        ambientLight: 0x777777,
        directionalLight: 0xffffff
    }
    
    const getRandomNum = (max = 0, min = 0) => Math.floor(Math.random() * (max + 1 - min)) + min;
    const chasers = [];
    let chaserGroup;
    let offsetPhase = getRandomNum(100, 0);
    currentCameraWork = 'zoomInOut';
    
    const render = () => {    
    
        /* bellwether
        ------------------------------------ */ 
        bellwether.randomWalk();
        // avoid wall
        bellwether.applyForce(bellwether.avoidBoxContainer(
            boxContainer.mesh.geometry.parameters.width / 2,
            boxContainer.mesh.geometry.parameters.height / 2,
            boxContainer.mesh.geometry.parameters.depth / 2
        ));
        // avoid dust
        bellwether.applyForce(bellwether.avoidDust(dustParticles.wrap.children));
        //bellwether.spiralWalk();
        bellwether.update();
    
        
    
        /* escaper
        ------------------------------------ */
        const steer = escaper.seek(bellwether.mesh.position);
        escaper.applyForce(steer);
        escaper.update();
    
        /* chasers
        ------------------------------------ */
        const offsetTarget1 = escaper.velocity.clone();
        const target = new THREE.Vector3();
        offsetTarget1.normalize();
        offsetPhase += 0.01;
        const offsetDistance = 200 * Math.abs(Math.sin(offsetPhase)) + 100;
        //let offsetDistance = 200;
        offsetTarget1.multiplyScalar(offsetDistance);
        target.subVectors(escaper.mesh.position, offsetTarget1);
    
        chasers.forEach((chaser) => {
            let seek = chaser.seek(target);
            chaser.applyForce(seek);
            let separate1 = chaser.separate(chasers);
            chaser.applyForce(separate1);
            chaser.update();
        });
    
        /* camera
        ------------------------------------ */
        chaseCamera.lookingZoomInOut(escaper, currentCameraWork);
        chaseCamera.camera.lookAt(escaper.mesh.position);
    
        /* renderer
        ------------------------------------ */
        renderer.render(scene, chaseCamera.camera);
        requestAnimationFrame(render);
    }
    
    const onResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        chaseCamera.camera.aspect = width / height;
        chaseCamera.camera.updateProjectionMatrix();
    }
    
    /* scene
    -------------------------------------------------------------*/
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(colorPalette.screenBg, 1200, 20000);
    
    /* box for border
    -------------------------------------------------------------*/
    const boxContainer = new BoxContainer(20000, 20000, 20000);
    scene.add(boxContainer.mesh);
    
    /* bellwether
    -------------------------------------------------------------*/
    const bellwether = new Bellwether();
    scene.add(bellwether.mesh);
    
    /* escaper
    -------------------------------------------------------------*/
    const escaper = new Escaper();
    escaper.mesh.geometry.computeBoundingSphere();
    scene.add(escaper.mesh);
    
    /* chaser
    -------------------------------------------------------------*/
    chaserGroup = new THREE.Group();
    for (let i = 0; i < 300; i++) {
        const chaser = new Chaser();
        chaser.mesh.geometry.computeBoundingSphere();
        chasers.push(chaser);
        chaserGroup.add(chaser.mesh);
    }
    scene.add(chaserGroup);
    
    /* dustParticles
    -------------------------------------------------------------*/
    const dustParticles = new DustParticles(150);
    dustParticles.wrap.children.forEach((dust) => {
        dust.geometry.computeBoundingSphere();
    })
    scene.add(dustParticles.wrap);
    
    /* camera
    -------------------------------------------------------------*/
    const chaseCamera = new ChaseCamera();
    scene.add(chaseCamera.camera);
    
    /* renderer
    -------------------------------------------------------------*/
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(new THREE.Color(colorPalette.screenBg));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    
    /* AmbientLight
    -------------------------------------------------------------*/
    const ambientLight = new THREE.AmbientLight(colorPalette.ambientLight);
    ambientLight.intensity = 1.0;
    scene.add(ambientLight);
    
    /* DirectionalLight
    -------------------------------------------------------------*/
    const directionalLight = new THREE.DirectionalLight(colorPalette.directionalLight, 1.0);
    directionalLight.position.set( 20000, 20000, 2000);
    scene.add( directionalLight );
    
    /* resize
    -------------------------------------------------------------*/
    window.addEventListener('resize', onResize);
    
    /* rendering start
    -------------------------------------------------------------*/
    document.getElementById('WebGL-output').appendChild(renderer.domElement);
    render();
           
}, [])
            
return (
    <body id="body">
        <div className="ontop">
            <h1 id="headline">DCXA FINANCE</h1>
        </div>
        <div id="abc">
        <div className="xyz" id="trade"></div>
        <div className="xyz" id="farming"></div>
        <div className="xyz" id="staking"></div>
        <div className="xyz" id="ifo"></div>
        </div>
    <div id="WebGL-output"></div>
</body>

    )
}
